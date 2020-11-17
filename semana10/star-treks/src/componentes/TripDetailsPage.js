import React from "react";
import { useHistory } from "react-router-dom";

const TripDetailsPage = () => {
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
      <p>Pagina de Detalhes da Viagem</p>
      <button onClick={goBack}>Voltar
      </button>
      <button onClick={logOut}>Logout
      </button>
      <h1>Marte</h1>
      <h2>Ano Novo em Marte</h2>
      <p>5 dias</p>
      <p>Duração: 7 dias</p>
      <p>Candidaturas</p>
      <p>João Paulo</p>
      <p>Porque eu quero ir!</p>
      <button onClick={criarViagem}>Criar
      </button>
    </div>
  );
};

export default TripDetailsPage;