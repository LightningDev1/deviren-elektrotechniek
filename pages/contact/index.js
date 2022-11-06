import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

import ContactCards from "../../components/ContactCards";
import Material3Button from "../../components/Material3Button";
import MainFeaturedPost from "../../components/MainFeaturedPost";

import { useSnackbar } from "notistack";

import LazyLoad from "react-lazy-load";

import randomChoice from "../../utils/randomChoice";
import mainImages from "../../data/mainImages";
import api from "../../api/api";

function ContactCard() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [helperTexts, setHelperTexts] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const { enqueueSnackbar } = useSnackbar();

  const onNameChange = (event) => {
    setName(event.target.value);
    if (helperTexts.name !== "") {
      setHelperTexts({ ...helperTexts, name: "" });
    }
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
    if (helperTexts.email !== "") {
      setHelperTexts({ ...helperTexts, email: "" });
    }
  };
  const onPhoneChange = (event) => {
    setPhone(event.target.value);
    if (helperTexts.phone !== "") {
      setHelperTexts({ ...helperTexts, phone: "" });
    }
  };
  const onSubjectChange = (event) => {
    setSubject(event.target.value);
    if (helperTexts.subject !== "") {
      setHelperTexts({ ...helperTexts, subject: "" });
    }
  };
  const onMessageChange = (event) => {
    setMessage(event.target.value);
    if (helperTexts.message !== "") {
      setHelperTexts({ ...helperTexts, message: "" });
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    var tempHelperTexts = helperTexts;

    if (name === "") {
      tempHelperTexts = {
        ...tempHelperTexts,
        name: "Naam kan niet leeg zijn!",
      };
    }
    if (email === "") {
      tempHelperTexts = {
        ...tempHelperTexts,
        email: "Email kan niet leeg zijn!",
      };
    }
    if (phone === "") {
      tempHelperTexts = {
        ...tempHelperTexts,
        phone: "Telefoonnummer kan niet leeg zijn!",
      };
    }
    if (subject === "") {
      tempHelperTexts = {
        ...tempHelperTexts,
        subject: "Onderwerp kan niet leeg zijn!",
      };
    }
    if (message === "") {
      tempHelperTexts = {
        ...tempHelperTexts,
        message: "Bericht kan niet leeg zijn!",
      };
    }

    if (tempHelperTexts !== helperTexts) {
      setHelperTexts(tempHelperTexts);
    } else {
      api
        .createOfferte(name, email, phone, subject, message)
        .then((response) => {
          if (response.success) {
            enqueueSnackbar(
              "Uw bericht is successvol verzonnen! We zullen zo snel mogelijk reageren.",
              { variant: "success" }
            );
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
          } else {
            enqueueSnackbar(
              "Er is iets fout gegaan, probeer het later nog eens.",
              { variant: "error" }
            );
          }
        });
    }
  };

  return (
    <Card sx={{ width: "100%", borderRadius: 7, padding: 2 }}>
      <CardContent>
        <TextField
          fullWidth
          required
          label="Naam"
          value={name}
          onChange={onNameChange}
          error={helperTexts.name !== ""}
          helperText={helperTexts.name}
          variant="outlined"
        />

        <Box sx={{ my: 5 }} />

        <TextField
          fullWidth
          required
          type="email"
          label="Email"
          value={email}
          onChange={onEmailChange}
          error={helperTexts.email !== ""}
          helperText={helperTexts.email}
          variant="outlined"
        />

        <Box sx={{ my: 5 }} />

        <TextField
          fullWidth
          required
          type="tel"
          label="Telefoonnummer"
          value={phone}
          onChange={onPhoneChange}
          error={helperTexts.phone !== ""}
          helperText={helperTexts.phone}
          variant="outlined"
        />

        <Box sx={{ my: 5 }} />

        <TextField
          fullWidth
          required
          label="Onderwerp"
          value={subject}
          onChange={onSubjectChange}
          error={helperTexts.subject !== ""}
          helperText={helperTexts.subject}
          variant="outlined"
        />

        <Box sx={{ my: 5 }} />

        <TextField
          fullWidth
          multiline
          required
          label="Bericht"
          value={message}
          onChange={onMessageChange}
          error={helperTexts.message !== ""}
          helperText={helperTexts.message}
          variant="outlined"
        />

        <Box sx={{ my: 5 }} />

        <Box display="flex" justifyContent="center">
          <Material3Button
            variant="contained"
            sx={{ p: 3, fontSize: "1rem", justifySelf: "center" }}
            onClick={onSubmit}
          >
            Versturen
          </Material3Button>
        </Box>
      </CardContent>
    </Card>
  );
}

function Contact() {
  return (
    <React.Fragment>
      {/* <Card sx={{ borderRadius: 7 }}>
        <LazyLoad>
          <CardMedia
            component="img"
            height="300"
            image={randomChoice(mainImages)}
            alt=""
          />
        </LazyLoad>
      </Card> */}

      <LazyLoad>
        <MainFeaturedPost
          post={{
            title: "Contact",
            description: "\u00A0",
            image: randomChoice(mainImages),
            imageText: "Contact",
          }}
          centerText
        />
      </LazyLoad>
      <Grid container spacing={4} justifyContent="center" marginTop={-15}>
        <Grid item sm={10} md={6} zIndex={10}>
          <ContactCard />
        </Grid>
        <Grid item sm={10} md={4} zIndex={10}>
          <ContactCards />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Contact;
