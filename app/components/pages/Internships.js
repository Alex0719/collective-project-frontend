import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import Title from 'components/elements/Title';
import styled from 'styled-components';
import styles from './Internships.css';

import { QUEEN_BLUE, AERO_BLUE, JAPANESE_INDIGO } from 'constants/colors';


const InternshipsComponent = props => {

  const Trigger = {
    display: 'block',
    fontWeight: 600,
    textDecoration: 'none',
    color: '#333333',
    position: 'relative',
    border: '1px solid white',
    padding: '10px',
    background: QUEEN_BLUE,
    color: AERO_BLUE,
    cursor: 'pointer',
  };



  const renderInternships = () => {
    console.log('din props', props.internships);
    const { internships } = props;
    return internships.map(internship => (
      <Collapsible trigger={`${internship.description} | ${internship.start} --- ${internship.end}`} triggerStyle={Trigger} >
        <InternshipContent>
          <p><strong>Topic-uri: </strong>{internship.topics}</p>
          <p><strong>Locuri disponibile: </strong>{internship.places}</p>
          <p><strong>Durata: </strong>{internship.weeks} saptamani</p>
        </InternshipContent>
      </Collapsible>
    ));
  }

  return (
    <div>
      <Title text={'Programele noastre de internship'} />
      <InternshipsContainer>
        {renderInternships()}
      </InternshipsContainer>
    </div>
  );
};

const InternshipsContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  background: ${AERO_BLUE};
`;

const InternshipContent = styled.div`
  font-size: 20;
  color: ${JAPANESE_INDIGO};
`;


export default InternshipsComponent;
