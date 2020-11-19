import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";

const CreateTripPage = () => {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory();
  useProtectedPage();
  
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePlanet = (e) => {
    setPlanet(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const criarViagem = () => {
    setDuration(Number(duration))
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: duration
    };
    
    axios
    .post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/daltro-dumont/trips", body,
      {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
    )
      .then((res) => {
        alert("Viagem cadastrada com sucesso!");
        setName("");
        setPlanet("");
        setDate("");
        setDescription("");
        setDuration("");
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
      <p>Pagina de Criar Viagens</p>
      <button onClick={goBack}>Voltar
      </button>
      <button onClick={logOut}>Logout
      </button>
      <div>
      <input value={name} onChange={handleName} placeholder="Qual o nome desta viagem ?"></input>
      <input value={planet} onChange={handlePlanet} placeholder="Qual o planeta ?"></input>
      <input value={description} onChange={handleDescription} placeholder="Faça uma breve descrição da viagem"></input>
      <input value={duration} onChange={handleDuration} placeholder="Qual a duração em dias dessa viagem"></input>
      <input value={date} onChange={handleDate} placeholder="Diite a data no formato 99/99/9999"></input>
      <button onClick={criarViagem}>Criar
      </button>
      </div>
    </div>
  );
};

export default CreateTripPage;