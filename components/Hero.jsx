import s from '../styles/Hero.module.sass'
import Slider from "react-slick"
import img1 from "../assets/img/1.jpg"
import img2 from "../assets/img/2.jpg"
import img3 from "../assets/img/3.jpg"
import img4 from "../assets/img/4.jpg"
import img5 from "../assets/img/5.jpg"
import Container from './Container'
import Carousel from './Carousel';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    return (
        <div className={s.hero}>
            <Container>
                <Slider {...settings}>
                    <div className={s.item}>
                        <div className={s.title}>Title</div>
                        <img src={img1.src} alt="" />
                    </div>
                    <div className={s.item}>
                        <div className={s.title}>Title</div>
                        <img src={img2.src} alt="" />
                    </div>
                    <div className={s.item}>
                        <div className={s.title}>Title</div>
                        <img src={img3.src} alt="" />
                    </div>
                    <div className={s.item}>
                        <div className={s.title}>Title</div>
                        <img src={img4.src} alt="" />
                    </div>
                    <div className={s.item}>
                        <div className={s.title}>Title</div>
                        <img src={img5.src} alt="" />
                    </div>
                </Slider>
            </Container>
        </div>
    )
}


export default Hero