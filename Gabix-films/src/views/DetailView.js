import React from "react";
import DetailFilm from "../components/DetailFilm";
import { useParams } from "react-router-dom";

export default function DetailView(props) {
  const { titre } = useParams();
  return (
    <div>
      <DetailFilm ptitre={titre} ></DetailFilm>
    </div>
  );
}