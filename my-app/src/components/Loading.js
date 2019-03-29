import React from "react";
import styled from 'styled-components'

// Another way to import
import DotLoader from 'react-spinners/DotLoader';

const LoadingWrap = styled.h1 `
  margin: 50px auto;
  display: flex;
  justify-content: center;
  grid-column-start: 1;
  grid-column-end: span 12;
  div > div {
    background-color: var(--title-main);
  }
  `

class Loading extends React.Component {
  render() {
    return (
      <LoadingWrap>
          <DotLoader/>
      </LoadingWrap>
    )
  }
}
export default Loading;
