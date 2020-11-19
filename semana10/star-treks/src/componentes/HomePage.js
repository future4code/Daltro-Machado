import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from "react-router-dom";
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
const ShowTrips = styled.div`
  display: flex;
`
const ListTrips = styled.div`
    display: flex;
`

const HomePage = () => {
  const [trips, setTrips] = useState([]);
  const history = useHistory();
  
  const goToLoginPage = () => {
    history.push("/login");
  };

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

  const goToCandidateFormPage = (id) => {
    history.push(`/candidate/${id}`);
  };


  return (
    <MotherDiv>
      <p>Home</p>
      <Button variant={'contained'} color={'primary'} onClick={goToLoginPage}>
        Fazer Login
      </Button>
      <ShowTrips>
        {trips.map((trip) => {
            return <ListTrips>
                    <h1>{trip.name}</h1>
                    <h3>Data: {trip.date}</h3>
                    <p>Descrição: {trip.description}</p>
                    <Button variant={'contained'} color={'primary'} onClick = {() => goToCandidateFormPage(trip.id)}>Quero ir!!</Button>
                   </ListTrips>       
        })}
       </ShowTrips>
    </MotherDiv>
  );
};

export default HomePage;
