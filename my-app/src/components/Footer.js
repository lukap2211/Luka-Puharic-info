import React from "react";
import styled from 'styled-components'

const FooterWrap = styled.footer `
  color: var(--primary-dark-faded);
  margin: 50px auto;
  grid-column-start: 1;
  grid-column-end: span 12;
  text-align: center;
  `

class Footer extends React.Component {
  render() {

    const { name } = this.props.profile || ''

    return (
      <FooterWrap>
        { name } Resume 2019 March
      </FooterWrap>
    )

  }

}
export default Footer;
