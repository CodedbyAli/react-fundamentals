import React from 'react';
import ReactDOM from 'react-dom/client';


    const Logo = () => (
            <div>
                <img width={100} src='https://static.vecteezy.com/system/resources/previews/017/032/871/original/burger-logo-illustration-fast-food-logo-emblem-label-burger-vintage-design-business-burger-vector.jpg' />
            </div>
        )

    const NavItems = () => (
            <div>
                <ul className='flex font-mono font-bold text-xl space-x-4'>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Menu</li>
                    <li>Profile</li>
                </ul>
            </div>
        )

    const Header = () => (
        <div className='flex items-center justify-between'>
            <Logo />
            <NavItems />
        </div>
    )

    const RestaurantCard = () => (
        <div className='w-full border rounded-xl mx-auto hover:shadow-xl'>
            <div>
                <img className='rounded-t-xl mb-2' src='https://images.deliveryhero.io/image/fd-pk/LH/oqyq-listing.jpg?width=400&height=225' />
            </div>
            <div className='px-2 flex justify-between'>
                <h3 className='font-bold'>Amaltaas-Cantt</h3>
                <p className='text-sm'>4.9{" (15)"}</p>
            </div>
            <p className='text-xs text-gray-500 px-2 font-medium mb-2'>Pakistani</p>
        </div>
    )

    const RestaurantList = () => (
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )


    const AppLayout = () => {
        return(
            <>
                <div className='max-w-7xl mx-auto' id='layout'>
                    <Header />
                </div>
                <hr className='shadow-2xl border border-b-2 mb-4'></hr>
                <RestaurantList />
            </>
        )
    }


    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<AppLayout />);