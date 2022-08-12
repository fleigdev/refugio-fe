import { BASE_PATH } from '../../../utils/constants';
import Link from 'next/link';
export default function AdoptCard(props) {
  const { dog } = props;
  // console.log(dog);
  let image = dog.attributes.fotoperfil.data.attributes.url;
  let imageURL = BASE_PATH.concat(image);
  // console.log(imageURL);
  // let image = BASE_PATH, '/', dog.attributes.fotoperfil.data.attributes.url;

  return (
    <>
        <Link href={dog.attributes.slug}  >
          <a>
      <div  className="adopt_card">
        <img
          src={imageURL}
          className="adopt_card__image"
          alt=""
        />
        <div className="adopt_card__overlay">
          <div className="adopt_card__header">
            <svg className="adopt_card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="adopt_card__thumb"
              src="https://media.istockphoto.com/vectors/dog-with-bone-vector-id1284069443?k=20&m=1284069443&s=612x612&w=0&h=o_ZIbQqfaomLFEjINh-bVodJ2CMjblNtxLp3iDgX2i4="
              alt=""
            />
            <div className="adopt_card__header-text">
              <h3 className="adopt_card__title">{dog.attributes.nombre}</h3>
            </div>
          </div>
          <div className="adopt_card__description">
            <div className="adopt_card__button">
              Busco un hogar. ¿Me adoptas?
            </div>
          </div>
        </div>
      </div>
      </a>
      </Link>

      {/* <a href="" className="adopt_card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi1LEhOGqTIgx8VtpGsKhA9QRzGXb3rJpAEw&usqp=CAU"
          className="adopt_card__image"
          alt=""
        />
        <div className="adopt_card__overlay">
          <div className="adopt_card__header">
            <svg className="adopt_card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="adopt_card__thumb"
              src="https://media.istockphoto.com/vectors/dog-with-bone-vector-id1284069443?k=20&m=1284069443&s=612x612&w=0&h=o_ZIbQqfaomLFEjINh-bVodJ2CMjblNtxLp3iDgX2i4="
              alt=""
            />
            <div className="adopt_card__header-text">
              <h3 className="adopt_card__title">Tommy</h3>
            </div>
          </div>
          <div className="adopt_card__description">
            <div className="adopt_card__button">
              Busco un hogar. ¿Me adoptas?
            </div>
          </div>
        </div>
      </a>

      <a href="" className="adopt_card">
        <img
          src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2021/09/46.jpeg"
          className="adopt_card__image"
          alt=""
        />
        <div className="adopt_card__overlay">
          <div className="adopt_card__header">
            <svg className="adopt_card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="adopt_card__thumb"
              src="https://media.istockphoto.com/vectors/dog-with-bone-vector-id1284069443?k=20&m=1284069443&s=612x612&w=0&h=o_ZIbQqfaomLFEjINh-bVodJ2CMjblNtxLp3iDgX2i4="
              alt=""
            />
            <div className="adopt_card__header-text">
              <h3 className="adopt_card__title">Jerry</h3>
            </div>
          </div>
          <div className="adopt_card__description">
            <div className="adopt_card__button">
              Busco un hogar. ¿Me adoptas?
            </div>
          </div>
        </div>
      </a>

      <a href="" className="adopt_card">
        <img
          src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2021/09/46.jpeg"
          className="adopt_card__image"
          alt=""
        />
        <div className="adopt_card__overlay">
          <div className="adopt_card__header">
            <svg className="adopt_card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="adopt_card__thumb"
              src="https://media.istockphoto.com/vectors/dog-with-bone-vector-id1284069443?k=20&m=1284069443&s=612x612&w=0&h=o_ZIbQqfaomLFEjINh-bVodJ2CMjblNtxLp3iDgX2i4="
              alt=""
            />
            <div className="adopt_card__header-text">
              <h3 className="adopt_card__title">Doggo</h3>
            </div>
          </div>
          <div className="adopt_card__description">
            <div className="adopt_card__button">
              Busco un hogar. ¿Me adoptas?
            </div>
          </div>
        </div>
      </a>

      <a href="" className="adopt_card">
        <img
          src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2021/09/46.jpeg"
          className="adopt_card__image"
          alt=""
        />
        <div className="adopt_card__overlay">
          <div className="adopt_card__header">
            <svg className="adopt_card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              className="adopt_card__thumb"
              src="https://media.istockphoto.com/vectors/dog-with-bone-vector-id1284069443?k=20&m=1284069443&s=612x612&w=0&h=o_ZIbQqfaomLFEjINh-bVodJ2CMjblNtxLp3iDgX2i4="
              alt=""
            />
            <div className="adopt_card__header-text">
              <h3 className="adopt_card__title">Doggo</h3>
            </div>
          </div>
          <div className="adopt_card__description">
            <div className="adopt_card__button">
              Busco un hogar. ¿Me adoptas?
            </div>
          </div>
        </div>
      </a> */}
    </>
  );
}
