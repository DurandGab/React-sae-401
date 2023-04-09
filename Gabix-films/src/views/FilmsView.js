import Films from "../components/Films";
import React from "react";
import FormText from "../components/FormText"
import { useState } from "react";
export default function FilmsView() {
  const [critere, setCritere] = useState("");
  let handlerCritere = (v) => setCritere(v);
  return (
    <div>
      <FormText handler={handlerCritere}></FormText>
      <Films pcritere={critere}></Films>
    </div>
  );
}
