import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/constants";

const Body = () => {

    const [restaurantList,setRestaurantList] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    const [isClicked,setIsClicked] = useState(false);
    const [searchText,setSearchText] = useState('');


    function HandleSearch (){
        let searchedRestaurants = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredRestaurant(searchedRestaurants);
    }

    const fetchData = async () => {
        const data = await fetch(RES_API);
        json = await data.json();

        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchData();
    },[]);

    // console.log(restaurantList);
return restaurantList.length === 0 ? (<Shimmer />) : (
    <>
        <h1 className='font-mono text-3xl font-bold text-center mb-4 underline'>Restaurants</h1>
        <div className="flex justify-between" >
            <div className="flex items-center">
                <input
                type="text"
                value={searchText} 
                onChange={(e) => {setSearchText(e.target.value)}} 
                className="border border-black rounded-l-md p-1" 
                placeholder="Search..." />
                <button className="px-2 py-1 bg-black/80 border border-black text-white rounded-r-md font-bold font-mono" 
                onClick={() => {HandleSearch()}}>Search</button>
            </div>
            <button className={`${isClicked ? 'bg-black/70 text-white' : ''} px-4 py-2 border border-black rounded-lg font-bold font-mono mb-2`} 
            onClick={() => {
                let filteredRes = restaurantList.filter((res) => res.info.avgRating > 4.5);
                isClicked ? setFilteredRestaurant(restaurantList) : setFilteredRestaurant(filteredRes)
                setIsClicked(!isClicked);
            }}>
            Top Rated</button>
        </div>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-4 gap-6'>
            {
                filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={`restaurant/${restaurant.info.id}`}>
                        <RestaurantCard  resList={restaurant} />
                    </Link>
                ))
            }
            </div>
        </div>
    </>
)}

export default Body;