import styled from 'styled-components'

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 40px;
width: 100%;
height: 89px;
background: linear-gradient(136deg, #02383F 0%, #026155 100%);
`
export const Logo = styled.div`
color: #fff;
cursor: pointer;
img{
    width: 160px;
}
`

export const Links = styled.div`



ul{
    display: flex;
    gap: 34px;
}

li{
   
    list-style: none;
}
a {
    text-decoration: none;
    color: #fff;
    position: relative; 
}

a::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%; 
    transform: translateX(-50%); 
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: width 0.3s ease-in-out;
}

a:hover::before {
    width: 100%;
}
`