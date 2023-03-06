import React, { useState } from "react";
import { BsFillCartDashFill } from "react-icons/bs";
import { getItem, setItem } from "../services/LocalStorageFuncs";
import ProductsArea from "../css/Style";
import Header from "../components/Header";
import styled from "styled-components";

const Btncart = styled.div`
  button {

    background: #005f4b;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    width: 210px;
    margin-bottom: 40px;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
  }
`;

const Cart = (props) => {
  const [data, setData] = useState(getItem("carrinhoAdd") || []);

  const removeItem = (obj) => {
    const arrFilter = data.filter((item) => item.id !== obj.id);
    setData(arrFilter);
    setItem("carrinhoAdd", arrFilter);
  };
  const subTotal = data.reduce((acc, cur) => acc + cur.price, 0);

  const handleClick = () => {
    const { history } = props;
    history.push(`/payment/${subTotal}`);
    setItem("carrinhoAdd", []);
  };

  return (
    <div>
      <Header />
      <h4>{`SubTotal: R$ ${subTotal}`}</h4>
      <ProductsArea>
        {data.map((e) => (
          <div key={e.id}>
            <h5>{e.title}</h5>
            <img src={e.thumbnail} alt="" />
            <h4>R$ {e.price}</h4>
            <button onClick={() => removeItem(e)}>
              <BsFillCartDashFill />
            </button>
          </div>
        ))}
      </ProductsArea>
      <Btncart>
        <button disabled={!subTotal > 0} onClick={handleClick}>
          Comprar
        </button>
      </Btncart>
    </div>
  );
};

export default Cart;
