import * as S from './styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import img1 from '../../img/marcas/logo1.png'
import img2 from '../../img/marcas/logo2.png'
import img3 from '../../img/marcas/logo3.png'
import img4 from '../../img/marcas/logo4.png'
import img5 from '../../img/marcas/logo5.png'
import img6 from '../../img/marcas/logo6.png'
import img7 from '../../img/marcas/logo7.png'
import img8 from '../../img/marcas/logo8.png'
import img9 from '../../img/marcas/logo9.png'
import img10 from '../../img/marcas/logo10.png'
import img11 from '../../img/marcas/logo11.png'
import img12 from '../../img/marcas/logo12.png'
import img13 from '../../img/marcas/logo13.png'
import img14 from '../../img/marcas/logo14.png'
import img15 from '../../img/marcas/logo15.png'
import img16 from '../../img/marcas/logo16.png'

const imageStyle = {
  width: '100px',
}

export function Partner() {
  const Carousel = () => {
    const settingsLeft = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5500,
      autoplaySpeed: 0,
      cssEase: 'linear',
    }

    const settingsRight = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: -1,
      autoplay: true,
      speed: 5500,
      autoplaySpeed: 0,
      cssEase: 'linear',
    }

    return (
      <S.Container>
        <S.Title>
          <div>
            <h1>NOSSOS PARCEIROS</h1>
          </div>
        </S.Title>
        <S.ContainerPatner>
          <div className="carousel-container">
            <Slider {...settingsLeft}>
              {[img1, img2, img3, img4, img5, img6, img7, img8].map(
                (image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Empresa ${index + 1}`}
                      style={imageStyle}
                    />
                  </div>
                )
              )}
            </Slider>
            <Slider {...settingsRight}>
              {[img9, img10, img11, img12, img13, img14, img15, img16].map(
                (image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Empresa ${index + 9}`}
                      style={imageStyle}
                    />
                  </div>
                )
              )}
            </Slider>
          </div>
        </S.ContainerPatner>
      </S.Container>
    )
  }

  return <Carousel />
}
