import s from '../styles/ChangeImage.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faXmark } from '@fortawesome/free-solid-svg-icons'
import img from '../assets/img/10.jpg'


const ChangeImage = ({ isMain }) => {

    const rand = Math.round(Math.random() * 10000)

    return (
        <div className={s.img}>
            <input className={s.input} type="file" name="" id={`image${rand}`} />
            <img src={img.src} alt="" />
            <label htmlFor={`image${rand}`} className={s.inputHover}>
                <FontAwesomeIcon icon={faCamera} />
            </label>
            {
                isMain ||
                <div className={s.close}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
            }
        </div>
    )
}


export default ChangeImage