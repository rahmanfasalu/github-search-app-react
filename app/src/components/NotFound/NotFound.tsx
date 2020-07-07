import React from "react";
import styled from "styled-components";
import Theme from "../../theme/theme";

const NotFoundText = styled.div`
  text-align: center;
`;

const Sub = styled.div`
  font-size: ${Theme.fontSize.paragraph};
`;

const Title = styled.h3`
  margin: 25px 0 0 0;
  font-size: ${Theme.fontSize.semiHeading};
`;
function NotFound(): JSX.Element {
  return (
    <NotFoundText>
      <Title> NotFound</Title>
      <Sub>Please try again</Sub>
    </NotFoundText>
  );
}

export default NotFound;
