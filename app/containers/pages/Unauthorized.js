import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import lock from "../../images/lock.png";
import {AERO_BLUE, JAPANESE_INDIGO} from 'constants/colors';
import Button from 'components/elements/Button';
import { push } from 'react-router-redux';

export class UnauthorizedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Container>
          <UnauthorizedImage src={lock} alt="not authorized" />
          <TextWrapper>
            Whoops! <br/>
            Acest URL este valid, dar nu aveți autorizație pentru a vedea acest conținut. <br/>
          </TextWrapper>
          <ButtonWrapper>
            <Button text='Inapoi la site' onClick={() => this.props.redirect('/')} />
          </ButtonWrapper>
        </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  redirect: () => dispatch(push('/')),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export const UnauthorizedImage = styled.img`
    width:412px;
    height: 412px;
    padding-right:5%;
    margin-left:8%;
`;

export const ButtonWrapper = styled.div`
  margin-top: 22.7%;
`;

export const TextWrapper = styled.div`
  padding-top: 10%;
`;
export const Container = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 30px;
  background-image: linear-gradient(120deg,${AERO_BLUE} 0%, ${JAPANESE_INDIGO} 100%);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 88%;
  display: flex;
  width: 90%;
  height: 100%;
  text-align: center;
  margin: 10% 5% 5% 5%;
`;

export default compose(
  withConnect,
)(UnauthorizedComponent);
