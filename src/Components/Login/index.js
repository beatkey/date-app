import up from 'Assets/Images/Login Screen.jpg';

function Login() {
    return (
      <div className="Login">
          <img src={up} alt=""/>
          <h1 className="text-2xl text-center font-bold mt-10">Welcome! <br/> We glad to see you.</h1>
          <form action="" className="flex flex-col m-10">
              <div className="mb-5">
                  <input type="text" placeholder="E-Mail" className="w-full"/>
              </div>
              <div>
                  <input type="text" placeholder="Password" className="w-full"/>
              </div>
          </form>
          <button>

          </button>
      </div>
    );
}

export default Login
