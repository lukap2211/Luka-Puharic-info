import React, { Component } from 'react';
import data from './data/data.json';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const { profile, profile: { description, summary }, experience, education, skills } = data

class App extends Component {
  render() {
    return (
      <div>
        <Header profile={profile} />
        <Section type="profile" data={description} />
        <Section type="summary" data={summary} />
        <Section type="experience" data={experience} />
        <Section type="education" data={education} />
        <Section type="skills" data={skills} />
        <Footer name={profile.personal.name} />
      </div>
    );
  }
}

export default App;
