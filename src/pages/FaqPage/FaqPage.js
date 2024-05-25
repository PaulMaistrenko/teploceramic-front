import { useContext, useEffect } from 'react';
import './faq-page.scss';
import { MainContext } from '../../context/MainContext';
import { scrollToTop } from '../../services/scrollToTop';
import { HelpPageTop } from '../../components/HelpPageTop/HelpPageTop';

export const FaqPage = () => {
  const {
    setCurrentPage,
  } = useContext(MainContext);

  useEffect (() => {
    setCurrentPage('Faq page');
    scrollToTop();
  });

  return (
    <div className="faq__page">
      <HelpPageTop title="FAQ" />
      <div className="container">
        <div className="faq-page__content">
          <h2 className="faq-page__title">Dehydrators</h2>
          <ul className="faq__list">
            <li className="faq__item">
              <button className="faq__button">
                <p className="faq__text">What is a dehydrator?</p>
                <div className="faq__visibility-handler bgd-icon" />
              </button>
            </li>
            <li className="faq__item">
              <button className="faq__button">
                <p className="faq__text">What types of dehydrators are there?</p>
                <div className="faq__visibility-handler bgd-icon" />
              </button>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}
