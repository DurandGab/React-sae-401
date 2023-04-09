import React from "react";
import ActeursFilm from "../components/ActeursFilm";
import { useParams } from "react-router-dom";

export default function DetailView(props) {
  const { titre } = useParams();
  return (
    <div>
      <ActeursFilm ptitre={titre}></ActeursFilm>
    </div>
  );
}