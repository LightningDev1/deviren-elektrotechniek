import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Material3Button from "../components/Material3Button";

import Link from "next/link";

function ContactCards({ showContactButton }) {
  showContactButton = showContactButton || false;
  return (
    <React.Fragment>
      <Card sx={{ borderRadius: 7, padding: 1, mb: 4 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Telefoonnummer
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <a href="tel:+0647645498" className="contact-link">
              06-47645498
            </a>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Email
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <a href="mailto:t-dagdeviren@hotmail.com" className="contact-link">
              t-dagdeviren@hotmail.com
            </a>
          </Typography>
        </CardContent>
      </Card>
      {showContactButton && (
        <Card sx={{ borderRadius: 7, padding: 1, mt: 4 }}>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Neem gerust contact met ons op door op de onderstaande knop te
              drukken. Wij nemen zo snel mogelijk contact met u op.
            </Typography>
            <Box width="max-content" margin="0 auto" marginTop={2}>
              <Material3Button
                variant="contained"
                component={Link}
                href="/contact"
                className="link"
                sx={{ p: 3, fontSize: "1rem" }}
              >
                Contact
              </Material3Button>
            </Box>
          </CardContent>
        </Card>
      )}
    </React.Fragment>
  );
}

export default ContactCards;
