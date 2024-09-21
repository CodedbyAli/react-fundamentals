const RestaurantCard = (props) => {
    const {name,cuisines,avgRating,totalRatingsString,cloudinaryImageId,sla} = props.resList.info
    return(
    <div className='w-full border rounded-xl mx-auto hover:shadow-xl cursor-pointer'>
        <div>
            {/* <img className='rounded-t-xl mb-2' src={imgSrc ? 'https://place-hold.it/400x225' : imgSrc} /> */}
            <img className='rounded-t-xl mb-2 w-full h-[200px] object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
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