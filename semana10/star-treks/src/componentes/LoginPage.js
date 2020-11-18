import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/trips/list");
    }
    
  }, [history]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
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
  };


  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <p>Pagina de Login</p>
      <input value={email} onChange={handleEmail} placeholder="Email"></input>
      <input value={password} type="password" onChange={handlePassword} placeholder="Senha"></input>
      <button onClick={login}>Fazer Login
      </button>
      <button onClick={goBack}>Voltar
      </button>
    </div>
  );
};

export default LoginPage;