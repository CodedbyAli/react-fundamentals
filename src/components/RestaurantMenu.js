import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu = async () => {
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6110886&lng=77.2345184&restaurantId=26719')
        const json = await data.json();
        setResInfo(json?.data);
    }

    if (resInfo === null) return <Shimmer /> 

    const {name,avgRating,totalRatingsString,costForTwoMessage,cuisines,sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
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
                    <div className="bg-gray-100 h-4 rounded-sm mt-6"></div>
                    <div className="p-4">
                        <h1 className="font-bold text-lg">Recommended ({itemCards.length})</h1>
                        {itemCards.map((item) => (
                            <div className="mt-4 flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-black/70">{item.card.info.name}</p>
                                    <p className="font-semibold mb-2"> ${item.card.info.price / 100}</p>
                                    <p className="font-semibold text-sm text-green-800"> {`${item.card.info.ratings.aggregatedRating.rating}`} <span className="text-black/70">({item.card.info.ratings.aggregatedRating.ratingCountV2})</span></p>
                                    <p className="mt-2 text-black/60">{item.card.info.description}</p>
                                </div>
                                <div>
                                    <img className="w-40 h-40 rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestaurantMenu