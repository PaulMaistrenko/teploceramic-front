import './about-page.scss';
import fact_img_1 from "../../assets/images/blocks/about/fact-img-1.png";
import fact_img_2 from "../../assets/images/blocks/about/fact-img-2.png";
import fact_img_3 from "../../assets/images/blocks/about/fact-img-3.png";
import certificate_img_1 from "../../assets/images/blocks/about/certificates/certificates-1.png";

export const AboutPage = () => {
  return (
    <div className="about__page">
      <section className="about__top">
        <div className="container">
          <h1 className="about__title">HEAT THAT WARMS THE <br />SOUL IS <br /><span>TEPLOCERAMIC</span></h1>
        </div>
      </section>
      <section className="about__slogan">
        <div className="container">
          <p className="about-slogan__text">We are here to make your homes warm and cozy. By helping you, we recharge and move forward every day. We are Teploceramic. </p>
        </div>
      </section>
      <section className="facts-about-us">
        <div className="container">
          <h1 className="facts-about-us__title">FACTS ABOUT US...</h1>
          <ul className="facts-about-us__list">
            <li className="facts-about-us__item">
              <img src={fact_img_1} alt="fact-img-1" className="fact__img" />
              <p className="fact__content">Ukrainian brand from Kremenchuk, which began its history in 2011.</p>
            </li>
            <li className="facts-about-us__item">
              <img src={fact_img_2} alt="fact-img-2" className="fact__img" />
              <p className="fact__content">We have a wide sales network that covers more than 100 retail outlets in Ukraine.</p>
            </li>
            <li className="facts-about-us__item">
              <img src={fact_img_3} alt="fact-img-3" className="fact__img" />
              <p className="fact__content">Our products are available in more than 25 countries around the world.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="about-our-advantages">
        <h1 className="about-our-advantages__title">WHY SHOULD YOU CHOOSE US?</h1>
        <ul className="advantages__list">
          <li className="advantages__item">
            <div className="container">
              <h3 className="advantage__title">High quality of products</h3>
              <p className="advantage__text">We produce Teploceramic ceramic heaters from the best materials and give them a 5-year warranty.</p>
            </div>
          </li>
          <li className="advantages__item">
            <div className="container">
              <h3 className="advantage__title">Customer support</h3>
              <p className="advantage__text">Teploceramic office managers are ready to answer your questions by phone and chat from 9 to 18 seven days a week.</p>
            </div>
          </li>
          <li className="advantages__item">
            <div className="container">
              <h3 className="advantage__title">Individual approach</h3>
              <p className="advantage__text">The Teploceramic company individually approaches the tasks of each client and offers the best solutions for space heating.</p>
            </div>
          </li>
          <li className="advantages__item">
            <div className="container">
              <h3 className="advantage__title">Low start-up costs</h3>
              <p className="advantage__text">The cost of our heaters is depending on the model from 2,4 €  to 4,8 € per 1m² of heated area.</p>
            </div>
          </li>
          <li className="advantages__item">
            <div className="container">
              <h3 className="advantage__title">Low heating costs</h3>
              <p className="advantage__text">Thanks to the design of new convection ceramic heaters with built-in thermostat for electric heating tariff, our customers spent in 2019 on average 0,4 € per month for heating 1m².</p>
            </div>
          </li>
        </ul>
      </section>
      <section className="contacts">
        <div className="container">
          <h1 className="contacts__title">OUR CONTACTS</h1>
          <p className="contacts__text">Our specialists will always listen to you, answer the questions and advise on our products.</p>
          <div className="contacts__modes">
            <div className="contacts__mode">
              <p className="contact-mode__title">Phone</p>
              <p className="contact-mode__source">+36 705169291</p>
              <button className="contact__button button secondary-button">Call now</button>
            </div>
            <div className="contacts__mode">
              <p className="contact-mode__title">E-mail</p>
              <p className="contact-mode__source">info@teploceramic.com</p>
              <button className="contact__button button secondary-button">Send an e-mail</button>
            </div>
          </div>
        </div>
      </section>
      <section className="certificates">
        <div className="container">
          <h1 className="certificates__title">CERTIFICATES & PATENTS</h1>
          <p className="certificates__text">Our words are confirmed by our actions</p>
          <div className="certificates-slider__screen">
            <ul className="certificates__list">
              <li className="certificates__item">
                <img src={certificate_img_1} alt="certificate-1" className="certificate__img" />
              </li>
              <li className="certificates__item">
                <img src={certificate_img_1} alt="certificate-1" className="certificate__img" />
              </li>
              <li className="certificates__item">
                <img src={certificate_img_1} alt="certificate-1" className="certificate__img" />
              </li>
              <li className="certificates__item">
                <img src={certificate_img_1} alt="certificate-1" className="certificate__img" />
              </li>
            </ul>
          </div>
          <div className="cerificates-slider__nav-buttons">
            <button className="cerificates-slider__prev-button button secondary-button bgd-icon" />
            <button className="cerificates-slider__next-button button secondary-button bgd-icon" />
          </div>
        </div>
      </section>
    </div>
  );
}
