import { RES_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
    const {name,cuisines,avgRating,totalRatingsString,cloudinaryImageId,sla} = props.resList.info
    return(
    <div className='w-full border rounded-xl mx-auto cursor-pointer hover:scale-95 transition ease-in-out'>
        <div>
            {/* <img className='rounded-t-xl mb-2' src={imgSrc ? 'https://place-hold.it/400x225' : imgSrc} /> */}
            <img className='rounded-t-xl mb-2 w-full h-[200px] object-cover' src={`${RES_IMG}/${cloudinaryImageId}`} />
        </div>
        <div className='px-2 flex justify-between'>
            <h3 className='font-bold'>{name}</h3>
            <p className='text-sm'>{`${avgRating} (${totalRatingsString})`}</p>
        </div>
        <p className='text-xs text-gray-500 px-2 font-medium mb-2'>{sla.slaString}</p>
        <p className='text-xs text-gray-500 px-2 font-medium mb-2'>{cuisines.join(", ")}</p>
    </div>
)}

export default RestaurantCard;