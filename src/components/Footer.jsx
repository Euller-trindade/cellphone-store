import React from "react";
import styled from "styled-components";

const FooterArea = styled.div`
  background-color: #005f4b;
  padding: 20px;
  color: white;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterArea>
      <footer>
        <p>&copy; Criado e desenvolvido por Euller Trindade</p>
      </footer>
    </FooterArea>
  );
};

export default Footer;
