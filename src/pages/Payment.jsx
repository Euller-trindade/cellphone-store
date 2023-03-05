import React, { useState } from "react";
import { getItem } from "../services/LocalStorageFuncs";
import verificado from "../img/Verificado.png";
import styled from "styled-components";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PaymentArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    color: #005f4b;
    margin-bottom: 1rem;
  }
  img {
    width: 100px;
    margin-bottom: 3rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
    background-color: #fff;
    max-width: 360px;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
    p {
      margin-bottom: 1rem;
    }
  }
`;

const Payment = (props) => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2500);

  const {
    params: { price },
  } = props.match;

  const user = getItem("usuario");
  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <PaymentArea>
          <h3>Sua compra foi aprovada com sucesso!!</h3>
          <img src={verificado} alt="" />
          <div>
            <p>Valor da compra: R$ {price}</p>
            <p>Comprador: {user.nome}</p>
            <p>Prazo: {Math.ceil(Math.random() * 20) + 1} dias</p>
          </div>
        </PaymentArea>
      )}

      <Footer />
    </>
  );
};

export default Payment;
