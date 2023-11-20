import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
  } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

import baseImage from './dummy_image.png';


function RestaurantCard({restaurant}) {
  // console.log("In Resturant Card", restaurant)
  return (
        <MDBCard>
          <MDBCardImage src={baseImage} position='top' alt='Restaurant Image Here' />
          <MDBCardBody>
              <MDBCardTitle>
                {restaurant.name}
              </MDBCardTitle>
              <MDBCardText>
                {restaurant.description}
              </MDBCardText>
              <MDBCardText>
                Cuisine: {restaurant.cuisine}
              </MDBCardText>
              <Button href='#'>
                Select Restaurant
              </Button>
          </MDBCardBody>
        </MDBCard>
    );
  }


export default RestaurantCard;