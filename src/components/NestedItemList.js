import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js"
import{ MENU_IMG } from "../utils/constants";

const NestedItemList = ({itemCards}) => {
    // console.log(itemCards);
    
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <>
            {itemCards.map((item) => (
                    <div key={item?.card?.info?.id} className="mt-4 items-center flex justify-between">
                        <div className="w-9/12">
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
                        <div className="w-2/12 relative">
                            <button className="bg-black text-white rounded-lg absolute px-4 py-2"
                            onClick={()=>handleAddItem(item)}
                            >Add +</button>
                            <img className="w-40 h-40 rounded-lg object-cover" src={`${MENU_IMG}/${item?.card?.info?.imageId}`} />
                        </div>
                    </div>
                ))}
        </>
    )
}

export default NestedItemList;