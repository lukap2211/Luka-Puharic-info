import React from "react";
import styled from 'styled-components'

const FooterWrap = styled.footer `
  color: var(--faded);
  margin: 50px auto;
  text-align: right;

  @media (max-width: 700px) {
    margin: 250px auto 400px;
    text-align: center;
  }

  `

class Footer extends React.Component {
  render() {
    return (
      <FooterWrap>
        { this.props.name } CV 2019 March
      </FooterWrap>
    )

  }

}
export default Footer;
