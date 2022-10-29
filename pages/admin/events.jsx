import AddItem from '../../components/AddItem'
import Container from '../../components/Container'
import Header from '../../components/Header'
import List from '../../components/List'
import Item from '../../components/Item'
import s from '../../styles/Events.module.sass'


const Events = () => {
    return (
        <>
            <Header isNavlinks={false} />
            <div className={s.events}>
                <Container>
                    <List className={s.list}>
                        
                        <AddItem />
                    </List>
                </Container>
            </div>


        </>
    )
}


export default Events