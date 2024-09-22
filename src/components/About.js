import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log('Parent Constructor()');
    }

    componentDidMount(){
        // console.log("Parent componentMount()");
        // Call the Api In this Function
    }

    render(){
        // console.log('Parent render()');
        return(
            <>
            <h1 className="font-mono text-center font-bold text-3xl">About Page</h1>
            <div>
                <UserClass name={"Ali Hamza"} country={"Pakistan"} designation={"React Engineer"} />
            </div>
            </>
        )
    }
}

export default About;