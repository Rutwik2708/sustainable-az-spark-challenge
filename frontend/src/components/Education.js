import React from 'react';
import '../styles/Education.css';
import { FaHandsHelping, FaGavel, FaBuilding, FaGlobe } from 'react-icons/fa';

const Education = () => {
  return (
    <div className="education-container">
      <h1>Mining Issues and Rights in Arizona</h1>

      <div className="education-grid">

        {/* Rights of Citizens */}
        <div className="education-tile">
          <FaHandsHelping className="icon" />
          <h2>Rights of Citizens</h2>
          <p>As a citizen, you have various rights when it comes to mining activities:</p>
          <ul>
            <li><strong>Right to Information:</strong> You can request information about mining activities in your area. <a href="https://www.azleg.gov/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
            <li><strong>Right to Protest:</strong> You can voice your concerns and participate in public hearings. <a href="https://www.epa.gov/" target="_blank" rel="noopener noreferrer">More on public participation</a></li>
            <li><strong>Environmental Protection:</strong> Citizens are entitled to seek environmental protection by reporting violations. <a href="https://www.azdeq.gov/" target="_blank" rel="noopener noreferrer">Report violations</a></li>
          </ul>
        </div>

        {/* Rights of Native People */}
        <div className="education-tile">
          <FaHandsHelping className="icon" />
          <h2>Rights of Native People</h2>
          <p>Native American communities in Arizona have special rights and protections when it comes to mining on tribal lands:</p>
          <ul>
            <li><strong>Sovereignty:</strong> Tribal nations can decide whether to allow or deny mining on their land. <a href="https://www.bia.gov/" target="_blank" rel="noopener noreferrer">Learn more</a></li>
            <li><strong>Consultation:</strong> Federal law requires consultation with Native communities before mining projects. <a href="https://www.federalregister.gov/" target="_blank" rel="noopener noreferrer">More about Federal Consultation</a></li>
            <li><strong>Environmental Protections:</strong> Mining projects must comply with regulations to protect sacred sites. <a href="https://www.epa.gov/tribal" target="_blank" rel="noopener noreferrer">EPA Tribal Protections</a></li>
          </ul>
        </div>

        {/* Escalation Options */}
        <div className="education-tile">
          <FaGavel className="icon" />
          <h2>Escalation Options</h2>
          <p>If mining activities threaten your rights or the environment, consider these escalation options:</p>
          <ul>
            <li><strong>Local Authorities:</strong> Report issues to your local government. <a href="https://az.gov/" target="_blank" rel="noopener noreferrer">Contact officials</a></li>
            <li><strong>Legal Action:</strong> Seek legal advice or file a complaint. <a href="https://lawhelp.org" target="_blank" rel="noopener noreferrer">Get legal help</a></li>
            <li><strong>Raise Awareness:</strong> Use social media to bring attention to issues. <a href="https://www.change.org" target="_blank" rel="noopener noreferrer">Create a petition</a></li>
          </ul>
        </div>

        {/* NGOs and Organizations */}
        <div className="education-tile">
          <FaBuilding className="icon" />
          <h2>NGOs and Organizations</h2>
          <p>Here are some organizations working towards sustainable mining in Arizona:</p>
          <ul>
            <li><a href="https://www.azminingreform.org" target="_blank" rel="noopener noreferrer">Arizona Mining Reform Coalition</a></li>
            <li><a href="https://earthworks.org" target="_blank" rel="noopener noreferrer">Earthworks</a></li>
            <li><a href="https://www.ienearth.org" target="_blank" rel="noopener noreferrer">Indigenous Environmental Network</a></li>
          </ul>
        </div>

        {/* SDGs Impacted */}
        <div className="education-tile sdg-tile">
  <FaGlobe className="icon" />
  <h2>How Mining Affects Global Goals</h2>
  <p>Mining has a wide-reaching impact on the world, especially in relation to the UN's Sustainable Development Goals (SDGs). Here are some of the key SDGs impacted by mining activities:</p>
  <ul>
    <li>
      <img src="https://sdgs.un.org/sites/default/files/styles/sdg_logo_large/public/2020-09/E_SDG_Icons-06.jpg" alt="SDG 6 Logo" className="sdg-logo" />
      <strong>SDG 6: Clean Water and Sanitation</strong> <br />
      Mining can affect water resources through contamination or overuse, jeopardizing access to clean water. <a href="https://www.un.org/sustainabledevelopment/water-and-sanitation/" target="_blank" rel="noopener noreferrer">Learn more</a>
    </li>
    <li>
      <img src="https://sdgs.un.org/sites/default/files/styles/sdg_logo_large/public/2020-09/E_SDG_Icons-08.jpg" alt="SDG 8 Logo" className="sdg-logo" />
      <strong>SDG 8: Decent Work and Economic Growth</strong> <br />
      Mining can contribute to local economies, but it must ensure fair labor practices and safe working conditions. <a href="https://www.un.org/sustainabledevelopment/economic-growth/" target="_blank" rel="noopener noreferrer">Learn more</a>
    </li>
    <li>
      <img src="https://sdgs.un.org/sites/default/files/styles/sdg_logo_large/public/2020-09/E_SDG_Icons-13.jpg" alt="SDG 13 Logo" className="sdg-logo" />
      <strong>SDG 13: Climate Action</strong> <br />
      Mining operations contribute to carbon emissions, making climate action critical in mitigating these effects. <a href="https://www.un.org/sustainabledevelopment/climate-change/" target="_blank" rel="noopener noreferrer">Learn more</a>
    </li>
    <li>
      <img src="https://sdgs.un.org/sites/default/files/styles/sdg_logo_large/public/2020-09/E_SDG_Icons-15.jpg" alt="SDG 15 Logo" className="sdg-logo" />
      <strong>SDG 15: Life on Land</strong> <br />
      Mining impacts ecosystems and biodiversity, which makes it crucial to protect habitats from its consequences. <a href="https://www.un.org/sustainabledevelopment/biodiversity/" target="_blank" rel="noopener noreferrer">Learn more</a>
    </li>
  </ul>
</div>

      </div>
    </div>
  );
}

export default Education;
