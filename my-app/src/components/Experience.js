import React from "react";
import styled from 'styled-components'

const ExpWrap = styled.div `
  margin: 0 0 40px;
  `

const ExpTop = styled.header `
  display: grid;
  grid-template-columns: auto auto;
  color: var(--faded);
  div + div {
    justify-self: right;
  }
  @media (max-width: 700px) {
    display: block;
    overflow: hidden;
  }
  `

const ExpCompany = styled.h4 `
  font-weight: bold;
  margin: 5px 0;
  `

const ExpLocation = styled.div `
  color: var(--faded);
  `

const ExpDescription = styled.p `
  margin: 5px 0;
  `

const ExpTechnologies = styled.p `
  font-style: italic;
  margin: 5px 0;
  `

class Experience extends React.Component {
  render() {

    const { dateFrom, dateTo, title, company, location, description, technologies } = this.props.data

    function hasDescriptions(description) {
      if (Array.isArray(description)) {
        return description.map((desc, i) => <ExpDescription key={i}>{desc}</ExpDescription>)
      } else {
        return <ExpDescription>{description}</ExpDescription>
      }
    }

    function hasTechnologies(technologies) {
      if (technologies) {
        return <ExpTechnologies>Technologies: {technologies}</ExpTechnologies>
      }
    }

    return (
      <ExpWrap>
        <ExpTop>
          <div>{title}</div>
          <div>{dateFrom} - {dateTo}</div>
        </ExpTop>
        <div>
          <ExpCompany>{company}</ExpCompany>
          <ExpLocation>{location}</ExpLocation>
        </div>
        {hasDescriptions(description)}
        {hasTechnologies(technologies)}

      </ExpWrap>
    )
  }
}

export default Experience;
