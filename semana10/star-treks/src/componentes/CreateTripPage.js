import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { useProtectedPage } from "../hooks/useProtectedPage";
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

const CreateTripPage = () => {
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory();
  const [today, setToday] = useState("")
  useProtectedPage();
  
  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    let now = new Date
    const day = now.getDate() + 1
    const month = now.getMonth() + 1
    const year = now.getFullYear()
    const data = (year + "-" + month + "-" + day)
    setToday(data)
  }

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
    <MotherDiv>
      <p>Pagina de Criar Viagens</p>
      <Button variant={'contained'} color={'primary'} onClick={goBack}>Voltar
      </Button>
      <Button variant={'contained'} color={'primary'} onClick={logOut}>Logout
      </Button>
      <div>
      <input value={name} pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{5,}"} onChange={handleName} placeholder="Qual o nome desta viagem ?"></input>
      <select name={"planet"} required value={planet} onChange={handlePlanet}>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Marte">Marte</option>
            <option value="Júiter">Júiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
            <option value="Plutão">Plutão</option>
            <option value="Lua">Lua</option>
            <option value="Nibiru">Nibiru</option>
            <option value="Xandar">Xandar</option>
            <option value="Tatooine">Tatooine</option>
            <option value="Oa">Oa</option>
            <option value="Krypton">Krypton</option>
            <option value="Cybertron">Cybertron</option>
            <option value="Vulcano">Vulcano</option>
            <option value="Kronos">Kronos</option>
            <option value="Gallifrey">Gallifrey</option>
            <option value="Magrathea">Magrathea</option>
            <option value="Coruscant">Coruscant</option>
            <option value="Naboo">Naboo</option>
            <option value="Andoria">Andoria</option>
            <option value="Romulos">Romulos</option>
            <option value="Orion">Orion</option>
            <option value="Risa">Risa</option>
        </select>
      <input value={description} pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{30,}"} onChange={handleDescription} placeholder="Faça uma breve descrição da viagem"></input>
      <input value={duration} type={"number"} min="50" onChange={handleDuration} placeholder="Duração em dias da viagem"></input>
      <input value={date} type={"date"} min={today} onChange={handleDate}></input>
      <Button variant={'contained'} color={'primary'} onClick={criarViagem}>Criar
      </Button>
      </div>
    </MotherDiv>
  );
};

export default CreateTripPage;