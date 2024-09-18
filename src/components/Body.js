import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/restaurantList";


const Body = () => (
    <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
        {
            resList.map((restaurant) => (
                <RestaurantCard key={restaurant.id} resList={restaurant} />
            ))
        }
        </div>
    </div>
)

export default Body;