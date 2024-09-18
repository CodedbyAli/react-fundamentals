import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/restaurantList";
import { useState } from "react";


const Body = () => {

    const [restaurantList,setRestaurantList] = useState(resList);
    const [isClicked,setIsClicked] = useState(false);

return(
    <>
        <hr className='shadow-2xl border border-b-2 mb-4'></hr>
        <h1 className='font-mono text-3xl font-bold text-center mb-4 underline'>Restaurants</h1>
        <button className={`${isClicked ? 'bg-black text-white' : ''} px-4 py-2 border border-black rounded-lg font-bold font-mono mb-2`} onClick={() => {
            let filteredRes = restaurantList.filter((res) => res.avg_rating > 4 && res.no_of_rating > 1000);
            isClicked ? setRestaurantList(resList) : setRestaurantList(filteredRes)
            setIsClicked(!isClicked);
        }}>
        Top Rated</button>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
            {
                restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resList={restaurant} />
                ))
            }
            </div>
        </div>
    </>
)}

export default Body;