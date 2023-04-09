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

export default function ActeursFilm(props){
    const url ="http://gabixfilms.mmicastres.fr/public/api/films/" + props.ptitre + "/acteurs";
  const [acteur, setActeur] = useState([]);
  useEffect(() => {
  const fetchOptions = { method: "GET" };
  //const critere = "jardin";
  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      setActeur(dataJSON);
      console.log(dataJSON)
    });
  }, [])
  return(
    <Container component="main">
      <main>
      <Typography variant="h4">Listes des acteurs principaux</Typography>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {acteur.map((a) => (
              <Grid item key={a.id_acteur} xs={12} sm={6} md={4}>
                <Link to={"/detailacteur/" + a.id_acteur}>
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
                    image={a.img_acteur}
                    alt="img_acteur"
                    height="200px"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {a.nom}
                    </Typography>
                    <Typography>
                      {a.genre}
                    </Typography>
                  </CardContent>
                </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Container>
  )
}