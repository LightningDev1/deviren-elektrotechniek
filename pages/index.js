import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import MainFeaturedPost from "../components/MainFeaturedPost";
import ContactCards from "../components/ContactCards";

import randomChoice from "../utils/randomChoice";
import mainImages from "../data/mainImages";

import LazyLoad from "react-lazy-load";

const mainFeaturedPost = {
  title: "Deviren Elektrotechniek",
  description: "Uw elektrotechnisch installatiebedrijf",
  image: randomChoice(mainImages),
  imageText: "Deviren Elektrotechniek",
};

export default function Home() {
  return (
    <React.Fragment>
      <LazyLoad>
        <MainFeaturedPost post={mainFeaturedPost} />
      </LazyLoad>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 7, padding: 1 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Wat doen wij?
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Wij ontwerpen, installeren en onderhouden projecten op het
                gebied van elektrotechniek, data en communicatie, verlichting en
                beveiliging. Daarnaast kunt u ook bij ons terecht voor het
                verhelpen van defecten en storingen. Ondanks dat onze
                onderneming nog jong is, nemen wij een schat aan ervaring met
                ons mee. Wij werken met een zorgvuldig samengesteld team.
                Deviren Elektrotechniek biedt veilige en betrouwbare
                installaties aangelegd volgens de meest moderne technieken. Dit
                doen wij deskundig en met veel enthousiasme. Bent u benieuwd wat
                wij voor u kunnen betekenen? Neem dan contact met ons op. Wij
                ondersteunen u graag bij uw project.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <ContactCards showContactButton={true} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
