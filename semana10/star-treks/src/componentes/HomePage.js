import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const goToLoginPage = () => {
    console.log("Oi")
    history.push("/login");
  };

  const enviarCandidatura = () => {
    alert("Candidatura enviada!")
  };


  return (
    <div>
      <p>Home</p>
      <button onClick={goToLoginPage}>
        Fazer Login
      </button>
      <br></br>
      <input placeholder="Escreva seu nome"></input>
      <button onClick={() => enviarCandidatura()}>Enviar Candidatura</button>
    </div>
  );
};

export default HomePage;
