import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantRecommended from "./RestaurantRecommended";

const RestaurantMenu = () => {

    const params = useParams();
    
    const resInfo = useRestaurantMenu(params.resId);

    if (resInfo === null) return <Shimmer /> 

    const {name,avgRating,totalRatingsString,costForTwoMessage,cuisines,sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    // console.log(itemCards);

    return (
        <>
            <div className="max-w-5xl mx-auto">
                <div>
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <div className="my-4 ring-1 ring-gray-200 rounded-xl p-4 shadow-lg">
                        <p className="font-bold mb-1">{`⭐${avgRating} (${totalRatingsString}) - ${costForTwoMessage}`}</p>
                        <p className="font-bold text-red-500 underline text-sm mb-2">{cuisines.join(", ")}</p>
                        <p className="text-sm font-bold">Outlet - <span className="text-sm lowercase">{sla.slaString}</span></p>
                    </div>
                    <RestaurantRecommended itemCards={itemCards} />
                    <RestaurantCategory categories={categories} />
                </div>
            </div>
        </>
    )
}

export default RestaurantMenu