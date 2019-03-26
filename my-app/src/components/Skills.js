import React from "react";
import styled from 'styled-components'

const ListedItem = styled.li `
  list-style: none;
  margin: 0;
  padding: 0 25px 10px 0;
  font-size: 1em;
  float: left;
  `

class Skills extends React.Component {
  render() {

    const sectionInfo = (data) => data

    return (
      <ListedItem>{ sectionInfo(this.props.data) }</ListedItem>
    )
  }
}


export default Skills;
