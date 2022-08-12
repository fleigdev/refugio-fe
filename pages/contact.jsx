import ContactCard from '../components/Contact/ContactCard';
export default function Contact() {
  return (
    <section>
      <h2 className="titleText centered">
        <span>A</span>nímate a ayudar!
      </h2>
      <p className="about-text">
        A restaurant, or, more informally, an eatery, is a business that
        prepares and serves food and drinks to customers.[1] Meals are generally
        served and eaten on the premises, but many restaurants also offer
        take-out and food delivery services.
      </p>
      <div className="row">
        <div className="col50">
          {' '}
          <ContactCard />
        </div>
        <div className="col50">
          {' '}
          <div className="imgBox">
            <img
              src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/02-25/brunette+woman+petting+two+dogs+while+volunteering+at+an+animal+shelter-min.jpg"
              className="contact_page_image m-50"
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
