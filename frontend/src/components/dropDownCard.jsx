import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ImgMediaCard = ({ title, image, description }) => {
  return (
    <Card sx={{ maxWidth: 350, margin: 'auto' }}> {/* Adjusted maxWidth for compactness */}
      <CardMedia
        component="img"
        alt={title}
        height="100" // Adjusted height for a smaller card
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
