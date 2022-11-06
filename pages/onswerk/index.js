import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import WorkImage from "../../components/WorkImage";

import workImages from "../../data/workImages";

function OnsWerk() {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Ons Werk
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {workImages.map((image) => (
          <Grid item key={image} xs={12} sm={6} md={4}>
            <WorkImage link={image} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default OnsWerk;
