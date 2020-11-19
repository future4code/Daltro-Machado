import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components';
import Button from '@material-ui/core/Button'

const MotherDiv = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  overflow-x: auto;
  color: white;
  background-color: black;
`

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

  const goToHomePage = () => {
    history.push("/");
  };

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <MotherDiv>
      <p>Pagina de Viagens</p>
      <Button variant={'contained'} color={'primary'} onClick={goToHomePage}>Home</Button>
      <Button variant={'contained'} color={'primary'} onClick={goToCreateTripPage}>Criar Viagem
      </Button>
      <Button variant={'contained'} color={'primary'} onClick={logOut}>Logout
      </Button>
      {trips.map((trip) => {
          return <ListTrips>
            <div>
              <h1>{trip.name}</h1>
              <h3>Data: {trip.date}</h3>
              <p>Descrição: {trip.description}</p>
              <Button variant={'contained'} color={'primary'} onClick = {() => goToTripDetailsPage(trip.id)}>Ver Detalhes</Button>
            </div>
          </ListTrips>       
          })}
    </MotherDiv>
  );
};

export default ListTripsPage;