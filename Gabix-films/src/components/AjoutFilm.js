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
import { Link, useNavigate } from "react-router-dom";
import {Select, InputLabel} from "@mui/material";

export default function AjoutFilm(props) {

  const [ajoutFilm, setAjoutFilm] = useState({})
  const handleSubmit = (event) => {
    //const [dataUser, setDataUser] = useState([]);
    
    event.preventDefault();
    
   const data = {titre:SelectedTitre, age_min:SelectedAge, realisateur:SelectedRea, logo:SelectedAffiche, date_sortie:SelectedDate,duree:SelectedDuree , synopsis:SelectedSynopsis, id_categorie:SelectedCategorie, id_genre:SelectedGenres, id_pays:selectedPays}
    data.id_utilisateur=props.userid
    console.log(data)
    
      fetch("https://gabix-films.herokuapp.com/public/api/film/ajout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        setAjoutFilm(data)
       
      });
    
  };


  const [SelectedTitre, setSelectedTitre] = useState('');
  const handleChangeTitre = (event) => {
    setSelectedTitre(event.target.value);
  };

  const [SelectedAge, setSelectedAge] = useState('');
  const handleChangeAge = (event) => {
    setSelectedAge(event.target.value);
  };

  const [SelectedRea, setSelectedRea] = useState('');
  const handleChangeRea = (event) => {
    setSelectedRea(event.target.value);
  };

  const [SelectedAffiche, setSelectedAffiche] = useState('');
  const handleChangeAff = (event) => {
    setSelectedAffiche(event.target.value);
  };

  const [SelectedDate, setSelectedDate] = useState('');
  const handleChangeDate = (event) => {
    setSelectedDate(event.target.value);
  };

  const [SelectedDuree, setSelectedDuree] = useState('');
  const handleChangeDuree = (event) => {
    setSelectedDuree(event.target.value);
  };

  const [SelectedSynopsis, setSelectedSynopsis] = useState('');
  const handleChangeSyn = (event) => {
    setSelectedSynopsis(event.target.value);
  };


 const [SelectedCategorie, setSelectedCategories] = useState('');
  const handleChangeCat = (event) => {
    setSelectedCategories(event.target.value);
  };

 const [SelectedGenres, setSelectedGenres] = useState('');
  const handleChangeGen = (event) => {
    setSelectedGenres(event.target.value)
  };

 const [selectedPays, setSelectedPays] = useState('');
  const handleChangePays = (event) => { 
    setSelectedPays(event.target.value)
  };


 const urlcat = "https://gabix-films.herokuapp.com/public/api/categories"
 const [categories, setCategories] = useState([]);
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

  const urlgen = "https://gabix-films.herokuapp.com/public/api/genres"
  const [genres, setGenres] = useState([]);
  
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


  const urlpays ="https://gabix-films.herokuapp.com/public/api/pays"
  const [pays, setPays] = useState([]);
  
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
          Ajoutez quelque chose à regarder
        </Typography>
        <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              onChange={handleChangeTitre}
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
              onChange={handleChangeAge}
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
              onChange={handleChangeRea}
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
              onChange={handleChangeAff}
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
              onChange={handleChangeDate}
                required
                fullWidth
                type="date"
                id="date_sortie"
                name="date_sortie"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={handleChangeDuree}
                required
                fullWidth
                id="duree"
                name="duree"
                label="Duree (hh:mm:ss)"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChangeSyn}
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
                    <MenuItem key={categorie.id_categorie} value={categorie.id_categorie}>
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
                    <MenuItem key={genre.id_genre} value={genre.id_genre}>
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
                    <MenuItem key={p.id_pays} value={p.id_pays}>
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
            Ajouter
          </Button>
          
        </Box>
      </Box>
    </Container>
  );
}
