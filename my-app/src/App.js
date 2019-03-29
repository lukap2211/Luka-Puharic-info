import React, { Component, Fragment } from 'react';
import base from './data/firebase';
import Nav from './components/Nav';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Loading from './components/Loading';

class App extends Component {

  state = {
    resume: {},
    loaded: false
  };

  componentDidMount() {
    this.ref = base.syncState('resume', {
      context: this,
      state: "resume",
      then() {
        this.setState({ loaded: true });
      }
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {

    let page;

    if (!this.state.loaded) {
      page = <Loading/>
    } else {
      const { profile, profile: { description, summary, linkedinImg: profileImage }, experience, education, skills } = this.state.resume
      page = (
        <Fragment>
          <Nav profileImage={profileImage}/>
          <Header profile={profile}/>
          <Section type="profile" data={description}/>
          <Section type="summary" data={summary}/>
          <Section type="experience" data={experience}/>
          <Section type="education" data={education}/>
          <Section type="skills" data={skills}/>
          <Footer profile={profile}/>
        </Fragment>
      )
    }

    return (
      <Fragment>
        {page}
      </Fragment>
    )
  }
}

export default App;
