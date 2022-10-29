import s from '../styles/Tours.module.sass'
import TourCard from './TourCard'
import Container from './Container';
import Register from './Register';
import { useState } from 'react';


const Tours = () => {
    const [tourId, setTourId] = useState(1)
    const [modal, setModal] = useState(false)
    const handleChangeId = id => {
        setTourId(id)
        setModal(true)
    }
    const arr = [
        "Aragats",
        "Ararat",
        "Ara mount",
        "Dilijan",
        "Gosh lake",
        "Parz lake",
        "Ishkhanasar",
        "Gyumri"
    ]
    return (
        <>
        <div className={s.tours}>
            <Container>
                <div className={s.wrap}>
                    {
                        arr.map(el => <TourCard name={el} handleChangeId={handleChangeId}/>)
                    }
                </div>
            </Container>
        </div>
        {modal ? <Register tourId={tourId} setModal={setModal}/> : null}
        </>
    )
}


export default Tours