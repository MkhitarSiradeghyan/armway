import s from '../styles/Header.module.sass'
import Image from 'next/image'
import Container from './Container'
import logo from "../assets/logo/logo.svg"
import hy from "../assets/icons/hy.svg"
import ru from  "../assets/icons/ru.svg"
import en from "../assets/icons/en.svg"
import setLanguage  from 'next-translate/setLanguage';
import Navlinks from './Navlinks'
import AdminNavlinks from './AdminNavlinks'

const Header = ({isNavlinks}) => {

    return (
        <div className={s.header}>
            <Container>
                <div className={s.header_wrap}>
                    <div className={s.logo}>
                        <Image src={logo} height={50}/>
                    </div>
                    <nav className={s.navbar}>
                        <ul className={s.menu}>
                            {isNavlinks ? <Navlinks/> : <AdminNavlinks/>}
                            <li className={s.menu_item}>
                                <ul className={s.lang}>
                                    <li onClick={async () => await setLanguage('hy')} className={s.lang_item}><Image src={hy} width={32} height={24}/></li>
                                    <li onClick={async () => await setLanguage('ru')} className={s.lang_item}><Image src={ru} width={32} height={24}/></li>
                                    <li onClick={async () => await setLanguage('en')} className={s.lang_item}><Image src={en} width={32} height={24}/></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </div>
    )
}


export default Header