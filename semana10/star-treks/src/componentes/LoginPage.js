import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  const goToListTripsPage = () => {
    history.push("/trips/list");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <p>Pagina de Login</p>
      <input placeholder="Email"></input>
      <input placeholder="Senha"></input>
      <button onClick={goToListTripsPage}>Fazer Login
      </button>
      <button onClick={goBack}>Voltar
      </button>
    </div>
  );
};

export default LoginPage;