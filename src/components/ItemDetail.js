import "./ItemDetail.css"
import React from "react";
import { useParams } from "react-router-dom";


const ItemDetail = function ({ data }) {
    let id = useParams();
    // console.log ("cada id parte de la url:", id.id);

    const myitem = data.category_items.find(myitem => myitem.id === id.id); //Devuelve un objeto con el item en particular
    // console.log ("cada item:", myitem);

    return (
            <div class="row row-cols-1 row-cols-md-12 g-12   item-container">
                <div class="col">
                    <div class="card ">
                    {/* <img src={myitem.image} class="card-img-top" alt="..." ></img> */}
                    <div class="card-body">
                        <h2 class="card-title">{myitem.name}</h2>
                        <h5 class="card-text">{myitem.description} discount</h5>
                        <h5 class="card-text">$ {myitem.price}   </h5>
                        <p class="card-text">{myitem.discount} discount  - Original price ${myitem.original_price}</p>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default ItemDetail