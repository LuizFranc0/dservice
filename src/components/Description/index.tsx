import * as S from './styles'
import pictureOne from '../../img/information.png'

export default function Description() {
  return (
    <S.Container>
      <S.partOne>
        <h3>Serviços</h3>
        <S.titleOne>MANUTENÇÃO</S.titleOne>
        <S.titleTwo>REPARAÇÃO</S.titleTwo>
        <S.Information>
          <p>
            Na nossa empresa, priorizamos a excelência em reparação e manutenção
            de equipamentos odontológicos. Com anos de experiência no setor,
            garantimos serviços de qualidade que visam o pleno funcionamento dos
            equipamentos, proporcionando segurança e eficiência aos
            profissionais da área. Nossa equipe altamente capacitada utiliza
            tecnologias avançadas para identificar e resolver qualquer problema,
            garantindo um atendimento rápido e eficaz. Contamos com peças
            originais e procedimentos minuciosos para assegurar a máxima
            durabilidade dos equipamentos. Confie em nossos serviços e mantenha
            sua clínica odontológica sempre operando no mais alto nível de
            desempenho.
          </p>
        </S.Information>
      </S.partOne>
      <S.partTwo>
        <img src={pictureOne} alt="imagem um"/>
      </S.partTwo>
    </S.Container>
  )
}
