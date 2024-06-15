import './CardTv.css';
import cardPhoto from './img/samsung-tv-43-inch.png';

function CardTv(){
  return(
    <div className='card-tv'>
      <div className='card-tv__img'>
        <div className='card-tv__img-icon'>
          <i className="material-symbols-outlined">local_shipping</i>
        </div>
        <img src={cardPhoto} alt='tv-photo'></img>
      </div>
      <div className='card-tv__date'>

      </div>
    </div>
  );
}

export default CardTv;