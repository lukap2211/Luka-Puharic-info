import React from 'react';
import styled from 'styled-components'

const SectionItem = styled.div `
  display: flex;
  flex-direction: row;
  margin: 0 0 50px;
  `

const SectionTitle = styled.h2 `
  margin: 0;
  padding: 0;
  font-size: 1em;
  color: #999;
  flex: 1;
  min-width: 190px;
  `

const SectionInfo = styled.div `
  font-size: 1em;
  color: #000;
  `

const Section = props => (
    <SectionItem>
      <SectionTitle>{ props.title }</SectionTitle>
      <SectionInfo>{ JSON.stringify(props.data) }</SectionInfo>
    </SectionItem>
);

export default Section;
