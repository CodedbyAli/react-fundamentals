import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const params = useParams();
    
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu = async () => {
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6110886&lng=77.2345184&restaurantId='+params.resId)
        const json = await data.json();
        setResInfo(json?.data);
    }

    if (resInfo === null) return <Shimmer /> 

    const {name,avgRating,totalRatingsString,costForTwoMessage,cuisines,sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

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
                                    <p className="font-bold text-black/70">{item?.card?.info?.name}</p>
                                    <p className="font-semibold mb-2"> ${item?.card?.info?.price / 100}</p>
                                    <div className="flex items-center space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-700 fill-green-700">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                        <p className="font-semibold text-sm text-green-800"> {`${item?.card?.info?.ratings?.aggregatedRating?.rating}`} <span className="text-black/70">({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span></p>
                                    </div>
                                    <p className="mt-2 text-black/60">{item?.card?.info?.description}</p>
                                </div>
                                <div>
                                    <img className="w-40 h-40 rounded-lg object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} />
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