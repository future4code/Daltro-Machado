import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";

const CreateTripPage = () => {
  const history = useHistory();
  useProtectedPage();

  const criarViagem = () => {
    alert("Viagem Criada!");
  };

  const logOut = () => {
    history.push("/");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <p>Pagina de Criar Viagens</p>
      <button onClick={goBack}>Voltar
      </button>
      <button onClick={logOut}>Logout
      </button>
      <h1>Marte</h1>
      <h2>Ano Novo em Marte</h2>
      <p>5 dias</p>
      <button onClick={criarViagem}>Criar
      </button>
    </div>
  );
};

export default CreateTripPage;