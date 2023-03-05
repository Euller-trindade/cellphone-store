import React from "react";
import styled, { keyframes } from "styled-components";

const frame = keyframes`
 to{
  transform: rotate(1turn);
 }

`;

const LoadingArea = styled.div`
  display: flex;
  height: 80vh;
  margin-top: -70px;
  align-items: center;
  justify-content: center;
  div {
    animation: ${frame} 1s infinite;
    border: 6px solid white;
    border-top-color: #005f4b;
    border-radius: 50%;
    height: 50px;
    width: 50px;
  }
`;

const Loading = () => {
  return (
    <LoadingArea>
      <div></div>
    </LoadingArea>
  );
};

export default Loading;
