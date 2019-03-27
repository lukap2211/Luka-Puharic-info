import React from "react";
import styled from 'styled-components'

const AvatarWrap = styled.div`
  margin: 20px auto 10px;
  height: 80px;
  width: 80px;
  background: transparent url("https://avatars0.githubusercontent.com/u/391727?v=4") center center;
  background-size: cover;
  border-radius: 40px;
  `

class Avatar extends React.Component {

  render() {

    console.log(this.props.data)
    const { linkedinImg } = this.props.data
    console.log(linkedinImg)

    return (
      <AvatarWrap img={linkedinImg}/>
    )
  }
}


export default Avatar;
