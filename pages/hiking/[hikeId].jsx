import s from '../../styles/SingleTour.module.sass'
import Hero from "../../components/Hero"
import {useRouter} from "next/router"
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Title from '../../components/Title'

const SingleTour = () => {
    const tourTitle = "Aragats"
    const {asPath} = useRouter()
    return (
        <div className="index">
            <Header isNavlinks={true}/>
            <Hero/>
            <Title title={asPath.split("/")[2]}/>

            <Footer/>
        </div>
    )
}


export default SingleTour