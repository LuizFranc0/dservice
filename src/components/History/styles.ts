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
width: 100%;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
margin-top: 100px;
background-color: #02383F;
flex-direction: column;
position: relative;
`

export const ContainerHistory = styled.div`
width: 50%;
color: #fff;

h1{
  font-size: 30px;
  text-align: center;
}
p{
  text-align: justify;
  padding-top: 20px;
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
  top: -35px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 8s linear infinite;
`;