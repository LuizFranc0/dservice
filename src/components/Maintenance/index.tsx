import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import cadeiras from '../../img/cadeiras.png';
import autoclave from '../../img/autoclave.png';
import fotons from '../../img/fotons.png';
import raio from '../../img/raio.png';
import compressores from '../../img/compressores.png';
import equipos from '../../img/equipos.png';
import bicarbonato from '../../img/bicarbonato.png';
import canetas from '../../img/canetas.png';
import pedal from '../../img/pedal.png';
import consultorios from '../../img/consultorios.png';
import tubulacoes from '../../img/tubulacoes.png';
import estofados from '../../img/estofados.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Adicione para centralizar horizontalmente */
  width: 100%;
  background-color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  padding: 50px;
  color: #02383f;
  font-size: 20px;
`;

const SliderContainer = styled.div`
  margin: 0 auto; /* Centraliza horizontalmente o carrossel */
  width: 80%; /* Ajuste a largura conforme necessário */
`;

export default function Maintenance() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Title>CONHEÇA NOSSOS PRODUTOS</Title>
      <SliderContainer>
        <Slider {...settings}>
          <div>
            <img src={cadeiras} alt="Cadeiras" />
          </div>
          <div>
            <img src={autoclave} alt="Autoclave" />
          </div>
          <div>
            <img src={fotons} alt="Fotons" />
          </div>
          <div>
            <img src={raio} alt="Raio" />
          </div>
          <div>
            <img src={compressores} alt="Compressores" />
          </div>
          <div>
            <img src={equipos} alt="Equipos" />
          </div>
          <div>
            <img src={bicarbonato} alt="Bicarbonato" />
          </div>
          <div>
            <img src={canetas} alt="Canetas" />
          </div>
          <div>
            <img src={pedal} alt="Pedal" />
          </div>
          <div>
            <img src={consultorios} alt="Consultórios" />
          </div>
          <div>
            <img src={tubulacoes} alt="Tubulações" />
          </div>
          <div>
            <img src={estofados} alt="Estofados" />
          </div>
        </Slider>
      </SliderContainer>
    </Container>
  );
}
