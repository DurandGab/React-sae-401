import React from "react";
import CritiqueFilm from "../components/CritiqueFilm";
import { useParams } from "react-router-dom";

export default function DetailView(props) {
  const { titre } = useParams();
  return (
    <div>
      <CritiqueFilm ptitre={titre}></CritiqueFilm>
    </div>
  );
}