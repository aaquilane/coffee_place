import "./Home.css"
import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"

function HomeApp(){
    return (
        <div className="HomeApp">
            <div className="home-container">
                <div>
                    <h5>Breakfast, lunchs, snacks and dinners made with love</h5>
                    <h6>We are open every day, 11am - 7pm</h6>
                    <h6>701 S Miami Ave, Miami - (786) 333-2222</h6>
                </div>
               
            </div>
            <NavBar/>
            <ItemListContainer greeting={"Enjoy our variety of tasty and healthy food"}/> 

        </div>
    )
}
export default HomeApp;