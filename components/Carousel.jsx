import s from '../styles/Carousel.module.sass'
import Slider from 'react-slick'
import Container from './Container'
import Title from './Title'
import img6 from "../assets/img/6.jpg"
import img7 from "../assets/img/7.jpg"
import img8 from "../assets/img/8.jpg"
import img9 from "../assets/img/9.jpg"
import img10 from "../assets/img/10.jpg"

const Carousel = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    }
    return (
        <div className={s.carousel}>
            <Container>
                <Title title="Upcoming tours"/>
                <Slider {...settings}>
                    <div className={s.item}>
                        <div className={s.date}>11.09.2001</div>
                        <div className={s.title}>Title</div>
                        <img src={img6.src} alt="" />
                    </div>
                    <div className={s.item}>
                        <div className={s.date}>11.09.2001</div>
                        <div className={s.title}>Title</div>
                        <img src={img7.src} alt="" />
                    </div>
                    <div className={s.item}>
                        <div className={s.date}>11.09.2001</div>
                        <div className={s.title}>Title</div>
                        <img src={img8.src} alt="" />
                    </div>
                    <div className={s.item}>
                        <div className={s.date}>11.09.2001</div>
                        <div className={s.title}>Title</div>
                        <img src={img9.src} alt="" />
                    </div>
                    <div className={s.item}>
                        <div className={s.date}>11.09.2001</div>
                        <div className={s.title}>Title</div>
                        <img src={img10.src} alt="" />
                    </div>
                </Slider>
            </Container>
        </div>
    )
}


export default Carousel