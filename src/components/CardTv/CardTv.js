import './CardTv.css';
import cardPhoto from './img/samsung-tv-43-inch.png';

function CardTv(){
  return(
    <div>
      <img src={cardPhoto} alt='tv-photo'></img>
      <p>Component CardTv</p>
    </div>
  );
}

export default CardTv;