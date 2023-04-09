import React, { useState } from "react";

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
