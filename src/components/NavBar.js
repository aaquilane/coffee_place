import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import ItemDetail from "./ItemDetail"

import { Routes , Route, Link, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';


function NavBar({menu}){
    const mymenue = {menu};
    // console.log ( "navbar", mymenue.menu[0].category_name);

    return(
    <div>
        <div className="NavBar"> 
            {/* <h4> This is the navigation bar with food categories</h4> */}
            <nav class="navbar navbar-expand-lg navbar-container" >
                {
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
                            <div class="navbar-nav">
                                {/* <a class="nav-link active" aria-current="page" href="#">{mymenue.menu[0].category_name}</a>
                                <a class="nav-link" href="#">{mymenue.menu[1].category_name}</a> */}
                                <Link to="/sandwiches">
                                    <p class="nav-link" aria-current="page" >{mymenue.menu[0].category_name}</p>
                                </Link>
                                <Link to="/salads">
                                    <p class="nav-link" >{mymenue.menu[1].category_name}</p>
                                </Link>
                                <Link to="/juices">
                                    <p class="nav-link" >{mymenue.menu[2].category_name}</p>
                                </Link>
                            </div>
                        </div>
                        <CartWidget/>
                        
                    </div>
                }
            </nav>
        </div>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Enjoy our variety of sandwiches"} itemlist={mymenue.menu[0]} />} />
            <Route path="/sandwiches" element={<ItemListContainer greeting={"Enjoy our variety of sandwiches"} itemlist={mymenue.menu[0]} />} />
            <Route path="/sandwiches/:id" element={<ItemDetail data={mymenue.menu[0]} />} />
            <Route path="/salads" element={<ItemListContainer greeting={"Enjoy our variety of salads"} itemlist={mymenue.menu[1]} />} />
            <Route path="/salads/:id" element={<ItemDetail data={mymenue.menu[1]} />} />
            <Route path="/juices" element={<ItemListContainer greeting={"Enjoy our variety of juices, smoothies & milkshakes"} itemlist={mymenue.menu[2]} />} />
            <Route path="/juices/:id" element={<ItemDetail data={mymenue.menu[2]} />} />
            <Route path="*" element={<Navigate to="/" />} />

            {/* 
            <ItemListContainer greeting={"Enjoy our variety of sandwiches"} itemlist={mymenue.menu[0]}/> 
            <ItemListContainer greeting={"Enjoy our variety of salads"} itemlist={mymenue.menu[1]}/>  
            */}
        </Routes>
    </div>
    )
}

export default NavBar