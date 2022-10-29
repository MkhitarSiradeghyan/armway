import s from '../styles/Album.module.sass'
import img from '../assets/img/14.jpg'
import Modal from './Modal'

const Album = ({ id, setModal }) => {
    return (
        <Modal setModal={setModal}>
            <div className={s.album}>
                <img src={img.src} alt="" />
            </div>
        </Modal>
    )
}


export default Album