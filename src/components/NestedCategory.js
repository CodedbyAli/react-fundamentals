import NestedItemList from "./NestedItemList";

const NestedCategory = ({nestedCategory,showItems,setShowIndex}) => {

    const {categories} = nestedCategory;
    // console.log('Ali',showItems);

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <>
            {categories.map((category)=>(
                <>
                <button onClick={handleClick} className="w-full p-0 border-none bg-transparent">
                    <div className="flex justify-between items-center cursor-pointer mb-2">
                        <h2 className="text-md font-semibold mt-2">{category?.title} ({category?.itemCards?.length})</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-6 ${showItems ? 'rotate-180' : ''}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </button>
                { showItems && <NestedItemList itemCards={category.itemCards} />}
                <hr className="border-zinc-400 mt-4"/>
                </>
            ))}
        </>
    )
}

export default NestedCategory;