import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
        }
        // console.log("Child Constructor()");

    }
    
    componentDidMount(){
        // console.log("Child ComponentMount()");
    }

    render() {
        const {name,country,designation} = this.props
        const {count} = this.state;
        return(
            <>
                <div className="flex items-center space-x-2">
                    <button className="px-2 border border-black bg-zinc-300 font-bold rounded-md" onClick={()=>{
                        this.setState({
                            count: this.state.count - 1,
                        })
                    }}>-</button>
                    <p>{count}</p>
                    <button className="px-2 border border-black bg-zinc-300 font-bold rounded-md" onClick={()=>{
                        this.setState({
                            count: this.state.count + 1,
                        })
                    }}>+</button>
                </div>
                <h1>Name: {name}</h1>
                <h2>Country: {country}</h2>
                <h3>Designation: {designation}</h3>
            </>
        )
    }
}

export default UserClass;