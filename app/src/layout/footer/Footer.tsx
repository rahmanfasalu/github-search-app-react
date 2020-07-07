import React from "react";
import styled from "styled-components";
import Theme from "../../theme/theme";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${Theme.colors.secondary};
`;

const P = styled.p`
  font-family: ${Theme.font.paragraph};
`;

const Footer = (): JSX.Element => (
  <FooterContainer>
    <P>Copyright &copy; </P>
  </FooterContainer>
);

export default Footer;
