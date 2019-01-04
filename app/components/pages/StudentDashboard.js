import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import Collapsible from 'react-collapsible';
import { QUEEN_BLUE, AERO_BLUE } from "../../constants/colors";
import styles from "styled-components";

const Container = styles.div`
  padding: 26px;
`;

const CompanyTitle = styles.div`
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

const InternshipsContainer = styles.div`
  
`;

const Internship = styles.div`
  padding: 10px;
  color: #666;
  border-bottom: 1px solid ${AERO_BLUE}
`;

const InternshipTitle = styles.div`
  font-size: 22px;
  color: black;
`;

const SubscribeButton = styles.button`
  background-color: #882010;
  padding: 10px;
  font-size: 15px;
  color: white;
  border-radius: 10px;
  cursor:pointer;
  &:focus {
    outline: none;
  }
  position: relative;
  z-index: 10;
  
`;

const Link = styles.a`
  text-decoration: none;
  color: ${QUEEN_BLUE};
  &:hover {
    ${QUEEN_BLUE};
    text-decoration: underline;
  }
`;

const SubscribeContainer = styles.div`
  background-color: ${AERO_BLUE};
  margin: 0;
  padding: 5px;
  height: 50px;
`;

const CollapsibleContainer = styles.div`
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
    console.log("subscribe", company.id, this.props);
  }

  render() {
    const { companies } = this.props;

    return (
      <Container>
        {companies.map(company => {
          return (
            <CollapsibleContainer key={companies.indexOf(company)}>
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
                        <InternshipTitle>{internship.description}</InternshipTitle>
                        <div>Tematica: {internship.topics}</div>
                        <div>Incepe la: {new Date(internship.start + "Z").toLocaleDateString()}</div>
                        <div>Se termina la: {new Date(internship.end + "Z").toLocaleDateString()}</div>
                        <Link href={"/internship/" + internship.id} >Vezi mai mult</Link>
                      </Internship>
                    );
                  }) : <Internship>Nu exista internshipuri</Internship>}
                </InternshipsContainer>
              </Collapsible>

              <SubscribeContainer>
                <SubscribeButton onClick={() => this.subscribe(company)}>Subscribe</SubscribeButton>

              </SubscribeContainer>
            </CollapsibleContainer>
          )
        })}
      </Container>
    );
  }
}

export default StudentDashboardList;