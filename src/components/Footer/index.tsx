import * as S from './styles'
import logo from '../../img/logo.png'

export default function Footer() {
  return (
    <S.FooterContainer>
    <S.Logo>
        <img src={logo} alt="LOGO" />
    </S.Logo>
    <S.Information>
      <p>Endereço: Rua Maria Camata, 315, Cristovão Colombo - Vila Velha - ES </p>
    </S.Information>
    <S.Escrita>
      <p>Copyright © 2023 Dservice Serviços LTDA</p>
    </S.Escrita>
    </S.FooterContainer>
  )
}
