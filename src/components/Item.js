import "./Item.css"
import { Link } from "react-router-dom"
    
const Item = function ({ id, name, image, price, discount }) {
    return (
            <div class="row row-cols-1 row-cols-md-4 g-4 item-container">
                <div class="col">
                    <div class="card ">
                    <img src={image} class="card-img-top" alt="..." ></img>
                    <div class="card-body">
                        <Link to={`${id}`}>
                            <h5 class="card-title">{name}</h5>
                        </Link>
                        <p class="card-text">{discount} discount</p>
                        <h5 class="card-text">$ {price}   </h5>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Item