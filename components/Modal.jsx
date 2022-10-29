import s from '../styles/Modal.module.sass'


const Modal = ({children, setModal}) => {
    return (
        <div className={s.modal}>
            <div className={s.wrap}>
            <div onClick={() => setModal(false)} className={s.close}>✖</div>
                {children}
            </div>
        </div>
    )
}


export default Modal