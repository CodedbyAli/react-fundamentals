import React from 'react';
import ReactDOM from 'react-dom/client';


// Different ways to create a Functional Component
    const HeadingComponent = () => <h1 className='FirstName'>My First name is Ali</h1>

    const NameComponent = () => {return <h2 className='LastName'>My Last name is Hamza</h2>}

    const DesignationComponent = () => (
        <h3>I am a Software Engineer and I have studied {degree}</h3>
    )

    const degree = <span>Bachelor's in Computer Sciences</span>

    const Container = () => (
        <>
        {/* Three Ways to call a Functional Component */}
            <HeadingComponent />
            <NameComponent></NameComponent>
            {DesignationComponent()}
        </>
    )


    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<Container />);