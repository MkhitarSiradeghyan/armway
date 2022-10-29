import s from '../styles/Navlinks.module.sass'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

const Navlinks = () => {
    const {t} = useTranslation("common")

    return (
        <>
            <li className={s.menu_item}><Link href="/">{t('home')}</Link></li>
            <li className={s.menu_item}><Link href="/gallery">{t('gallery')}</Link></li>
            <li className={s.menu_item}><Link href="/hiking">{t('hiking')}</Link></li>
            <li className={s.menu_item}><Link href="/about">{t('about')}</Link></li>
            <li className={s.menu_item}><Link href="/contacts">{t('contacts')}</Link></li>
        </>
    )
}


export default Navlinks