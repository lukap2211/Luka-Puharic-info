import React, { Component } from 'react';
import data from './data/data.json';
import styled from 'styled-components'
import Header from './components/Header';
import Section from './components/Section';

const { profile, experience, skills } = data

const Sections = styled.section`
  display: flex;
  flex-direction: column;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header profile={profile} />
        <Sections>
          <Section title="Profile" data={profile.description} someDesc="someDesc 123" />
          <Section title="Summary" data={profile.summary} someDesc="someDesc 456" />
          <Section title="Experience" data={experience} />
          <Section title="Skills" data={skills} />
        </Sections>
      </div>
    );
  }
}

export default App;
