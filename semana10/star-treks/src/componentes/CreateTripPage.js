import React from "react";
import { useHistory } from "react-router-dom";

const CreateTripPage = () => {
  const history = useHistory();

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