import React, { Component, Fragment } from 'react';
import data from './data/data.json';
import base from './data/firebase';
import Nav from './components/Nav';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

const { profile, profile: { description, summary, linkedinImg: profileImage }} = data.resume

class App extends Component {

  state = {
    "resume": {}
  };

  componentDidMount() {
    this.ref = base.syncState('resume', {
      context: this,
      state: "resume"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <Fragment>
        <Nav profileImage={profileImage}/>
        <Header profile={profile} state={this.state.resume.profile} />
        <Section type="profile" data={description} />
        <Section type="summary" data={summary} />
        <Section type="experience" data={this.state.resume.experience} />
        <Section type="education" data={this.state.resume.education} />
        <Section type="skills" data={this.state.resume.skills} />
        <Footer profile={this.state.resume.profile} />
      </Fragment>
    )
  }
}

export default App;
