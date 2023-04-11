import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
export default function FormText(props) {
  const [texte, setTexte] = useState("");
  const handlerChange = (event) => setTexte(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(texte);
    props.handler(texte);
    setTexte('');
  };
  return (
    
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Critère :
        <input type="text" value={texte} onChange={handlerChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
