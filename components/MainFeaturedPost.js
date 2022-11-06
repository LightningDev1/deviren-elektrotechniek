import * as React from "react";
import PropTypes from "prop-types";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import LazyLoad from "react-lazy-load";

import Image from "next/image";

function MainFeaturedPost({ post, centerText }) {
  centerText = centerText || false;

  return (
    <Paper
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 7,
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      <LazyLoad>
        <Image
          style={{ display: "none" }}
          src={post.image}
          width="100"
          height="100"
          alt={post.imageText}
        />
      </LazyLoad>

      {/* Darken image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.45)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          p: { xs: 3, md: 6 },
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          color="inherit"
          sx={{ fontSize: { xs: "2.5rem", sm: "3rem" } }}
          textAlign={centerText ? "center" : "left"}
          gutterBottom
        >
          {post.title}
        </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          {post.description}
        </Typography>
      </Box>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  centerText: PropTypes.bool,
};

export default MainFeaturedPost;
