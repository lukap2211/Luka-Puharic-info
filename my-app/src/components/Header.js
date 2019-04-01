import React from "react";
import styled from 'styled-components'
import Link from './Link';

const ContactInfo = styled.div `
  color: var(--primary-dark-faded);
  grid-column-start: 6;
  grid-column-end: span 7;
  place-self: end;
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
  place-self: center start;
  font-size: 3.5em;
  color: var(--primary-color);
  line-height: 1;
  margin: 0;
  padding: 20px 0 0;
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
    <Title id="home">{props.profile.name}</Title>
    <ContactInfo>
      <div>{formatPhoneNumber(props.profile.phone)}</div>
      <Link link={props.profile.email} />
      <br/>
      <Link link={props.profile.linkedin} />
      <Link link={props.profile.github} />
    </ContactInfo>
  </React.Fragment>
)

export default Header;
