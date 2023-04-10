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
import { useState, useEffect } from "react";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import {Select, InputLabel} from "@mui/material";

export default function AjoutFilm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  const handleChangeCat = (event) => {
    setSelectedCategories(event.target.value);
  };

  const handleChangeGen = (event) => {
    setSelectedGenres(event.target.value)
  };

  const handleChangePays = (event) => { 
    setSelectedPays(event.target.value)
  };

 const urlcat = "https://gabixfilms.mmicastres.fr/public/api/categories"
 const urlgen = "https://gabixfilms.mmicastres.fr/public/api/genres"
 const urlpays ="https://gabixfilms.mmicastres.fr/public/api/pays"

 const [categories, setCategories] = useState([]);
 const [SelectedCategorie, setSelectedCategories] = useState('');
  useEffect(() => {
  const fetchOptions = { method: "GET" };
  //const critere = "jardin";
  fetch(urlcat , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      setCategories(dataJSON);
      console.log(dataJSON)
    });
  }, [])

  const [genres, setGenres] = useState([]);
  const [SelectedGenres, setSelectedGenres] = useState('');
  useEffect(() => {
  const fetchOptions = { method: "GET" };
  //const critere = "jardin";
  fetch(urlgen , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      setGenres(dataJSON);
      console.log(dataJSON)
    });
  }, [])

  const [pays, setPays] = useState([]);
  const [selectedPays, setSelectedPays] = useState('');
  useEffect(() => {
  const fetchOptions = { method: "GET" };
  //const critere = "jardin";
  fetch(urlpays , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      setPays(dataJSON);
      console.log(dataJSON)
    });
  }, [])

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
          Ajouter quelque chose à regarder
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="titre"
                required
                fullWidth
                id="titre"
                label="titre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="age_min"
                label="age minimum"
                name="age_min"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="realisateur"
                label="Realisateur"
                name="realisateur"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="logo"
                type="url"
                label="Affiche"
                name="logo"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="date"
                id="date_sortie"
                name="date_sortie"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                
                required
                fullWidth
                name="synopsis"
                label="synopsis" 
                id="synopsis"
              />
            </Grid>
            <Grid item xs={12}>
            <InputLabel id="categories" >choississez votre categorie</InputLabel>
              <Select
                fullWidth
                labelId="categories"
                value={SelectedCategorie}
                name="categories" 
                id="categories"
                onChange={handleChangeCat}    
                >
                {categories.map((categorie) => (
                    <MenuItem key={categorie.id_categorie} value={categorie.nom_categorie}>
                    {categorie.nom_categorie}
                    </MenuItem>
                 ))}
             </Select> 
            </Grid>
            <Grid item xs={12}>
            <InputLabel id="genre">Choisissez le genre</InputLabel>
              <Select
                fullWidth
                labelId="genre"
                value={SelectedGenres}
                name="genre"
                id="genre"
                onChange={handleChangeGen}
                >
                {genres.map((genre) => (
                    <MenuItem key={genre.id_genre} value={genre.nom_genre}>
                    {genre.nom_genre}
                    </MenuItem>
      ))}
             </Select> 
            </Grid>
            <Grid item xs={12}>
            <InputLabel id="pays">Choisissez le pays</InputLabel>
              <Select
                fullWidth
                labelId="pays"
                value={selectedPays}
                name="pays"
                id="pays"
                onChange={handleChangePays}
                >
                {pays.map((p) => (
                    <MenuItem key={p.id_pays} value={p.nom_pays}>
                    {p.nom_pays}
                    </MenuItem>
      ))}
             </Select> 
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ajouter de quoi regarder
          </Button>
          
        </Box>
      </Box>
    </Container>
  );
}
