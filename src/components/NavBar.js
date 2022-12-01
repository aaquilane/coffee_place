import CartWidget from "./CartWidget"
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar(){
    return(
        <div className="NavBar"> 
            {/* <h4> This is the navigation bar with food categories</h4> */}
            <nav class="navbar navbar-expand-lg bg-light" >
                {<div class="container-fluid">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">BREAKFAST</a>
                            <a class="nav-link" href="#">SANDWICHES</a>
                            <a class="nav-link" href="#">SALADS & WRAPS</a>
                            <a class="nav-link" href="#">COFFEES & TEAS</a>
                            <a class="nav-link" href="#">PASTRY & BAKERY</a>
                            <a class="nav-link" href="#">BEVERAGES</a>
                        </div>
                    </div>
                    <CartWidget/>
                </div>}
            </nav>
        </div>

    )
}

export default NavBar