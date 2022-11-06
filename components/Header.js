import React from "react";
import PropTypes from "prop-types";

import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Email from "@mui/icons-material/Email";
import Call from "@mui/icons-material/Call";

import useTheme from "@mui/material/styles/useTheme";

import Material3Button from "./Material3Button";

import LazyLoad from "react-lazy-load";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import LogoDark from "../public/images/logo/logo_dark.png";
import LogoLight from "../public/images/logo/logo_light.png";

function Navigation({ sections }) {
  const router = useRouter();

  return (
    <React.Fragment>
      <Tabs value={router.pathname}>
        {sections.map((section) => (
          <Tab
            key={section.url}
            value={section.url}
            label={section.title}
            component={Link}
            href={section.url}
            sx={{ fontSize: "1.1rem", textTransform: "none", fontWeight: 500 }}
          />
        ))}
      </Tabs>
    </React.Fragment>
  );
}

function Header(props) {
  const { sections } = props;
  const theme = useTheme();

  const logoImage = theme.palette.mode === "dark" ? LogoDark : LogoLight;

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          paddingBottom: { xs: 2, sm: 0 },
        }}
      >
        <Grid container>
          <Grid item sm={4} />
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
              <Link href="/">
                <LazyLoad>
                  <Image
                    src={logoImage}
                    alt="Deviren Elektrotechniek"
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      maxHeight: "150px",
                      minHeight: "100px",
                      minWidth: "200px",
                    }}
                  />
                </LazyLoad>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} alignSelf="center">
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-end" },
              }}
            >
              <Box display="flex" alignItems="center" flexDirection="column">
                <Material3Button
                  href="tel:+0647645498"
                  variant="contained"
                  startIcon={<Call />}
                >
                  06-47645498
                </Material3Button>
                <Material3Button
                  href="mailto:t-dagdeviren@hotmail.com"
                  variant="contained"
                  startIcon={<Email />}
                >
                  t-dagdeviren@hotmail.com
                </Material3Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          overflowX: "auto",
          backgroundColor: theme.palette.background.default,
          borderBottom: 1,
          borderColor: "divider",
          mb: 2,
          justifyContent: "center",
        }}
      >
        <Navigation sections={sections} />
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
