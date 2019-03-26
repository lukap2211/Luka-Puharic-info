import React from "react";
import styled from 'styled-components'
import Link from './Link';

const ContactInfo = styled.div `
  position: absolute;
  top: 40px;
  right: 40px;
  color: var(--faded);
  > div {
    margin-bottom: 5px;
  }
  @media (max-width: 700px) {
    position: relative;
    top: auto;
    right: auto;
    margin: 0 0 40px;
  }
  `

const Title = styled.h1 `
  font-size: 4em;
  text-align: left;
  color: var(--title-main);
  width: 0;
  break-word: normal;
  line-height: 1;
  margin:0 0 50px;
  @media (max-width: 700px) {
    margin:0 0 30px;
  }
  `

const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '+1 (' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

const Header = props => (
  <header id="home">
    <Title>{props.profile.personal.name}</Title>
    <ContactInfo>
      <div>{formatPhoneNumber(props.profile.personal.phone)}</div>
      <Link link={props.profile.personal.email} />
      <br/>
      <Link link={props.profile.social.linkedin} />
      <Link link={props.profile.social.github} />
    </ContactInfo>
  </header>
)

export default Header;
