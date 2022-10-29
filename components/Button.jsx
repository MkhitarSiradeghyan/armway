import s from '../styles/Button.module.sass'


const Button = ({ title }) => {
    return (
        <button className={s.button}>
            {title}
        </button>
    )
}


export default Button