import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';

const ListTrips = styled.div`
    display: flex;
`;

const ListTripsPage = () => {
  const [trips, setTrips] = useState([]);
  const history = useHistory();
  const pathParams = useParams();
  
  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/daltro-dumont/trips",
      )
      .then((res) => {
        setTrips(res.data.trips);
  
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goToTripDetailsPage = (id) => {
    console.log(id);
    history.push(`/trips/${id}`);
  };

  const goToCreateTripPage = () => {
    history.push("/createtrip");
  };

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div>
      <p>Pagina de Viagens</p>
      <button onClick={goToCreateTripPage}>Criar Viagem
      </button>
      <button onClick={logOut}>Logout
      </button>
      {trips.map((trip) => {
          return <ListTrips>
            <div>
              <h1>{trip.name}</h1>
              <h3>Data: {trip.date}</h3>
              <p>Descrição: {trip.description}</p>
              <button onClick = {() => goToTripDetailsPage(trip.id)}>Ver Detalhes</button>
            </div>
          </ListTrips>       
          })}
    </div>
  );
};

export default ListTripsPage;