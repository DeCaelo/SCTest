import styled from 'styled-components';

const green = `#BADA55`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.primary ? green : `yellow`};
`;

export default Title;
