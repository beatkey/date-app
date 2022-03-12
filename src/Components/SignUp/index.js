import up from 'Assets/Images/Login Screen.jpg';

function SignUp() {
    return (
        <div className="Login">
            <img className="-mt-7" src={up} alt=""/>
            <h1 className="text-2xl text-center font-bold mt-4">Welcome! <br/> We glad to see you.</h1>
            <form action="" className="flex flex-col m-10">
                <div className="mb-5">
                    <input type="text" placeholder="E-Mail" className="w-full"/>
                </div>
                <div className="mb-5">
                    <input type="text" placeholder="Password" className="w-full"/>
                </div>
                <div>
                    <select className="w-full">
                        <option>Gender</option>
                    </select>
                </div>
            </form>
            <div className="mt-10 flex flex-col text-center">
                <div>
                    <button className="LoginButton">
                        Register
                    </button>
                </div>
                <p className="my-4 font-light">You already have an account? <a href="/" className="font-medium">Login</a></p>
            </div>
        </div>
    );
}

export default SignUp
