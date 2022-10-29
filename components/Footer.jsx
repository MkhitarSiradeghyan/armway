import s from '../styles/Footer.module.sass'
import Container from './Container'
import medialab from '../assets/img/medialab.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faWhatsapp, faViber, faFacebookF } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <div className={s.footer}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.copy}>©2022 Armenian Way Tour</div>
                    <div className={s.social}>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <FontAwesomeIcon icon={faViber} />
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className={s.media}>Designed by
                        <a href="https://www.instagram.com/media.labstudio/" target="_blanc"><img src={medialab.src} width={60} alt="" /></a>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Footer