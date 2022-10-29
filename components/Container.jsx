import s from '../styles/Container.module.sass'


const Container = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    )
}


export default Container