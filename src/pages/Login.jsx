import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { setItem, getItem } from "../services/LocalStorageFuncs";

const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 360px;
  margin: 0 auto;
  margin-top: 90px;
  padding: 20px;
  border-radius: 5px;
  background-color: azure;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);

  input {
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    background-color: #d3d3d3;
  }
  button {
    background: #005f4b;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
  }
  button:disabled {
    background-color: #e2e2e2;
    cursor: not-allowed;
  }
  p {
    color: red;
  }
`;

const Login = (props) => {
  const user = getItem("usuario");

  const [nome, setNome] = useState(user.nome || "");
  const [senha, setSenha] = useState(user.senha || "");
  const [passIncorrect, setPassIncorrect] = useState(false);

  const cond = nome.length > 3 && senha.length > 4;

  const saveUser = (nome, senha) => {
    const { history } = props;
    if (nome === user.nome && senha === user.senha) {
      history.push("/store");
      return;
    } else if (nome === user.nome && senha !== user.senha) {
      setPassIncorrect(true);
      return;
    }
    setItem("usuario", { nome, senha });
    history.push("/store");
  };
  return (
    <>
      <LoginArea>
        <input
          type="text"
          placeholder="Nome"
          onChange={({ target: { value } }) => setNome(value)}
          value={nome}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={({ target: { value } }) => setSenha(value)}
          value={senha}
        />
        {passIncorrect === true && <p>senha incorreta!</p>}
        <button
          type="button"
          disabled={!cond}
          onClick={() => saveUser(nome, senha)}
        >
          Entrar
        </button>
      </LoginArea>
      <Footer />
    </>
  );
};

export default Login;
