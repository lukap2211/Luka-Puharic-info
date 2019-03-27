import React from "react";
import styled from 'styled-components'
import Link from './Link';

const ContactInfo = styled.div `
  color: var(--faded);
  grid-column-start: 6;
  grid-column-end: span 7;
  justify-self: end;
  > div {
    margin-bottom: 5px;
  }
  @media (max-width: 600px) {
    margin: 0 0 20px;
  }
  `

const Title = styled.h1 `
  grid-column-start: 1;
  grid-column-end: span 3;
  font-size: 3.5em;
  color: var(--title-main);
  line-height: 1;
  margin: 0;
  padding: 0 0 20px;
  width: 0;
  break-word: normal;

  @media (max-width: 600px) {
    padding: 10px 0 30px;
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
  <React.Fragment>
    <Title id="home">{props.profile.personal.name}</Title>
    <ContactInfo>
      <div>{formatPhoneNumber(props.profile.personal.phone)}</div>
      <Link link={props.profile.personal.email} />
      <br/>
      <Link link={props.profile.social.linkedin} />
      <Link link={props.profile.social.github} />
    </ContactInfo>
  </React.Fragment>
)

export default Header;
