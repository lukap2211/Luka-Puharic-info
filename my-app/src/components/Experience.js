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
  `

const ExpCompany = styled.div `
  font-weight: bold;
  margin: 5px 0;
  `

const ExpLocation = styled.div `
  color: var(--faded);
  `

const ExpDescription = styled.div `
  margin: 5px 0;
  `

const ExpTechnologies = styled.div `
  font-style: italic;
  `

class Experience extends React.Component {
  render() {

    const { dateFrom, dateTo, title, company, location, description, technologies } = this.props.data

    console.log("description", description)

    function hasDescriptions(description) {
      if (Array.isArray(description)) {
        return description.map(desc => <ExpDescription>{desc}</ExpDescription>)
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
