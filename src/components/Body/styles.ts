import styled from "styled-components";
import background from '../../img/background.png'

export const Container = styled.div`
display: flex;
width: 100%;
height: auto;
background-image: url(${background});
background-size: cover;
`
export const partOne = styled.div`
display: flex;
flex-direction: column;
width: 50%;
padding: 220px 50px;
`
export const partTwo = styled.div`
display: flex;
flex-direction: column;
width: 50%;
`

export const Title = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
h1{
  color: #fff;
}
p{
  color: #fff;
}
`