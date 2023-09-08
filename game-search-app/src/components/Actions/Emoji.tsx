// import bullsEye from '../assets/Emojis/bulls-eye.webp';
// import mehEye from '../assets/Emojis/meh.webp';
// import thumbsUp from '../assets/Emojis/thumbs-up.webp';
// import bullsEye from '../assets/Emojis/bulls-eye.webp';
import mehEye from '../../assets/Emojis/meh.webp';
import thumbsUp from '../../assets/Emojis/thumbs-up.webp';
import bullsEye from '../../assets/Emojis/bulls-eye.webp';
import './Emoji.css'


interface Props{
    rating:number
}

const Emoji = ({rating}:Props) => {
    if (rating < 3) return null;
    const emojiMap:{[key:number]:any}={
        3 : { src :mehEye  , alt : 'meh'},
        4 : { src:thumbsUp , alt : 'recommended'},
        5 : { src: bullsEye , alt: 'exceptional'},
    };
  return (
<img className='emoji' src={emojiMap[rating].src} alt={emojiMap[rating].alt} />

  )
}

export default Emoji