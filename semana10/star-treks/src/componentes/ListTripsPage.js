import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';
import CardTrip from './CardTrip'

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
        console.log(res.data.trips)
        console.log(trips)  
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
    history.push("/trips/create");
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
            <CardTrip details={goToTripDetailsPage} trip={trip}>
            </CardTrip>
          </ListTrips>       
          })}
    </div>
  );
};

export default ListTripsPage;