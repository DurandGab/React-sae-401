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

export default function CritiqueFilm(props){
    const url ="http://gabixfilms.mmicastres.fr/public/api/films/" + props.ptitre + "/critiques";
  const [critique, setCritique] = useState([]);
  useEffect(() => {
  const fetchOptions = { method: "GET" };
  //const critere = "jardin";
  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      setCritique(dataJSON);
      console.log(dataJSON)
    });
  }, [])
  return(
    <Container sx={{display:"flex", justifyContent: "center"}} component="main">
      <main>
      <Typography variant="h4">Les critiques</Typography>
        <Container sx={{ py: 2}} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {critique.map((c) => (
              <Grid item key={c.id_utilisateur} xs={12} sm={12} md={12}>
                {/* <Link to={"/detailfilm/" + a.titre}> */}
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign:"start"
                   
                  }}
                > 
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {c.nom}      {c.prenom}
                    </Typography>
                    <Typography>
                      commentaire : {c.commentaire}
                    </Typography>
                    <Typography>
                      note : {c.note}
                    </Typography>
                  </CardContent>
                </Card>
                {/* </Link> */}
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </Container>
  )
}