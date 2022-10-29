import s from '../styles/AdminNavlinks.module.sass'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

const AdminNavlinks = () => {
    const {t} = useTranslation("common")

    return (
        <>
            <li className={s.links}><Link href="/admin/slider">{t('slider')}</Link></li>
            <li className={s.links}><Link href="/admin/gallery">{t('gallery')}</Link></li>
            <li className={s.links}><Link href="/admin/events">{t('events')}</Link></li>
        </>
    )
}


export default AdminNavlinks