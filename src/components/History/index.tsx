import * as S from './styles'
import gear from '../../img/gear.svg'
export default function History() {
  return (
    <S.Container>
      <S.Detail>
        <S.Circle>
          <img src={gear} alt="Engrenagem" />
        </S.Circle>
      </S.Detail>
      <S.ContainerHistory>
        <h1>História</h1>
        <p>
          A Dservice Comércio e Serviços Ltda foi fundada em 29/07/2008, com
          foco em ferramentas e utilidades. Localizada em Serra - ES, na Avenida
          São José, nº 362, a empresa tem CNPJ 10.250.839/0001-31. Registrada na
          Solutudo e cadastrada na Receita Federal com CNAE 4744-0/01,
          destaca-se no comércio varejista de ferragens e ferramentas, sempre
          buscando qualidade e satisfação dos clientes. Ao longo dos anos, a
          equipe comprometida tem garantido o crescimento e o sucesso da
          empresa, mantendo-se fiel à sua missão de oferecer soluções inovadoras
          para o mercado.
        </p>
      </S.ContainerHistory>
    </S.Container>
  )
}
