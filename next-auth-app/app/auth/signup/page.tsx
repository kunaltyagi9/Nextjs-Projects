


const Signup = () => {

    return (
        <div className="w-1/3 flex flex-col m-auto pt-20">
            <form className="grid grid-col-1 gap-8 shadow border rounded-md p-4">
                <input 
                    type="text" 
                    placeholder="Enter name" 
                    className="border p-3 rounded-md focus:outline-none"
                />
                <input 
                    type="email" 
                    placeholder="Enter Email" 
                    className="border p-3 rounded-md focus:outline-none"
                />
                <input 
                    type="password" 
                    placeholder="Enter Password" 
                    className="border p-3 rounded-md focus:outline-none"
                />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    className="border p-3 rounded-md focus:outline-none"
                />
                <button 
                    className="bg-emerald-300 p-3 rounded-md"
                >Submit</button>
            </form>
        </div>
    )
}

export default Signup;