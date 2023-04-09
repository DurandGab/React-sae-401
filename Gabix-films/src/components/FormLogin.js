import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Link } from "react-router-dom";
import {useEffect, useState} from "react"
export default function SignIn() {

  const url="http://gabixfilms.mmicastres.fr/public/api/user"

  const [data, setData] = useState({});

  const updateData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(data);
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status === 1) {
            console.log(data.user)
          }
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Connectez-vous
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={updateData}
            margin="normal"
            required
            fullWidth
            id="mail"
            label="Mail"
            name="mail"
            autoComplete="email"
            autoFocus
          />
          <TextField
          onChange={updateData}
            margin="normal"
            required
            fullWidth
            name="mdp"
            label="Mot de passe"
            type="password"
            id="mdp"
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Connexion
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/ident">{"Pas de compte ? Créer un compte"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
