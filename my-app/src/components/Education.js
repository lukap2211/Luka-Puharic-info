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

const ExpTitle = styled.h4 `
  font-weight: bold;
  margin: 5px 0;
  `

class Education extends React.Component {
  render() {

    const { dateFrom, dateTo, title, institution } = this.props.data

    return (
      <ExpWrap>
        <ExpTop>
          <div>{institution}</div>
          <div>{dateFrom} - {dateTo}</div>
        </ExpTop>
        <div>
          <ExpTitle>{title}</ExpTitle>
        </div>

      </ExpWrap>
    )
  }
}

export default Education;
