import React from "react";
import styled from 'styled-components'

const ListedItem = styled.li `
  list-style: none;
  margin: 0;
  padding: 0 25px 10px 0;
  font-size: 1em;
  float: left;
  @media (max-width: 700px) {
    padding: 0 25px 10px 0;
  }
  `

class Skills extends React.Component {
  render() {

    const { data: skills } = this.props

    const skilsInfo = (skill) => skill

    return (
      <ListedItem>{ skilsInfo(skills) }</ListedItem>
    )
  }
}


export default Skills;
