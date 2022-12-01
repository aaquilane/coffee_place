import './ItemListContainer.css'
import Item from "./Item"


function ItemListContainer({greeting}){
    return(
        <div>
            <div className="itemlist-container">
                <h5>{greeting}</h5>
            </div>
            <Item/>
        </div>
    )
}

export default ItemListContainer