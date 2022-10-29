import s from '../styles/TourCard.module.sass'
import img from '../assets/img/10.jpg'
import Link from 'next/link'

const TourCard = ({ name }) => {
    return (
        <Link href={`/hiking/${name}`}>
                <div className={s.tourcard}>
                    <div className={s.title}>Tour Name</div>
                    <div className={s.date}><span>11.09.2001</span> / <span>20000 dr.</span></div>
                    <div className={s.img}><img src={img.src} alt="" /></div>
                </div>
        </Link>
    )
}


export default TourCard