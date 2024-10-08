import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const About = lazy(() => import('./components/About'));

const AppLayout = () => {
    return(
        <>
            <div className='max-w-7xl mx-auto' id='layout'>
                <Header />
                <Outlet />
            </div>
        </>
    )
}
    
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,
            children: [
                {
                    path: '/',
                    element: <Body />
                },
                {
                    path: '/about',
                    element: (
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <About />
                        </Suspense>
                    ),
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: '/restaurant/:resId',
                    element: <RestaurantMenu />
                },
            ],
            errorElement: <Error />
        }
        
    ])

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<RouterProvider router={appRouter} />);