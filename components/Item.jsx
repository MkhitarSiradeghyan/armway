import s from '../styles/Item.module.sass'
import hy from '../assets/icons/hy.svg'
import ru from '../assets/icons/ru.svg'
import en from '../assets/icons/en.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faHandHoldingDollar, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import ChangeImage from './ChangeImage'

const Item = ({ isEvent }) => {

    const [textHY, setTextHY] = useState('Hayeren text')
    const [textRU, setTextRU] = useState('Ruseren text')
    const [textEN, setTextEN] = useState('Angleren text')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const formRef = useRef(null)
    const reset = () => {
        formRef.current.reset()
        setTextHY("")
        setTextRU("")
        setTextEN("")
    }
    const handleHYInput = e => setTextHY(e.target.value)
    const handleRUInput = e => setTextRU(e.target.value)
    const handleENInput = e => setTextEN(e.target.value)

    return (
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={s.item}>
            <ChangeImage isMain={true} />
            <div className={s.text}>
                <div className={s.textItem}>
                    <div className={s.flag}><img src={hy.src} alt="" /></div>
                    <input onInput={handleHYInput} type="text" value={textHY} />
                </div>
                <div className={s.textItem}>
                    <div className={s.flag}><img src={ru.src} alt="" /></div>
                    <input onInput={handleRUInput} type="text" value={textRU} />
                </div>
                <div className={s.textItem}>
                    <div className={s.flag}><img src={en.src} alt="" /></div>
                    <input onInput={handleENInput} type="text" value={textEN} />
                </div>
            </div>
            <div className={s.buttons}>
                <button className={s.save}>Save</button>
                <button className={s.delete}>Delete</button>
                <button className={s.reset} onClick={reset}>Reset</button>
            </div>
            {!isEvent ||
                <div className={s.slides}>
                    <ChangeImage isMain={false} />
                    <ChangeImage isMain={false} />
                    <ChangeImage isMain={false} />
                    <ChangeImage isMain={false} />
                    <ChangeImage isMain={false} />
                    <ChangeImage isMain={false} />
                    <ChangeImage isMain={false} />
                    <ChangeImage isMain={false} />
                    <div className={s.addSlide}><FontAwesomeIcon icon={faPlus} /></div>
                </div>}
            {!isEvent ||
                <div className={s.dateTimePrice}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <div className={s.date}>
                        <input type="text" maxLength="2" />
                        <span>/</span>
                        <input type="text" maxLength="2" />
                        <span>/</span>
                        <input type="text" maxLength="4" />
                    </div>
                    <FontAwesomeIcon icon={faClock} />
                    <div className={s.time}>
                        <input type="text" />
                        <span>:</span>
                        <input type="text" />
                    </div>
                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                    <div className={s.price}>
                        <input type="text" />
                    </div>
                </div>}
        </form>
    )
}


export default Item