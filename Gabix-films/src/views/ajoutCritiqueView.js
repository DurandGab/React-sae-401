import React from "react";
import AjoutCritiqueFilm from "../components/AjoutCritiqueFilm"
import { useParams } from "react-router-dom";

export default function AjoutCritiqueView(props) {
  const titre = props.ptitre
  return (
    <div>
      <AjoutCritiqueFilm ptitre={titre} ></AjoutCritiqueFilm>
    </div>
  );
}