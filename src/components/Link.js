import React from "react";
import styled from 'styled-components'

const Link = styled.a`
  list-style: none;
  padding: 0 0 5px 0;
  font-size: 1em;
  color: var(--light);
  text-decoration: none;
  display: block;
  &:hover {
    color: var(--primary-color);
  }
  @media (max-width: 600px) {
    display: block;
  }

  `

class HeaderLink extends React.Component {
  render() {

    const { link } = this.props

    const renderLink = (link) => {
      if (link.startsWith('http')) {
        return <Link href={link} target="_blank" rel="noopener">{link}</Link>
      } else {
        return <Link href={`mailto: ${link}`}>{link}</Link>
      }
    }

    return (
      renderLink(link)
    )
  }
}


export default HeaderLink;
