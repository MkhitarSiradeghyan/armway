import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Carousel from '../components/Carousel';
import Gallery from './../components/Gallery';
import Title from './../components/Title';


const Index = () => {
    return (
        <div className="index">
            <Header isNavlinks={true}/>
            <Hero />
            <Carousel />
            <Title title="Gallery"/>
            <Gallery />
            <Footer />
        </div>
    )
}


export default Index