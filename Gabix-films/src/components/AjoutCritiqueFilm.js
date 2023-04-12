import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { InputLabel, Select } from "@mui/material";
import { useState } from "react";
import { MenuItem } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";

export default function AjoutCritiqueFilm(props) {
  const [dataUser, setDataUser] = useState({});
  const [ajoutCritique, setAjoutCritique] = useState({})
  const updateData = (event) => {
    setDataUser({
      ...dataUser,id_utilisateur:6,

      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataUser)
    fetch("https://gabix-films.herokuapp.com/public/api/films/" + props.ptitre + "/critique", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAjoutCritique(data)
        
        // window.location.href="/login"
      });
  };


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography component="h1" variant="h5">
            Donnez votre critique
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              multiline
              onChange={updateData}
                autoComplete="given-name"
                name="commentaire"
                required
                fullWidth
                id="commentaire"
                label="commentaire"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
            <TextField
              onChange={updateData}
                autoComplete="given-name"
                name="note"
                required
                type="number"
                inputProps={{ min: 1, max: 5 }}
                fullWidth
                id="note"
                label="note (de 1 à 5)"
                autoFocus
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ajoutez votre critique
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
