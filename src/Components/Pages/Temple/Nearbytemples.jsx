import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Nearbytemples = ({ temple }) => {

  const styles = {
    card: {
      position: 'relative',
      maxWidth: 320,
      margin: "20px",
    },
    mediaContainer: {
      height: 200,
      position: 'relative',
      overflow: 'hidden',
    },
    media: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark filter
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: '28px',
      textAlign: 'center',
      zIndex: 1, // Ensure overlay is above the image
    },
  };

  return (
    <div className="affiliate_card">
      <Card style={styles.card}>
        <div style={styles.mediaContainer}>
          <CardMedia
            image={`${process.env.REACT_APP_BACKEND_URL}/${temple.pictures[0]}`}
            component="img"
            title={temple.name}
            style={styles.media}
          />
          <div style={styles.overlay}>
            {temple.name}
          </div>
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {temple.description.split(' ').slice(0, 15).join(' ')}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Visit</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Nearbytemples;
