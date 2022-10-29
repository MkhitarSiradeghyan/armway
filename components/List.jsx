import s from '../styles/List.module.sass'


const List = ({children}) => {
    return (
        <div className={s.list}>
            {children}
        </div>
    )
}


export default List