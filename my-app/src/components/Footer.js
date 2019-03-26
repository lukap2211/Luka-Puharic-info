import React from "react";
import styled from 'styled-components'

const FooterWrap = styled.footer `
  color: var(--faded);
  margin: 50px auto 450px;
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
