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
import ListFilmsActeurView from "../views/ListFilmsActeurView"
export default function DetailActeur(props) {

  

  const url ="http://gabixfilms.mmicastres.fr/public/api/acteurs/" + props.pid;
  const [acteur, setActeur] = useState({});
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
  return (
    <Container component="main">
      <main>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            
              <Grid item key={acteur.id_acteur} xs={12} sm={12} md={12}>
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
                    image={acteur.img_acteur}
                    alt="random"
                    height="500px"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" alignItems="center">
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{textAlign:"start", py:1}} gutterBottom variant="h5" component="h2">
                      <span style={{ fontWeight: "bold" }}>Nom/Prenom :</span> {acteur.nom}
                    </Typography>
                  </Box>

                  <Box sx={{ flex: 1, marginLeft: "20px", textAlign:"end" }}>
                    <Typography sx={{ py:1}}>
                    <span style={{ fontWeight: "bold" }}>Pays : </span>{acteur.nom_pays}
                    </Typography>
                  </Box>
                </Box>
                    
                  
                    
                
                    <Typography sx={{textAlign:"start", py:2}}>
                    <span style={{ fontWeight: "bold" }}>Biographie :</span> {acteur.biographie}
                    </Typography>
                    <ListFilmsActeurView></ListFilmsActeurView>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </Container>
  );
}