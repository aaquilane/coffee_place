import './ItemListContainer.css'
import Item from "./Item"

const ItemListContainer = function ({ greeting, itemlist }) {

    const category_items = itemlist.category_items;
    // console.log ("itemlist", category_items);

    // return(
    //     <div>
    //         <div className="itemlist-container">
    //             <h5>{greeting}</h5>
    //         </div>
    //         <div>
    //             const arr=category_items.map( ({ eachitem}) => 
    //                 (
    //                     <Item key={eachitem.id} name={eachitem.name} image={eachitem.image} price={eachitem.price} discount={eachitem.discount} />
    //                 )
    //             );
    //         </div>
    //     </div>
    // )

    // return category_items.map(({ id, name, image, price, discount }) => (
    //     <Item key={id} name={name} image={image} price={price} discount={discount} />
    //   ));

      return category_items.map((eachitem) => (
        <Item key={eachitem.id} id={eachitem.id}  name={eachitem.name} image={eachitem.image} price={eachitem.price} discount={eachitem.discount} />
      ));
}

export default ItemListContainer