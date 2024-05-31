import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Templecards = ({ image }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Event Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum beatae totam vitae illo soluta officia explicabo nisi dolorem nesciunt eos.
          </Typography>
        </CardContent>

      </Card>
    </div>
  );
};

export default Templecards;
