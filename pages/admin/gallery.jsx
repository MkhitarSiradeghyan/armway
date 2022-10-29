import AddItem from '../../components/AddItem'
import Container from '../../components/Container'
import Header from '../../components/Header'
import List from '../../components/List'
import Item from '../../components/Item'
import s from '../../styles/Media.module.sass'


const Media = () => {
    return (
        <>
            <Header isNavlinks={false} />
            <div className={s.gallery}>
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


export default Media