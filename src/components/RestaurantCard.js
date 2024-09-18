const RestaurantCard = (props) => {
    const {name,cuisine,avg_rating,no_of_rating,imgSrc} = props.resList
    return(
    <div className='w-full border rounded-xl mx-auto hover:shadow-xl'>
        <div>
            <img className='rounded-t-xl mb-2' src={imgSrc ? 'https://place-hold.it/400x225' : imgSrc} />
        </div>
        <div className='px-2 flex justify-between'>
            <h3 className='font-bold'>{name}</h3>
            <p className='text-sm'>{`${avg_rating} (${no_of_rating})`}</p>
        </div>
        <p className='text-xs text-gray-500 px-2 font-medium mb-2'>{cuisine}</p>
    </div>
)}

export default RestaurantCard;