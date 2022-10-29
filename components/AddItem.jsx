import s from '../styles/AddItem.module.sass'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AddItem = () => {
    return (
        <div className={s.addItem}>
            <FontAwesomeIcon icon={faPlus}/>
        </div>
    )
}


export default AddItem