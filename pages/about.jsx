
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutText from '../components/AboutText';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Header isNavlinks={true}/>
            <div className='index'>
                <Hero />
                <AboutText />
                <Footer />
            </div>
        </>
    )
}


export default About