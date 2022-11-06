import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Material3Button from "../components/Material3Button";

import Link from "next/link";

function NotFound() {
  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Typography variant="h2" color="primary.main" textAlign="center">
          404
        </Typography>

        <Typography variant="h3" textAlign="center" mb={10}>
          Pagina niet gevonden!
        </Typography>

        <Material3Button
          variant="contained"
          component={Link}
          href="/"
          className="link"
          sx={{ p: 3, fontSize: "1rem", mb: 5 }}
        >
          Ga terug naar de homepagina
        </Material3Button>
      </Box>
    </Box>
  );
}

export default NotFound;
