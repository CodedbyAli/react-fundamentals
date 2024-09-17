import React from 'react';
import ReactDOM from 'react-dom/client';


const heading = React.createElement(
    'h1',
    {
        id: "title",
        style: {
            color: 'blue',
        }
    },
    'Ali Hamza'
   )

    const heading2 = React.createElement(
        'h2',
        {
            id: "title"
        },
        'Its Pleasure to Meet You'
    )

    const container = React.createElement(
        'div',
        {
            id: "container"
        },
        [heading,heading2]
    )

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(container);