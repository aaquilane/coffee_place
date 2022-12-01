import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function HeaderApp(){
    return (
        <div className="HeaderApp">
        {/* <h1> Coffee Place</h1> */}
        {/* <nav class="navbar bg-light"> */}
            <nav class="navbar header-container">
                {/* <div class="container-fluid "> */}
                    <a class="navbar-brand" href="#">
                    { <img src="./images/logocoffee.png"  alt="" width="60" height="60" class="d-inline-block align-text-top"></img> }
                    </a>
                    <h2 class="header-container">Coffee Place</h2>

                {/* </div> */}
            </nav>
        </div>
        )
    };

export default HeaderApp;