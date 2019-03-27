import React from "react";
import styled from 'styled-components'

const HamburgerIcon = styled.div `
  display: inline-block;
  cursor: pointer;
  position: absolute;
  left: -75px;
  top: 0;
  padding: 20px;
  background-color: rgba(255,255,255,0.85);

  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: var(--faded);
    margin: 6px 0;
    transition: 0.4s;
  }

  `
const NavMenu = styled.nav `
  position: fixed;
  right: -125px;
  top: 0;
  background-color: var(--title-main);
  z-index: 2;
  transition: all .5s;

  &.on {
    right: 0;

    .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }

    .bar2 {opacity: 0;}

    .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  li {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li.logo {
    max-width: 0;
    overflow: hidden;
    background: white;
    transition: all 0.5s;
    font-weight: 600;
    font-size: 30px;
  }

  li.logo a {
    color: black;
  }

  a {
    text-decoration: none;
    padding: 20px;
    display: inline-block;
    color: white;
    transition: all 0.2s;
    text-transform: uppercase;
  }

  @media (min-width: 600px) {
    display: none;
  }

  `

class Nav extends React.Component {

  state = {
    menuOn: "off"
  };

  menuToggle = () => {
    const toggleState = this.state.menuOn === "off" ? "on" : "off";
    this.setState({ menuOn: toggleState });
  };

  render() {

    return (

      <NavMenu className={this.state.menuOn} >
        <HamburgerIcon onClick={this.menuToggle} >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </HamburgerIcon>
        <ul>
          <li><a onClick={this.menuToggle} href="#home">Info</a></li>
          <li><a onClick={this.menuToggle} href="#profile">Profile</a></li>
          <li><a onClick={this.menuToggle} href="#summary">Summary</a></li>
          <li><a onClick={this.menuToggle} href="#experience">Experience</a></li>
          <li><a onClick={this.menuToggle} href="#education">Education</a></li>
          <li><a onClick={this.menuToggle} href="#skills">Skills</a></li>
        </ul>
      </NavMenu>
    )
  }
}


export default Nav;
