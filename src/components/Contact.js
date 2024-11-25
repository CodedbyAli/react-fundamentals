const Contact = () => {
    return(
        <>
            <h1 className="font-mono text-center font-bold text-3xl">Contact Page</h1>
            <form className="p-4 border border-black rounded-md flex justify-center mt-6">
                <input type="text" placeholder="name" className="rounded-lg border border-black p-2 m-2" />
                <input type="email" placeholder="email" className="rounded-lg border border-black p-2 m-2"/>
                <button type="submit" className="bg-black rounded-lg text-white p-2 m-2">Submit</button>
            </form>
        </>
    )
}
export default Contact;