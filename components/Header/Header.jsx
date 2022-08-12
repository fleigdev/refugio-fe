import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Header() {
  const circ = useRef();
  const sbux = useRef();

  useEffect(() => {
    // console.log('useEffect', circ.current.style.background);
    // console.log(sbux.current.src);
    // sbux.current.src = 'http://localhost:3000/assets/img2.png';
    // console.log('TOG in use effect', menuTog);
    // console.log('TOG in use effect', navTog);
    // menuTog.current.classList.toggle('active');
    // navTog.current.classList.toggle('active');
  });

  const changeCircleColor = (color, img) => {
    // console.log('change Color', color);
    // console.log('ref:', circ);
    //circ.current.style.background = color;
    sbux.current.src = img;

    // const circle = document.querySelector('.circle');
    // circle.style.background = color;
  };

  return (
    <section className="header">
      <div ref={circ} className="circle"></div>

      <div className="content">
        <div className="textBox">
          <h2>
            Una esperanza para los peluditos.
            <br />
            Somos <span>Refugio Huella Animal</span>
          </h2>
          <p>
            Refugio y protectora de perros callejeros , rescatamos,
            rehabilitamos y damos en adopción.
          </p>
          <a href="#">Adóptame!</a>
        </div>
        <div className="imgBox">
          <img ref={sbux} src="assets/dog2.png" className="starbucks"></img>
        </div>
      </div>
      <ul className="thumb">
        <li>
          <img
            src="/assets/face1.png"
            onClick={() =>
              changeCircleColor(
                '#017143',
                'http://localhost:3000/assets/dog2.png'
              )
            }
          ></img>
        </li>
        <li>
          <img
            src="/assets/face2.png"
            onClick={() =>
              changeCircleColor(
                '#eb7497',
                'http://localhost:3000/assets/dog1.png'
              )
            }
          ></img>
        </li>
        <li>
          <img
            src="assets/face3.png"
            onClick={() =>
              changeCircleColor(
                '#d752b1',
                'http://localhost:3000/assets/dog3.png'
              )
            }
          ></img>
        </li>
      </ul>
      <ul className="sci">
        <li>
          <a href="">
            <img src="assets/facebook.png" alt=""></img>
          </a>
        </li>
        <li>
          <a href="">
            <img src="assets/twitter.png" alt=""></img>
          </a>
        </li>
        <li>
          <a href="">
            <img src="assets/instagram.png" alt=""></img>
          </a>
        </li>
      </ul>
    </section>
  );
}
