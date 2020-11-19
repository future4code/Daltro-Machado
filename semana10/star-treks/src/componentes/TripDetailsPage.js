import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";

const TripDetailsPage = () => {
  const [trip, setTrip] = useState({});
  const [reload, setReload] = useState(false)
  const history = useHistory();
  const pathParams = useParams();
  const tripId = pathParams.id
  

  useProtectedPage();

  useEffect(() => {
    getTripDetail();
  }, [reload]);

  const getTripDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/daltro-dumont/trip/${tripId}`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const aproveCandidate = (candidateId) => {
    const body = {
      approve: true
    };
    
    axios
    .put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/daltro-dumont/trips/${tripId}/candidates/${candidateId}/decide`,body,
      {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
    )
      .then((res) => {
        alert("Candidato Aprovado!");
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const denyCandidate = (candidateId) => {
    const body = {
      approve: false
    };
    
    axios
    .put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/daltro-dumont/trips/${tripId}/candidates/${candidateId}/decide`,body,
      {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
    )
      .then((res) => {
        alert("Candidato Rejeitado!");
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logOut = () => {
    localStorage.removeItem("token");
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
      <h1>{trip.planet}</h1>
      <h2>{trip.name}</h2>
      <p>Data: {trip.date}</p>
      <p>Duração: {trip.durationInDays} dias</p>
      <p>Descrição: {trip.description}</p>
      <h2>Candidaturas</h2>
      {trip.candidates && trip.candidates.map(candidate=>{
          return <div>
            <h4>Nome: {candidate.name}, {candidate.age} anos</h4>
            <p>País de Origem: {candidate.country}</p>
            <p>Profissão: {candidate.profession}</p>
            <h5>Por que sou um bom candidato(a)?</h5>
            <p>{candidate.applicationText}</p>
            <button onClick = {() => aproveCandidate(candidate.id)}>Aprovar</button>
            <button onClick = {() => denyCandidate(candidate.id)}>Rejeitar</button>
            </div>  
        })}

    </div>
  );
};

export default TripDetailsPage;