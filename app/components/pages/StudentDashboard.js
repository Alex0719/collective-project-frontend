import React from "react";
import Collapsible from 'react-collapsible';
import { QUEEN_BLUE, AERO_BLUE, DARK_RED, BLUE_GRAY, DARKER_RED } from "../../constants/colors";
import styled from "styled-components";
import moment from "moment";
import Button from 'components/elements/Button';

import {
  CompanyLogo,
  AccesaLogo,
  AlgotechLogo,
  ArobsLogo,
  BoschLogo,
  FortechLogo,
  SiemensLogo,
  ToraLogo,
  YardiLogo,
  YonderLogo
} from '../../images/companies';
const Container = styled.div`
  padding: 26px;
`;

const CompanyTitle = styled.div`
  padding: 15px;
  font-size: 24px;
  background: ${AERO_BLUE};
  display: flex;
  align-items: center;
  cursor: default;
  height: 150px;
  &:focus {
    outline: none;
    color: white;
    background: ${QUEEN_BLUE};
  }
  div {
    margin-right: 10%;
  }
`;

const CompanyLogoTitle = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: auto;
  }
`;

const InternshipsContainer = styled.div``;

const Internship = styled.div`
  padding: 10px;
  color: #666;
  border-bottom: 1px solid ${AERO_BLUE};
  display: flex;
`;

const InternshipTitle = styled.div`
  font-size: 22px;
  color: black;
`;

const SubscribeButton = styled.button`
  background-color: ${DARK_RED};
  padding: 10px;
  font-size: 15px;
  color: white;
  border-radius: 10px;
  cursor:pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${DARKER_RED}
  }
  position: relative;
`;

const UnsubscribeButton = styled.button`
  background-color: ${BLUE_GRAY};
  padding: 10px;
  font-size: 15px;
  color: white;
  border-radius: 10px;
  cursor:pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: grey;
  }
  position: relative;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${QUEEN_BLUE};
  &:hover {
    ${QUEEN_BLUE};
    text-decoration: underline;
  }
`;

const SubscribeContainer = styled.div`
  background-color: ${AERO_BLUE};
  display: flex;
  align-items: center;
  margin: 0;
  padding: 5px;
  height: 150px;
`;

const ButtonWrapper = styled.div`
  margin-top: 5.5%;
  margin-left: 60%;
`;

const Content = styled.div`
  white-space: nowrap;
  width: 200px;
`;

const CollapsibleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > div:first-child {
    flex: 1;
  }

`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

class StudentDashboardList extends React.Component {
  constructor(props) {
    super(props);
  }

  subscribe = (company) => {
    // console.log("subscribe", company.id);
    this.props.subscribeHandler(company.id);
  }

  unsubscribe = (company) => {
    // console.log("unsubscribe", company.id);
    this.props.unsubscribeHandler(company.id);
  }

  render() {
    const { companies } = this.props;
    console.table(companies);
    const subscribeButton = (company) => (
      <SubscribeButton onClick={() => this.subscribe(company)}>
        Abonează-te
      </SubscribeButton>
    );

    const unsubscribeButton = (company) => (
      <UnsubscribeButton onClick={() => this.unsubscribe(company)}>
        Abonat
      </UnsubscribeButton>
    );

    const companyLogo = (companyName) => this.getCompanyLogo(companyName);

    return (
      <Container>
        {companies.map(company => {
          return (
            <CollapsibleContainer key={companies.indexOf(company)}>
              <Collapsible
                easing="ease-in"
                trigger={(
                  <CompanyTitle>
                    <CompanyLogoTitle>
                      <Img  src={companyLogo(company.name)} />
                    </CompanyLogoTitle>
                    {company.name}
                  </CompanyTitle>)} >
                <InternshipsContainer>
                  {company.internships.length ? company.internships.map(internship => {
                    return (
                      <Internship key={company.internships.indexOf(internship)}>
                        <Content>
                          <InternshipTitle>{internship.description}</InternshipTitle>
                          <div>Tematica: {internship.topics}</div>
                          <div>Incepe la: {moment(new Date(internship.start + "Z")).format("DD MMM YYYY")}</div>
                          <div>Se termina la: {moment(new Date(internship.end + "Z")).format("DD MMM YYYY")}</div>
                        </Content>
                        <ButtonWrapper>
                          <Button text={'Vezi mai mult'} onClick={() => this.props.redirect(internship.id)}/>
                        </ButtonWrapper>
                      </Internship>
                    );
                  }) : <Internship>Nu există internshipuri</Internship>}
                </InternshipsContainer>
              </Collapsible>

              <SubscribeContainer>
                {
                  company.subscribed ? unsubscribeButton(company) : subscribeButton(company)
                }
              </SubscribeContainer>
            </CollapsibleContainer>
          )
        })}
      </Container>
    );
  }

  getCompanyLogo = (name) => {
    switch (name) {
      case "Accesa":
        return AccesaLogo;
      case "Algotech":
        return AlgotechLogo;
      case "Arobs":
        return ArobsLogo;
      case "Bosch":
        return BoschLogo;
      case "Fortech":
        return FortechLogo;
      case "Siemens":
        return SiemensLogo;
      case "Tora":
        return ToraLogo;
      case "Yardi":
        return YardiLogo;
      case "Yonder":
        return YonderLogo
      default:
        return CompanyLogo;
    }
  }

}

export default StudentDashboardList;
