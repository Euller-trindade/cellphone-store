import React from "react";
import { ProfileArea } from "../css/Style";
import { getItem } from "../services/LocalStorageFuncs";
import Header from "../components/Header";

const Profile = (props) => {
  const user = getItem("usuario");

  const editProfile = () => {
    const { history } = props;
    history.push("./profile/edit");
  };

  return (
    <div>
      <Header />
      <ProfileArea>
        <img src={user.img} alt="" />
        <h2>{user.nome}</h2>
        <p>Email: {user.email}</p>
        <button onClick={() => editProfile()}>Editar Perfil</button>
      </ProfileArea>
    </div>
  );
};

export default Profile;
