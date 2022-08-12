export default function About(props) {
  const {sobreNosotros, sobreNosotros2} = props;

  // console.log(sobreNosotros);
  // console.log(sobreNosotros2);
  return (
    <section className="about-section">
      <div className="row">
        <div className="col50">
          <h2 className="titleText-about">
            <span>S</span>obre Nosotros
          </h2>
          <p className="about__text">
            {sobreNosotros} <br /> {sobreNosotros2}
          </p>
        </div>
        <div className="col50">
          <div className="imgBox">
            <img
              src="/assets/shelter.jpeg"
              className="imgPlace"
              alt=""
              height="80"
              width="80"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
