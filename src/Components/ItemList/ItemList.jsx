import "./itemList.scss"
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <div className="listItems">
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList
