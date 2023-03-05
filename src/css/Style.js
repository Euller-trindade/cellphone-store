import styled from "styled-components";

const ProductsArea = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 90px;

  div {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 320px;
    width: 230px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
    background-color: white;

    button {
      background: #005f4b;
      width: 100%;
      border: 0;
      border-radius: 5px;
      padding: 10px;
      color: #ffffff;
      font-size: 20px;
      cursor: pointer;
    }
    h4 {
      color: #005f4b;
    }
  }
`;
export const EditArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 360px;
  margin: 0 auto;
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
    margin-bottom: 10px;
  }
`;
export const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  max-width: 360px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color: azure;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);

  button {
    width: 100%;
    border: 0;
    margin-top: 20px;
    border-radius: 5px;
    padding: 15px;
    font-size: 14px;
    background: #005f4b;
    color: #ffffff;
    cursor: pointer;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  h2 {
    border-bottom: 2px solid black;
    margin-bottom: 1rem;
  }
  p {
    font-weight: bold;
  }
`;

export default ProductsArea;
