import Header from '../components/Header'
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';


const GalleryPage = () => {
    return (
        <div className="index">
            <Header isNavlinks={true}/>
            <Gallery />
            <Footer />
        </div>
    )
}


export default GalleryPage