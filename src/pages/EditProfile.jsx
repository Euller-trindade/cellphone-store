import React, { useState } from "react";
import { EditArea } from "../css/Style";
import { setItem, getItem } from "../services/LocalStorageFuncs";
import Header from "../components/Header";

const EditProfile = (props) => {
  const userEdit = getItem("usuario");

  const [nome, setNome] = useState(userEdit.nome || "");
  const [email, setEmail] = useState(userEdit.email || "");
  const [senha, setSenha] = useState(userEdit.senha || "");
  const [img, setImg] = useState(userEdit.img || "");

  const cond =
    nome.length > 3 &&
    email.includes("@") &&
    senha.length > 4 &&
    img.length > 4;
  const saveChange = () => {
    setItem("usuario", { nome, email, senha, img });
    const { history } = props;
    history.push("/profile");
  };
  return (
    <div>
      <Header/>
      <EditArea>
        <p>Nome:</p>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <p>Email:</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Senha:</p>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <p>Imagem URL:</p>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <button disabled={!cond} onClick={() => saveChange()}>
          Salvar
        </button>
      </EditArea>
    </div>
  );
};

export default EditProfile;
