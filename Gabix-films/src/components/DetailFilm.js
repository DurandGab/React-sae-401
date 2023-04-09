import React from "react";
import { useState, useEffect } from "react";
export default function DetailFilm(props) {

  
  const url ="http://gabixfilms.mmicastres.fr/public/api/films/" + props.ptitre;
    console.log(url)
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
    <div>
      <h2>{film.titre}</h2>
      <img
        width="100"
        alt={"Affiche du film :" + film.titre}
        src={film.logo}
      />
      <p>{film.overview}</p>
    </div>
  );
}