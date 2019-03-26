import React from 'react';
import styled from 'styled-components'
import Skills from './Skills';
import Experience from './Experience';

const SectionItem = styled.section `
  display: grid;
  grid-template-columns: 190px auto;
  margin: 0 0 50px;
  `

const SectionTitle = styled.h2 `
  margin: 0;
  padding: 0;
  font-size: 1em;
  color: #999;
  min-width: 190px;
  text-transform: capitalize;
  `

const SectionInfo = styled.div `
  font-size: 1em;
  color: #000;
  `

class Section extends React.Component {
  render() {
    const sectionInfo = (data) => {
      if (Array.isArray(data)) {
        return data.map((item, i) => {
          if (this.props.type === 'skills') {
            return <Skills data={item} key={i}/>
          } else {
            return <Experience data={item} key={i}/>
          }
        })
      } else {
        return data
      }
    }

    return (
      <SectionItem>
        <SectionTitle>{ this.props.type }</SectionTitle>
        <SectionInfo>{ sectionInfo(this.props.data) }</SectionInfo>
      </SectionItem>
    )
  }
}

export default Section;
