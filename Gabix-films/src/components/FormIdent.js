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

import { Link } from "react-router-dom";

export default function FormIdent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
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
          S'enregistrer
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="prenom"
                required
                fullWidth
                id="prenom"
                label="Prénom"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="nom"
                label="Nom"
                name="nom"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="mail"
                type="mail"
                label="Mail"
                name="mail"
                autoComplete="mail"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="date"
                id="date_naiss"
                name="date_naiss"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="mdp"
                label="Mot de passe"
                type="password"
                id="mdp"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="img_profil"
                type="url"
                label="URL avatar"
                name="img_profil"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Inscription
          </Button>
          <Grid container justifyContent="center">
            <Link to="/login">
              <Grid item>Vous avez un compte ? Connexion</Grid>
            </Link>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
