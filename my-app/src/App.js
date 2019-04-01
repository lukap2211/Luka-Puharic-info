import React, { Component, Fragment } from 'react';
import base from './data/firebase';
import Nav from './components/Nav';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Loading from './components/Loading';
import styled from 'styled-components'

const Profile = styled.section `
  margin: 0 auto;
  padding: 0px 20px 40px;
  max-width: 900px;
  display: grid;
  column-gap: 4.28571%;
  grid-auto-flow: row;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 4.28571%;
  grid-row-gap: 50px;
  @media (max-width: 600px) {
    display: block;
  }
  `

class App extends Component {

  constructor() {
    super()
    this.darkThemeOnOff = this.darkThemeOnOff.bind(this);
  }

  state = {
    resume: {},
    loaded: false,
    darkTheme: false
  };

  componentDidMount() {
    this.ref = base.syncState('resume', {
      context: this,
      state: "resume",
      then() {
        this.setState({ loaded: true });
      }
    })

    const localDarkTheme = localStorage.getItem('darkTheme');
    this.setState({ darkTheme: localDarkTheme === 'on' ? true : false });
  }

  componentDidUpdate() {
    const rootElement = document.getElementById("root")
    this.state.darkTheme ? rootElement.classList.add('darkTheme') : rootElement.classList.remove('darkTheme')
    localStorage.setItem('darkTheme', this.state.darkTheme ? 'on' : 'off');
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  darkThemeOnOff() {
    this.setState({
      darkTheme: !this.state.darkTheme
    })
  }

  render() {

    let page;

    if (!this.state.loaded) {
      page = <Loading/>
    } else {
      const { profile, profile: { description, summary, linkedinImg: profileImage }, experience, education, skills } = this.state.resume
      page = (
        <Fragment>
          <Nav profileImage={profileImage} darkThemeOnOff={this.darkThemeOnOff} darkTheme={this.state.darkTheme} />
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
      <Profile>
        {page}
      </Profile>
    )
  }
}

export default App;
