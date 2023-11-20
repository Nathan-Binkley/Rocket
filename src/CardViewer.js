import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import RestaurantCard from "./RestaurantCard";

function CardViewer({ restaurants }) {
    // console.log("In Card Viewer", restaurants)
    let restaurantCards = [];
    for (let i = 0; i < restaurants.length; i++){
        restaurantCards.push(
        <MDBCol sm='12' md='6' lg='4' xl='3'>
            <RestaurantCard key={restaurants[i].id} restaurant={restaurants[i]}></RestaurantCard>
        </MDBCol>
        )
    }
  return (
    <MDBRow>
        {restaurantCards}
    </MDBRow>
  );
}

export default CardViewer;