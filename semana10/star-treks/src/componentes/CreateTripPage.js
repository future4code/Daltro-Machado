import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { useProtectedPage } from "../hooks/useProtectedPage";
import Logo from './img/logo.svg';

const MotherDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  box-sizing: border-box;
  grid-template-rows: 20% 80%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 0px;
  border: none;
  overflow-x: hidden;
  color: white;
  background-color: #000000;
`
const Header = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-row: 1 / 2;
  box-sizing: border-box;
  padding-right: 40px;
  padding-bottom: 0px;
  border: none;
  color: #fdba12;
`
const LogoContainer = styled.div`
  display: flex;
  grid-column: 1 / 2;
  box-sizing: border-box;
  align-items: flex-end;
  margin: 5px;
  padding-left: 5px;
  padding-bottom: 0px;
  border: none;
`
const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  grid-column: 2 / 3;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  border: none;
  border-bottom: solid;
  border-color: #bf7e04;
`
const TextoMenu = styled.p`
  font-weight: bold;
  font-size: 18px;
  padding-left: 25px;
  cursor: pointer;
  margin: 10px 5px;
  color: darkgray;
    :hover {
    color: #fdba12;
  };
`
const BodyContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;
  margin: 0px;
  padding-top: 20px;
  border: none;
`
const FormLogin = styled.form`
  width: 40vw;
  height: 160vh;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  border: solid;
  border-radius: 5%;
  border-color: #fdba12;
  color: white;
  font-weight: 100;
`
const YellowButton = styled.button`
  width: 8vw;
  height: 6vh;
  margin: 5px;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  border-radius: 8%;
  color: black;
  background-color: #fdba12;
  :hover {
    background-color: #bf7e04;
  };
`
const Inputs = styled.input`
  width: 20vw;
  padding: 0px;
  margin: 30px 10px;
  border: none;
  border-bottom: solid;
  border-color: #22252a;
  background-color: black;
  color: white;
`

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};


const CreateTripPage = () => {
  const { form, onChange } = useForm({ name: "", planet: "", description: "", duration: "", date: "" });
  /* const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(""); */
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
    const data = (day + "-" + month + "-" + year)
    setToday(data)
  }


  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    //setDuration(Number(duration))
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: Number(form.duration)
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
/*         setName("");
        setPlanet("");
        setDate("");
        setDescription("");
        setDuration(""); */
      })
      .catch((err) => {
        console.log(err);
      });
  };


/*   const handleName = (e) => {
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
  }; */

  /* const criarViagem = () => {
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
  }; */
  



  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };


  const goBack = () => {
    history.goBack();
  };

  return (
    <MotherDiv>
      <Header>
        <LogoContainer>
          <img src={Logo}></img>
        </LogoContainer>
        <Menu>
        <TextoMenu onClick={goBack}>VOLTAR</TextoMenu>
        <TextoMenu onClick={logOut}>LOGOUT</TextoMenu>
        </Menu>
      </Header>
      <BodyContainer>
          <FormLogin onSubmit={onSubmitForm}>
          <Inputs name={"name"} value={form.name} pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{5,}"} onChange={handleInputChange} placeholder="Qual o nome desta viagem ?"></Inputs>
          <select name={"planet"} required value={form.planet} onChange={handleInputChange}>
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
          <Inputs
            name={"description"}
            value={form.description}
            pattern={"[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{30,}"}
            onChange={handleInputChange}
            placeholder="Faça uma breve descrição da viagem">
          </Inputs>
          <Inputs
            name={"duration"}
            value={form.duration}
            type={"number"}
            min="50"
            onChange={handleInputChange}
            placeholder="Duração em dias da viagem">
          </Inputs>
          <Inputs
            name={"date"}
            value={form.date}
            type={"date"}
            min={today}
            onChange={handleInputChange}>
          </Inputs>
          <YellowButton>Criar</YellowButton>
          </FormLogin>
      </BodyContainer>
    </MotherDiv>
  );
};

export default CreateTripPage;