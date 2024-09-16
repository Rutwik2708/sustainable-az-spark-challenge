import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { useNavigate } from 'react-router-dom'; // Updated import
import styled from 'styled-components';
import TicketService from '../services/TicketService';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Header from './Header';


// Styled component for the legend
const LegendContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: ${props => props.color};
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px); /* Subtracting AppBar height */
  position: relative;
`;

const ForceDirectedGraph = ({ username, password }) => {
  const svgRef = useRef(null);
  const [data, setData] = useState([]);
  const [colorMap, setColorMap] = useState({});
  const navigate = useNavigate(); // Use navigate instead of history
  const handleLogout = () => {
    navigate('/logout');
  };

  useEffect(() => {
    // Fetch data from backend API
    const fetchData = async () => {
      try {
        const response = await TicketService.getAllTickets(username, password); // API endpoint

        const tickets = response;

        // Create category mapping and count
        const categoryCounts = {};
        tickets.forEach((ticket) => {
          const category = ticket.pollutionCategory;
          if (!categoryCounts[category]) {
            categoryCounts[category] = 0;
          }
          categoryCounts[category]++;
        });

        console.log('Category Counts:', categoryCounts);
        // Create color mapping
        const colorMapping = {
          'Water Pollution': '#1f77b4',
          'Air Pollution': '#ff7f0e',
          'Soil Degradation': '#2ca02c',
          'Habitat Destruction': '#d62728',
          'Noise Pollution': '#9467bd',
          'Groundwater Depletion': '#8c564b',
          'Dust Pollution': '#e377c2',
          'Heavy Metal Contamination': '#7f7f7f',
          'Toxic Waste Spills': '#bcbd22',
          'Ecosystem Disruption': '#17becf',
        };

        // Prepare data for the visualization
        const updatedData = Object.entries(categoryCounts).map(([category, count]) => ({
          name: category,
          count: count,
          color: colorMapping[category] || '#999', // Default color if not in the map
        }));

        setColorMap(colorMapping);
        setData(updatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const width = 1000;
    const height = 700;

    // Create the SVG container
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .style('border', '1px solid lightgray');

    // Scales for positioning and sizing
    const sizeScale = d3.scaleSqrt()
      .domain([0, d3.max(data, (d) => d.count)])
      .range([20, 60]);

    // Initialize simulation
    const simulation = d3.forceSimulation(data)
      .force('x', d3.forceX(width / 2).strength(0.1))
      .force('y', d3.forceY(height / 2).strength(0.1))
      .force('collide', d3.forceCollide((d) => sizeScale(d.count) + 5))
      .alpha(1)
      .alphaTarget(0)
      .stop();

    // Run the simulation to convergence
    while (simulation.alpha() > 0.05) {
      simulation.tick();
    }

    // Append circles for nodes
    const circles = svg.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', (d) => sizeScale(d.count))
      .attr('fill', (d) => d.color) // Apply color based on data
      .attr('cursor', 'pointer') // Cursor style for clickability
      .on('click', (event, d) => {
        // Navigate to the new page with the selected category
        navigate(`/ticketsbycategory/${encodeURIComponent(d.name)}`);
      })
      .call(d3.drag().on('start', dragStarted).on('drag', dragged).on('end', dragEnded));

    // Add numbers inside circles
    const labels = svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text((d) => d.count)
      .style('fill', 'white')
      .style('font-size', '12px');

    // Update positions of circles and labels
    circles
      .transition()
      .duration(1000)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y);

    labels
      .transition()
      .duration(1000)
      .attr('x', (d) => d.x)
      .attr('y', (d) => d.y);

    // Drag behavior functions
    function dragStarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnded(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [data, navigate]); // Updated to use navigate

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Header/>
      
      <Container>
        {/* Color Legend */}
        <LegendContainer>
          <h3>Pollution Categories</h3>
          {Object.entries(colorMap).map(([name, color]) => (
            <LegendItem key={name}>
              <ColorBox color={color} />
              <span>{name}</span>
            </LegendItem>
          ))}
        </LegendContainer>

        {/* SVG Graph */}
        <svg ref={svgRef}></svg>
      </Container>
    </Box>
  );
};

export default ForceDirectedGraph;
