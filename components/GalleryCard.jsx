import s from '../styles/GalleryCard.module.sass'
import img from "../assets/img/11.jpg"

const GalleryCard = ({id, handleClick}) => {
    return (
        <div onClick={() => handleClick(id)} className={s.gallery_card}>
            <img src={img.src} alt="Gallery Image" />
        </div>
    )
}


export default GalleryCard