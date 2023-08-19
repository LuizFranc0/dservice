import React from "react";
import * as S from './styles'
import logo from '../../img/logo.png'

export function Header() {
    return(
        <S.HeaderContainer>

        <S.Logo>
            <img src={logo} alt="LOGO" />
        </S.Logo>

        <S.Links>
            <ul>
                <li>
                    <a href="/">Sobre nós</a>
                </li>
                <li>
                    <a href="/">Parceiros</a>
                </li>
                <li>
                    <a href="/">Serviços</a>
                </li>
                <li>
                    <a href="/">Contato</a>
                </li>
                
            </ul>
        </S.Links>

        </S.HeaderContainer>
    )
}