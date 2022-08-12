import Slider from 'react-slick';
import { useState, useEffect  } from 'react';
import { useRouter } from 'next/router';
import { getDogByUrlApi } from '../api/dog';
import { BASE_PATH } from '../utils/constants';

export default function Dog() {
  const [dog, setDog] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      // console.log(query.dog);
      const response = await getDogByUrlApi(query.dog);
      // console.log(response.data);
      setDog(response.data[0]);
      
    })();
  }, [query]);
  if (!dog) return null;

  const renderVacunado = () => {
    if (dog.attributes.vacunado) {
      return 'Sí'
    } else {
      return 'No'
    }
  }

  const renderCastrado = () => {
    if (dog.attributes.castrado) {
      return 'Sí'
    } else {
      return 'No'
    }
  }

  let image = dog.attributes.fotoperfil.data.attributes.url;
  let imageURL = BASE_PATH.concat(image);;
  // console.log(imageURL);
  var settings = {
    className: 'carousel-screenshots',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlider: true,
  };
  return (
    <section className="dogpage">
      <div className="dogcard">
        <h2 className="titleText centered">
          <span>A</span>dopta a {dog.attributes.nombre} !
        </h2>
        <div className="row">
          <div className="col50">
            <div className="imgBox dogprofilepic">
              <img
                src={imageURL}
                className="dog_image"
                alt=""
              ></img>
            </div>
          </div>
          <div className="col50">
            <p className="doginfo">
            {dog.attributes.descripcion}
            </p>
            <div className="dogBox">
              <strong>Edad: </strong>&nbsp;&nbsp;&nbsp; {dog.attributes.edad} años
            </div>
            <div className="dogBox">
              <strong>Vacunas al día: </strong>&nbsp;&nbsp;&nbsp;{' '}
              {renderVacunado()}
              
            </div>
            <div className="dogBox">
              <strong>Castrado: </strong>&nbsp;&nbsp;&nbsp;  {renderCastrado()}
            </div>
            <div className="dog_grid">
              <div className="dogelement">
                <img
                  src="/icons/bone.png"
                  className="doglogo"
                  alt=""
                  height="40"
                  width="40"
                ></img>
                <p className="dogtext">{dog.attributes.infoPerro}</p>
              </div>

              <div className="dogelement">
                <img
                  src="/icons/pet.png"
                  className="doglogo"
                  alt=""
                  height="40"
                  width="40"
                ></img>
                <p className="dogtext">{dog.attributes.infoSociableConAnimales}</p>
              </div>
              <div className="dogelement">
                <img
                  src="/icons/dog-training.png"
                  className="doglogo"
                  alt=""
                  height="40"
                  width="40"
                ></img>
                <p className="dogtext">{dog.attributes.infoJuegos}</p>
              </div>
              <div className="dogelement">
                <img
                  src="/icons/pet-food.png"
                  className="doglogo"
                  alt=""
                  height="40"
                  width="40"
                ></img>
                <p className="dogtext">{dog.attributes.infoAlimentacion}</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="titleText centered">Desliza para ver mis fotos !</h2>
        <Slider {...settings} className="centered">
          <div className="content-carousel-card p-5">
            {/* Add this wrapper to handle the style of the item */}
            <div className="card-content-wrapper">
              <div className="text-box p-5"></div>
              <div className="img-box">
                <img
                  src="https://littledogtips.com/wp-content/uploads/2017/11/20171117_171019-e1511672548451.jpg"
                  className="resize_dog_gallery"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          <div className="content-carousel-card p-5">
            {/* Add this wrapper to handle the style of the item */}
            <div className="card-content-wrapper">
              <div className="text-box p-5"></div>
              <div className="img-box">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/59c967729f7456ec37985037/1595364131033-JCN9NXP3LS587DU9A7W1/%231+-+DIY+Modern+Dog+House.JPG?format=2500w"
                  className="resize_dog_gallery"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}
