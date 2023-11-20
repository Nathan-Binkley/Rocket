import './index.css';
import CardViewer from './CardViewer';
import { useState, useEffect } from 'react';


let dummyRestaurants = [
    { "name" : "Dummy Restaurant 1", "description" : "This is a dummy restaurant description", "cuisine" : "American",  },
    { "name" : "Dummy Restaurant 2", "description" : "This is a dummy restaurant description", "cuisine" : "Italian" },
    { "name" : "Dummy Restaurant 3", "description" : "This is a dummy restaurant description", "cuisine" : "Mexican" },
    { "name" : "Dummy Restaurant 4", "description" : "This is a dummy restaurant description", "cuisine" : "Barbeque" },
];

function Nearby() {
    
    useEffect(() => {
        loadRestaurants()
    }, [])

    const[restaurantsList, setRestaurantsList] = useState(dummyRestaurants);
    
    const nearbyList = [
        ];
    
    async function loadRestaurants() {
        fetch("http://localhost:8080/all_restaurants")
        .then((response) => response.json())
        .then((data) => {
            console.log("RESTAURANTS DATA", data);
            setRestaurantsList(data);
        });
    }
   
    // console.log('RESTAURANTS', restaurantsList);
    nearbyList.push(<CardViewer restaurants={restaurantsList}></CardViewer>);
        
    
    // console.log(
    //     'PROCESSSED RESTAURANTS',
    //     restaurantsList,
    //     nearbyList
    //     )
    if (nearbyList.length === 0) {
        nearbyList.push(<p>There are no restaurants nearby</p>);
    }
    return (
    <>
        <p>Here is everything nearby</p>
        {nearbyList}
    </>
    );
  }

  
  export default Nearby;