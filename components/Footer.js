import React from "react";

import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import useTheme from "@mui/material/styles/useTheme";

import LogoTextDark from "../public/images/logo/logo_text_dark.png";
import LogoTextLight from "../public/images/logo/logo_text_light.png";

import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

function Copyright() {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Typography variant="body2" color="background.paper">
          {"Copyright © "}
          <Link href="/">Deviren Elektrotechniek</Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        marginTop={{ xs: 2, sm: 0 }}
        paddingRight="16px"
      >
        <Typography
          variant="body2"
          color="background.paper"
          sx={{ textAlign: { sm: "right" } }}
        >
          KvK Nummer: 66872847
        </Typography>
      </Grid>
    </Grid>
  );
}

function FooterContainer(props) {
  const { children } = props;
  const theme = useTheme();

  var backgroundColor = "";
  var boxShadow = "";
  if (theme.palette.mode === "dark") {
    backgroundColor = "#a3a3a3";
    boxShadow = "0px 0px 20px 0px #fff";
  } else {
    backgroundColor = "#5a5a5a";
    boxShadow = "0px 0px 20px 0px rgba(0,0,0,1)";
  }

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: backgroundColor,
        display: "flex",
        flexDirection: "column",
        boxShadow: boxShadow,
        py: 6,
        mt: 10,
      }}
    >
      {children}
    </Box>
  );
}

function FooterNavigationLink(props) {
  const { title, url, pathname } = props;

  return (
    <Box display="flex" flexDirection="row">
      {url === pathname && (
        <Box
          component="span"
          sx={{
            width: 4,
            height: 28,
            backgroundColor: "background.paper",
            marginRight: 1,
          }}
        />
      )}
      <Link href={url}>
        <Typography
          variant="subtitle1"
          className="footer-navigation-link"
          color="background.paper"
          gutterBottom
        >
          {title}
        </Typography>
      </Link>
    </Box>
  );
}

function Footer(props) {
  const { sections } = props;
  const router = useRouter();
  const theme = useTheme();

  const logoTextImage =
    theme.palette.mode === "dark" ? LogoTextDark : LogoTextLight;

  return (
    <FooterContainer>
      <Grid
        container
        spacing={2}
        justifyContent={{ xs: "center", sm: "space-evenly" }}
      >
        <Grid item xs={8} sm={4} md={3}>
          <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
            <Box alignSelf="center" marginX={3}>
              <Image src={logoTextImage} height="100" width="208" alt="" />
            </Box>
            <Box>
              <Typography variant="h4" color={`primary.main`} gutterBottom>
                Navigatie
              </Typography>
              {sections.map((section) => (
                <FooterNavigationLink
                  key={section.url}
                  title={section.title}
                  url={section.url}
                  pathname={router.pathname}
                />
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} sm={4} md={3} />
        <Grid
          item
          xs={8}
          sm={9}
          md={8}
          sx={{ borderTop: 2, borderColor: "primary.main", mt: 5 }}
        >
          <Copyright />
        </Grid>
      </Grid>
    </FooterContainer>
  );
}

Footer.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default Footer;
