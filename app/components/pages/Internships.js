import React from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import Title from 'components/elements/Title';
import CollapsibleTrigger from 'components/elements/CollapsibleTrigger';
import styled from 'styled-components';

import { QUEEN_BLUE, AERO_BLUE, JAPANESE_INDIGO } from 'constants/colors';
import InternshipForm from 'containers/elements/InternshipForm';

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
    const { internships } = props;
    return internships.map(internship => (
      <Collapsible key={internship.id} trigger={CollapsibleTrigger(internship)} triggerStyle={Trigger} >
        <InternshipContent key={internship.id}>
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
      <InternshipForm />
      <InternshipsContainer>
        {renderInternships()}
      </InternshipsContainer>
    </div>
  );
};

const InternshipsContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

const InternshipContent = styled.div`
  font-size: 20;
  color: ${JAPANESE_INDIGO};
`;


export default InternshipsComponent;
