import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';


const AppLayout = () => {
    return(
        <>
            <div className='max-w-7xl mx-auto' id='layout'>
                <Header />
            </div>
            <hr className='shadow-2xl border border-b-2 mb-4'></hr>
            <h1 className='font-mono text-3xl font-bold text-center mb-4 underline'>Restaurants</h1>
            <Body />
        </>
    )
}


    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<AppLayout />);