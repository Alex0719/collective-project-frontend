import React from 'react';
import styled from 'styled-components';
import Image from "../../images/logos/unauthorized.jpg" 
export default class UnauthorizedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Container>
          <p>Upsss, nu ai drepturi sa accesezi aceasta pagina</p>
          <UnauthorizedImage src={Image} alt="not authorized" />
        </Container>
    );
  }
}

export const UnauthorizedImage = styled.img`
    width:30%;
    padding-right:5%;
    margin-left:8%
`;
export const Container = styled.div`
   margin-left:35%;
   margin-top:5%
`;
