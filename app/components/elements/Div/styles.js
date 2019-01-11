import styled from 'styled-components';
import students from 'images/students.jpg';

export const Wrapper = styled.div`
  background: url(${students}) no-repeat center center fixed;
  -webkit-background-size: cover;
 -moz-background-size: cover;
 -o-background-size: cover;
 background-size: cover;
 display: flex;
`;
export const DivComponent = styled.div`
  display: inline-grid;
  height: 100%;
  margin: auto;
  text-align: center;
  margin-left: ${props => props.margin ? '10%' : '0'};
  color: ${props => props.color ? 'white' : 'black'};
  margin-bottom: 8%;
  margin-top: 3%;
  overflow: hidden:
`;
