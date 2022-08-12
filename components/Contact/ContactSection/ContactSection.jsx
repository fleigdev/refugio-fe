import ContactCard from '../ContactCard';
export default function ContactSection() {
  return (
    <section className="contact_section">
      <h2 className="titleText">
        <span>A</span>yuda!
      </h2>
      <div className="row">
        <div className="col50">
          <ContactCard />
        </div>
        <div className="col50">
          <div className="imgBox">
            <img
              src="http://pngedits.com/public/uploads/preview/cute-golden-dog-transparent-png-11624690825x5lbmqbn5s.png"
              className="imgPlaceContact"
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
