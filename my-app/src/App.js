import React, { Component, Fragment } from 'react';
import data from './data/data.json';
import Nav from './components/Nav';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const { profile, profile: { description, summary}, experience, education, skills } = data


class App extends Component {

  render() {
    return (
      <Fragment>
        <Nav />
        <Header profile={profile} />
        <Section type="profile" data={description} />
        <Section type="summary" data={summary} />
        <Section type="experience" data={experience} />
        <Section type="education" data={education} />
        <Section type="skills" data={skills} />
        <Footer profile={profile} />
      </Fragment>
    )
  }
}

export default App;
