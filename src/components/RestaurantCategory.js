import NestedCategory from "./NestedCategory";
import { useState } from "react";

const RestaurantCategory = ({categories}) => {
    const [showIndex,setShowIndex] = useState(0);

    // console.log(categories);
    // console.log(categories[0].card.card.categories[0].itemCards.length);
    return(
        <>
            <div className="bg-gray-100 h-4 rounded-sm mt-6"></div>
            <div className="p-4">
            {categories.map((category, index)=>{

               return ( 
                <>
                    <h1 className="font-bold text-lg">{category?.card?.card?.title}</h1>
                    <NestedCategory
                    nestedCategory={category?.card?.card}
                    showItems = {index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                     />
                    <div className="bg-gray-100 h-4 rounded-sm mt-6 mb-3"></div>
                </>
            )
            })}
            </div>
        </>
    )
}

export default RestaurantCategory;