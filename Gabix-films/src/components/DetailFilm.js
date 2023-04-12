import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import ActeursView from "../views/ActeursView"
import CritiqueView from "../views/CritiqueView"
import AjoutCritiqueView from "../views/AjoutCritiqueView";

export default function DetailFilm(props) {

  const titre = props.ptitre

  const url ="https://gabix-films.herokuapp.com/public/api/films/" + props.ptitre;
  const [film, setFilms] = useState({});
  useEffect(() => {
  const fetchOptions = { method: "GET" };
  //const critere = "jardin";
  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      setFilms(dataJSON);
      console.log(dataJSON)
    });
  }, [])
  return (
    <Container component="main">
      <main>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
              <Grid item key={film.titre} xs={12} sm={12} md={12}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }}
                > 
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "2%"
                    }}
                    image={film.logo}
                    alt="Affiche du Film"
                    height="800px"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" alignItems="center">
                    <Box sx={{ flex: 1 }}>
                    <Typography sx={{textAlign:"start", py:2}}>
                    <span style={{ fontWeight: "bold" }}>Date de sortie :</span> {film.date_sortie}
                    </Typography>
                      <Typography sx={{textAlign:"start", py:1}} gutterBottom variant="h4" component="h2">
                      <span style={{ fontWeight: "bold" }}>Titre :</span> {film.titre}
                    </Typography>
                    <Typography sx={{textAlign:"start", py:1}}>
                     <span style={{ fontWeight: "bold" }}>Catégorie/Genre :</span> {film.nom_categorie} - {film.nom_genre}
                    </Typography>
                  </Box>

                  <Box sx={{ flex: 1, marginLeft: "20px", textAlign:"end" }}>
                    <Typography sx={{ py:1}}>
                    <span style={{ fontWeight: "bold" }}>Pays : </span>{film.nom_pays}
                    </Typography>
                    <Typography sx={{ py:1}}>
                    <span style={{ fontWeight: "bold" }}>Durée : </span>{film.duree}
                    </Typography>
                    <Typography sx={{ py:1}}>
                    <span style={{ fontWeight: "bold" }}>Note : </span> /5
                    </Typography>
                  </Box>
                </Box>
                    
                  
                    
                
                    <Typography sx={{textAlign:"start", py:2}}>
                    <span style={{ fontWeight: "bold" }}>Synopsis :</span> {film.synopsis}
                    </Typography>

                    <ActeursView></ActeursView>
                    <CritiqueView></CritiqueView>
                    <AjoutCritiqueView ptitre={titre}></AjoutCritiqueView>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </Container>
  );
}