import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';


const AppLayout = () => {
    return(
        <>
            <div className='max-w-7xl mx-auto' id='layout'>
                <Header />
                <Body />
            </div>
        </>
    )
}


    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<AppLayout />);