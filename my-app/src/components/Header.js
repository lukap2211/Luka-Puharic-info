import React from "react";
import styled from 'styled-components'

const Title = styled.h1 `
  font-size: 4em;
  text-align: left;
  color: var(--title-main);
  width: 0;
  break-word: normal;
  line-height: 1;
  `

const Header = props => (
  <header className="top">
      <Title>{ props.profile.personal.name }</Title>
  </header>
)

export default Header;
