import s from '../styles/Gallery.module.sass'
import Container from './Container'
import GalleryCard from './GalleryCard'
import Title from './Title'
import { useState } from 'react';
import Modal from './Modal';
import Album from './Album';


const Gallery = () => {
    const [id, setId] = useState(1)
    const [modal, setModal] = useState(false)
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const handleClick = id => {
        setId(id)
        setModal(true)
    }

    return (
        <>
        <div className={s.gallery}>
            <Container>
                <div className={s.wrap}>
                    <div className={s.grid}>
                        {
                            arr.map(el => <GalleryCard id={el} handleClick={handleClick}/>)
                        }
                        
                    </div>
                </div>
            </Container>
        </div>
        {modal ? <Album setModal={setModal}/> : null}
        </>
    )
}


export default Gallery