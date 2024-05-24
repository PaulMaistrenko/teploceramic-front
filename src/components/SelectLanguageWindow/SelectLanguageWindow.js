import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import './select-language-window.scss';

export const SelectLanguageWindow = () => {
  const {
    setIsSelectLangOpen,
    setCurrentLang,
  } = useContext(MainContext);
  return (
    <div className="select-language__window select-language--background-dark">
      <div className="container">
        <button
          className="window-close__button bgd-icon"
          onClick={() => setIsSelectLangOpen(false)}
        />
        <h2 className="select-language__title">Select your language</h2>
        <ul className="languages__list">
          <li className="language__item language__item--active">
            <button
              className="language__link"
              onClick={() => {
                setCurrentLang('English')
                setIsSelectLangOpen(false)
              }}
            >
              English
            </button>
          </li>
          <li className="language__item">
            <button
              className="language__link"
              onClick={() => {
                setCurrentLang('Deutsch')
                setIsSelectLangOpen(false)
              }}
            >
              Deutsch
            </button>
          </li>
          <li className="language__item">
            <button
              className="language__link"
              onClick={() => {
                setCurrentLang('Polski')
                setIsSelectLangOpen(false)
              }}
            >
              Polski
            </button>
          </li>
          <li className="language__item">
            <button
              className="language__link"
              onClick={() => {
                setCurrentLang('Românǎ')
                setIsSelectLangOpen(false)
              }}
            >
              Românǎ
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
