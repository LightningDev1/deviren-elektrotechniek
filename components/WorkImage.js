import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import LazyLoad from "react-lazy-load";

import Material3Button from "./Material3Button";

function WorkImage({ link }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClickOpen}>
          <LazyLoad>
            <CardMedia
              component="img"
              height="240"
              className="hover-zoom"
              image={link}
            />
          </LazyLoad>
        </CardActionArea>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <LazyLoad>
            <CardMedia
              component="img"
              image={link}
              sx={{ borderRadius: "15px" }}
            />
          </LazyLoad>
        </DialogContent>
        <DialogActions>
          <Material3Button variant="contained" onClick={handleClose}>
            Sluiten
          </Material3Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default WorkImage;
