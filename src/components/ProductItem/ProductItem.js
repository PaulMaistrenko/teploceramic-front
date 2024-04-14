import dehydrator from '../../temporery-files/dehydrator_exemple.png';

export const ProductItem = () => {
  return (
    <li className="item__card">
          <p className="item__code secondary__text--regular text-color--neutralN300">Code: FD500</p>
          <img src={dehydrator} alt="" className="item__img" />
          <div className="item__info">
            <p className="item__type main__text--medium text-color--neutralN350">Dehydrator</p>
            <p className="item__name extra-large__text--medium text-color--neutralN400">Teploceramic FD500 </p>
            <p className="item__color secondary__text--regular text-color--neutralN350">Silver</p>
          </div>
          <div className="product-category__bottom">
            <div className="product-price__wrapper">
              <div className="item__old-conditions">
                <p className="item__old-price secondary__text--regular text-color--neutralN300">450 €</p>
                <p className="item__discount secondary__text--regular text-color--dangerDN500">-35%</p>
              </div>
              <p className="item__price">210 €</p>
            </div>
            <button className="add-to-cart__button icon"></button>
          </div>
    </li>
  );
}
