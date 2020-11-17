import React from "react";
import { useHistory } from "react-router-dom";

const ListTripsPage = () => {
  const history = useHistory();

  const goToTripDetailsPage = () => {
    history.push("/trips/details");
  };

  const goToCreateTripPage = () => {
    history.push("/trips/create");
  };

  const logOut = () => {
    history.push("/");
  };

  return (
    <div>
      <p>Pagina de Viagens</p>
      <button onClick={goToCreateTripPage}>Criar Viagem
      </button>
      <button onClick={logOut}>Logout
      </button>
      <h1>Marte</h1>
      <h2>Ano Novo em Marte</h2>
      <p>5 dias</p>
      <button onClick={goToTripDetailsPage}>Ver Detalhes
      </button>
    </div>
  );
};

export default ListTripsPage;