import React from "react";
import styled from 'styled-components'

const ContactInfo = styled.div `
  position: absolute;
  top: 40px;
  right: 40px;
  color: var(--faded);
  > div {
    margin-bottom: 5px;
  }
`

const Title = styled.h1 `
  font-size: 4em;
  text-align: left;
  color: var(--title-main);
  width: 0;
  break-word: normal;
  line-height: 1;
  `

const Header = props => (
  <header>
    <Title>{props.profile.personal.name}</Title>
    <ContactInfo>
      <div>{props.profile.personal.phone}</div>
      <div>{props.profile.personal.email}</div>
      <div>{props.profile.social.linkedin}</div>
      <div>{props.profile.social.github}</div>
    </ContactInfo>
  </header>
)

export default Header;
