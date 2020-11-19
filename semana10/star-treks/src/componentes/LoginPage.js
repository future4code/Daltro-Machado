import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
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

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  return { form, onChange };
};

const LoginPage = () => {
  const { form, onChange } = useForm({ email: "", password: "" });
  /* const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); */
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/trips/list");
    }
    
  }, [history]);

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    onChange(value, name);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/daltro-dumont/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/trips/list");
      })
      .catch((err) => {
        alert("Dados incorretos! Tente novamente")
        console.log(err);
      });
  }; 


 /*  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }; */

  /* const login = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/daltro-dumont/login",
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/trips/list");
      })
      .catch((err) => {
        console.log(err);
      });
  }; */


  const goBack = () => {
    history.goBack();
  };

  return (
    <MotherDiv>
      <p>Pagina de Login</p>
      <form onSubmit={onSubmitForm}>
      <input name={"email"} required value={form.email} type={"email"} onChange={handleInputChange} placeholder="Email"></input>
      <input name={"password"} required value={form.password} type="password" onChange={handleInputChange} placeholder="Senha"></input>
      <button>Fazer Login</button>
      </form>
      <Button variant={'contained'} color={'primary'} onClick={goBack}>Voltar
      </Button>
    </MotherDiv>
  );
};

export default LoginPage;