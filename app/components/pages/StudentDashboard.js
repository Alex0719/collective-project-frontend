import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import Collapsible from 'react-collapsible';
import { QUEEN_BLUE, AERO_BLUE, DARK_RED, BLUE_GRAY } from "../../constants/colors";
import styled from "styled-components";
import moment from "moment";
import Button from 'components/elements/Button';

const Container = styled.div`
  padding: 26px;
`;

const CompanyTitle = styled.div`
  padding: 15px;
  font-size: 20px;
  background: ${AERO_BLUE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  height: 50px;
  &:focus {
    outline: none;
    color: white;
    background: ${QUEEN_BLUE};
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
  margin: 0;
  padding: 5px;
  height: 50px;
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

    const subscribeButton = (company) => (
      <SubscribeButton onClick={() => this.subscribe(company)}>
        Subscribe
      </SubscribeButton>
    );

    const unsubscribeButton = (company) => (
      <UnsubscribeButton onClick={() => this.unsubscribe(company)}>
        Unsubscribe
      </UnsubscribeButton>
    );

    return (
      <Container>
        {companies.map(comp => {
          const company = comp.comp;
          return (
            <CollapsibleContainer key={companies.indexOf(comp)}>
              <Collapsible
                easing="ease-in"
                trigger={(
                  <CompanyTitle>
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
                  }) : <Internship>Nu exista internshipuri</Internship>}
                </InternshipsContainer>
              </Collapsible>

              <SubscribeContainer>
                {
                  comp.subscribed ? unsubscribeButton(company) : subscribeButton(company)
                }
              </SubscribeContainer>
            </CollapsibleContainer>
          )
        })}
      </Container>
    );
  }
}

export default StudentDashboardList;
