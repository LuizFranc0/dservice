import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
width: 100%;
background: #02383F;
`
export const ContainerPart = styled.div`
display: flex;
`
export const partOne = styled.div`
display: flex;
flex-direction: column;
width: 60%;
padding: 220px 150px;
`
export const partTwo = styled.div`
display: flex;
flex-direction: column;
width: 40%;
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
export const Detail = styled.div`
width: 100%;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
`
export const Circle = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #02383f;
  border: 3px solid #fff;
  top: 570px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 8s linear infinite;
`;