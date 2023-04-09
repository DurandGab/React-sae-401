import React from "react";
import ListFilmsActeur from "../components/ListFilmsActeur";
import { useParams } from "react-router-dom";

export default function DetailView(props) {
  const { id_acteur } = useParams();
  return (
    <div>
      <ListFilmsActeur pid={id_acteur}></ListFilmsActeur>
    </div>
  );
}