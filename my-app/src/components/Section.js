import React from 'react';
import styled from 'styled-components'
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';

const SectionItem = styled.section `
  display: grid;
  grid-template-columns: 190px auto;
  margin: 0 0 50px;
  @media (max-width: 700px) {
    display: block;
    overflow: hidden;
    margin: 0 0 40px;
  }
  `

const SectionTitle = styled.h2 `
  margin: 0;
  padding: 0;
  font-size: 1em;
  color: #999;
  min-width: 190px;
  text-transform: capitalize;
  @media (max-width: 700px) {
    margin: 20px 0;
  }
  `

const SectionInfo = styled.div `
  font-size: 1em;
  color: #000;
  `

class Section extends React.Component {
  render() {

    const { type, data } = this.props

    const sectionInfo = (data) => {
      if (Array.isArray(data)) {
        return data.map((item, i) => {
          if (type === 'skills') {
            return <Skills data={item} key={i}/>
          } else if (type === 'education') {
            return <Education data={item} key={i}/>
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
        <SectionTitle>{type}</SectionTitle>
        <SectionInfo>{sectionInfo(data)}</SectionInfo>
      </SectionItem>
    )
  }
}

export default Section;
