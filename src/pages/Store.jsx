import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { setItem, getItem } from "../services/LocalStorageFuncs";
import Header from "../components/Header";

import ProductsArea from "../css/Style";

import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Store = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(getItem("carrinhoAdd") || []);
  useEffect(() => {
    axios
      .get("https://api.mercadolibre.com/sites/MLB/search?q=celular")
      .then((response) => setData(response.data.results));
  }, []);

  const handleClick = (obj) => {
    const element = cart.find((e) => e.id === obj.id);
    if (element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id);
      setCart(arrFilter);
      setItem("carrinhoAdd", arrFilter);
    } else {
      setCart([...cart, obj]);
      setItem("carrinhoAdd", [...cart, obj]);
    }
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
      <ProductsArea>
        {data.map((e) => (
          <div>
            <h5>{e.title}</h5>
            <img src={e.thumbnail} alt="" />
            <h4>R$ {e.price}</h4>
            <button onClick={() => handleClick(e)}>
              {cart.some((itemCart) => itemCart.id === e.id) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
          </div>
        ))}
      </ProductsArea>
      )}
      <Footer />
    </div>
  );
};

export default Store;
