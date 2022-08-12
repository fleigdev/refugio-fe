export default function ContactCard() {
  return (
    <div className="contactForm">
      <div className="helptext">
        <h3>Contáctanos con nosotros</h3>
        <p>
          Para donar o ayudar de alguna manera, nos puedes contactar por los
          siguientes medios:
        </p>
        <p>
          <strong>Número de Whatsapp:</strong> 753 44 687
        </p>
        <p>
          <strong>Correo Electrónico:</strong> refugiohuella@gmail.com
        </p>
        <p>
          <strong>Instagram:</strong> @refugiohuella
        </p>
        <p>
          <strong>Facebook:</strong> @refugio
        </p>
        <div className="contactIcons">
          <img
            src="/icons/whatsapp.png"
            className="contactIcon"
            alt=""
            height="80"
            width="80"
          ></img>
          <img
            src="/icons/facebook.png"
            className="contactIcon"
            alt=""
            height="80"
            width="80"
          ></img>
          <img
            src="/icons/instagram.png"
            className="contactIcon"
            alt=""
            height="80"
            width="80"
          ></img>
        </div>
        {/* <div className="inputBox">
                <input type="text" placeholder="Nombre"></input>
              </div> */}
      </div>
    </div>
  );
}
