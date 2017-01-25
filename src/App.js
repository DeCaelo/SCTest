import React, { Component } from 'react';
import Title from './Title.js';
import logo from './logo.svg';

import styled, { keyframes } from 'styled-components';

const Outer = styled.div`
  text-align: center;
`

const Header = styled.div`
  background-color: #222;
  height: 200px;
  padding: 20px;
  color: white;

  > h2 {
    color: ${ props => props.palevioletred ? 'palevioletred' : 'black' };
  }
`
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  ${ props => props.backwards && 'animation-direction: reverse'}
  height: 80px;
`

const Intro = styled.p`
  font-size: large;
`

class App extends Component {
  render() {
    return (
      <Outer>
        <Header palevioletred>
          <Logo src={logo} alt="logo" />
          <Logo backwards src={logo} alt="logo" />
          <Title primary>Welcome to React</Title>
          <Title>Welcome to React</Title>
          <h2>Welcome to React</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Outer>
    );
  }
}

export default App;
