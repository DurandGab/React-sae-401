import React from "react";
import DetailActeur from "../components/DetailActeur";
import { useParams } from "react-router-dom";

export default function DetailView(props) {
  const { id_acteur } = useParams();
  return (
    <div>
      <DetailActeur pid={id_acteur} ></DetailActeur>
    </div>
  );
}