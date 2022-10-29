import Container from '../../components/Container'
import s from '../../styles/Slider.module.sass'
import Header from '../../components/Header'
import Item from '../../components/Item'
import AddItem from '../../components/AddItem'
import List from '../../components/List'


const Slider = () => {

    return (
        <>
            <Header isNavlinks={false} />
            <div className={s.slider}>
                <Container>
                    <List className={s.list}>
                        <Item />
                        <Item />
                        <AddItem />
                    </List>
                </Container>
            </div>


        </>
    )
}


export default Slider