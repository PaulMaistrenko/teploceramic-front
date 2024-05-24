import classNames from 'classnames';
import './description.scss';

export const Description = ({ detailType, isClippedDescription }) => {
  return (
    <div className="description-info__block">
      <p className="description-block__title">DESCRIPTION</p>
      <article className="description__content">
        <div
          className={
            classNames(
              "content__screen__list-screen", { "description-clipped": (isClippedDescription && detailType === 'About the product') },
            )
          }
        >
        <p className="product__description">
          With this dehydrator, you can produce quickly and efficiently:<br />
          Dried fruits or vegetables that will serve you as a delicious snack or as naturally preserved
          ingredients for your daily diet.<br />
        </p>
        You can cook it:
        <ul className="advantages__list">
          <li className="advantage__item">Apple or banana chips, sun-dried tomatoes</li>
          <li className="advantage__item">Dried herbs</li>
          <li className="advantage__item">Pastille</li>
          <li className="advantage__item">Yogurt: during drying, yogurt becomes very bright and resembles candy</li>
          <li className="advantage__item">Meat, fish, jerky: spicy dried beef or pork or chicken or fish is very easy and quick to prepare</li>
        </ul>
        </div>
      </article>
    </div>
  );
}
