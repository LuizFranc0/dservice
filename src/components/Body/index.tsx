import Button from '../Button'
import * as S from './styles'
import gear from '../../img/gear.svg'

export default function Body() {
  return (
    <S.Container>
      <S.ContainerPart>
      <S.partOne>
        <S.Title>
          <h1>Adeus ao velho, olá ao novo!</h1>
          <p>Venda e compre aqui</p>
        </S.Title>
        <Button/>
      </S.partOne>
      <S.partTwo></S.partTwo>
      </S.ContainerPart>
    </S.Container>
  )
}
