import styled from "styled-components"; //framework

export const Container = styled.div`
width: 100%;
height: auto;
display: flex;
`
export const partOne = styled.div`
display: flex;
flex-direction: column;
width: 70%;
padding: 100px 150px;
h3{
 color: #026155;
 font-family: Poppins; 
}
`
export const Information = styled.div`
text-align: justify;
border-left: 3px solid #026155;
padding-left: 10px;
`
export const partTwo = styled.div`
display: flex;
flex-direction: column;
width: 30%;
padding: 50px;
img{
  width: 350px;
}
`
export const titleOne = styled.p`
color: #026155;
font-family: Tanseek Modern Pro Arabic;
font-size: 4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
`

export const titleTwo = styled.p`
color: #02383F;
font-family: Tanseek Modern Pro Arabic;
font-size: 4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
`
