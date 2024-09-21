import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return(
        <>  
            <h1 className="font-mono font-bold text-3xl">Opps!!! Something Went Wrong</h1>
            <p className="text-2xl font-mono font-bold">{err.status}: {err.statusText}</p>
        </>
    )
}

export default Error;