import Button from '../Button'
import * as S from './styles'

export default function Body() {
  return (
    <S.Container>
      <S.partOne>
        <S.Title>
          <h1>Venda seu equipamento velho e compre um novo</h1>
          <p>ATENDIMENTO 24HR</p>
        </S.Title>
        <Button/>
      </S.partOne>
      <S.partTwo></S.partTwo>
    </S.Container>
  )
}
