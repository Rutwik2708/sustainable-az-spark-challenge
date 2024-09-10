// components/CuteCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Box } from '@mui/material';

const CuteCard = ({ title, description, imageUrl, onActionClick }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                borderRadius: 2,
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': {
                    boxShadow: 6,
                },
            }}
        >
            {imageUrl && (
                <CardMedia
                    component="img"
                    alt={title}
                    height="140"
                    image={imageUrl}
                    sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
                />
            )}
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={onActionClick}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};

export default CuteCard;
