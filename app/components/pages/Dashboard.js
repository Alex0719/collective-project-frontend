import React from 'react';
import styled from 'styled-components';
import {
  AERO_BLUE,
  JAPANESE_INDIGO,
  SMOKY_BLACK,
  QUEEN_BLUE,
  PEWTER_BLUE,
} from 'constants/colors';
import ChartWithText from '../elements/ChartWithText/ChartWithText';

import { CompanyLogo, AccesaLogo, AlgotechLogo, ArobsLogo, BoschLogo, FortechLogo, SiemensLogo, ToraLogo, 
  YardiLogo, YonderLogo } from '../../images/companies';

const CirclesContainer = styled.div`
  padding: 40px 0;
  background: ${AERO_BLUE};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid ${AERO_BLUE};
  @media (max-width: 840px) {
    border-bottom: none;
  }
`;

const QuestionContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Question = styled.div`
  width: 33%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: ${QUEEN_BLUE};
  }
  div {
    color: ${PEWTER_BLUE};
  }
  a {
    text-align: center;
  }

  div,
  h2 {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  min-width: 260px;
  @media (max-width: 840px) {
    width: 100%;
  }
`;

const Partners = styled.div`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Partner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: auto;
  height: auto;
`;

const PartnersH1 = styled.h1`
  text-align: center;
`;

const Count = styled.div`
  font-size: 3em;
`;

export default class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CirclesContainer>
          <ChartWithText>
            <Count>{this.props.counts.companyCount}</Count>
            <div>Companii</div>
          </ChartWithText>
          <ChartWithText>
            <Count>{this.props.counts.studentCount}</Count>
            <div>Studenti</div>
          </ChartWithText>
          <ChartWithText>
            <Count>{this.props.counts.internshipCount}</Count>
            <div>Internshipuri</div>
          </ChartWithText>
        </CirclesContainer>
        <QuestionContainer>
          <Row>
            <Question>
              <h2>Cui se adresează?</h2>
              <div> 
                Această platformă se adresează companiilor și studenților, indiferent de specializare, din toată țara.
              </div>
            </Question>

            <Question>
              <h2>Ce este Internlink?</h2>
              <div>Internlink este o platformă online pentru gestionarea și promovarea internship-urilor,
                creată pentru a facilita accesul la informații pentru studenții dornici de a găsi un internship și 
                pentru companiile care doresc să publice mai ușor detalii despre posturile de internship disponibile.
              </div>
            </Question>

            <Question>
              <h2>Costă să particip?</h2>
              <div>
                Această platformă este gratuită și așa va rămâne de acum încolo.
              </div>
            </Question>
          </Row>

          <Row>
            <Question>
              <h2>Cum mă pot înregistra?</h2>
              <div>Dacă ești student, accesând secțiunea de înregistrare cont.
              Conturile implicite create la înregistarea pe site sunt conturi destinate studenților.
              Dacă ești companie, contactând administratorul de sistem al site-ului sau trimițând un mail la:
              </div>
              <a href="mailto:interlink.application@gmail.com?subject=Cont nou companie">interlink.application@gmail.com</a>
            </Question>

            <Question>
              <h2>Ce este un internship?</h2>
              <div>Internship-ul este un program pe o durată predefinită, de obicei mai lungă (de la câteva săptămâni până
                la câteva luni), prin care firmele își recrutează viitori angajați. Pentru studenți reprezintă o 
                oportunitate de învățare și o modalitate prin care poți obține experiență practică în domeniul de interes.
              </div>
            </Question>

            <Question>
              <h2>Cum mă pot înscrie la un internship?</h2>
              <div>Pentru a putea aplica la un internship este nevoie de crearea unui cont, după care se poate
                vizualiza o pagină cu anunțuri de internship-uri din partea firmelor și numărul locurilor disponibile,
                pagină din care se va putea aplica direct pentru internship-ul dorit.
              </div>
            </Question>
          </Row>
        </QuestionContainer>
        <PartnersH1>Firme partenere</PartnersH1>
        <Partners>
          <Partner>
            <Img src={AccesaLogo} />
          </Partner>

          <Partner>
            <Img src={AlgotechLogo} />
          </Partner>

          <Partner>
            <Img src={ArobsLogo} />
          </Partner>

          <Partner>
            <Img src={BoschLogo} />
          </Partner>

          <Partner>
            <Img src={FortechLogo} />
          </Partner>

          <Partner>
            <Img src={SiemensLogo} />
          </Partner>

          <Partner>
            <Img src={ToraLogo} />
          </Partner>

          <Partner>
            <Img src={YardiLogo} />
          </Partner>

          <Partner>
            <Img src={YonderLogo} />
          </Partner>

        </Partners>
      </div>
    );
  }
}
