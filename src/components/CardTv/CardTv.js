import './CardTv.css';
import cardPhoto from './img/samsung-tv-43-inch.png';

function CardTv(){
  return(
    <div className='card-tv'>
      <div className='card-tv__img'>
        <div className='card-tv__img-icon'>
          <i className="material-symbols-outlined item__position-center">local_shipping</i>
        </div>
        <img src={cardPhoto} alt='tv-photo'></img>
      </div>
      <div className='card-tv__data'>
        <div className='item__position-center'>
          <div className='card-tv__data-description'>
            <div>
              <p>Телевізор 43 дюйма Самсунг Samsung UE43NU7099 Smart TV Tizen</p>             
            </div>
            <div className='card-tv__data__icon-favorite'>
              <i className='material-symbols-outlined'>favorite</i>
            </div>
          </div>
          <p className='card-tv__data-price'><span>11 900</span> <span>грн.</span></p>
          <div className='card-tv__data-adress'>
            <p>Буськ</p>
            <p>11 червня 2024 р.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTv;