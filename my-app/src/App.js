import React, { Component } from 'react';
import styled from 'styled-components'
import data from './data.json';

const { profile, summary, experience, skills } = data


const Title = styled.h1 `
  font-size: 3em;
  text-align: center;
  color: #D11878;
  `

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title>{profile.personal.name}</Title >
          <subtitle>summary</subtitle>
            {summary}
          <subtitle>experience</subtitle>
            {JSON.stringify(experience)}
          <subtitle>skills</subtitle>
            {JSON.stringify(skills)}
        </header>
      </div>
    );
  }
}

export default App;
