import up from 'Assets/Images/Login Screen.jpg';

function Login() {
    return (
      <div className="Login">
          <img className="-mt-7" src={up} alt=""/>
          <h1 className="text-2xl text-center font-bold mt-4">Welcome! <br/> We glad to see you.</h1>
          <form action="" className="flex flex-col m-10">
              <div className="mb-5">
                  <input type="text" placeholder="E-Mail" className="w-full"/>
              </div>
              <div>
                  <input type="text" placeholder="Password" className="w-full"/>
              </div>
          </form>
          <div className="mt-10 flex flex-col text-center">
              <div>
                  <button className="LoginButton">
                      Login
                  </button>
              </div>
              <p className="my-4">or</p>
              <div>
                  <button className="FacebookButton inline-flex items-center">
                      <svg width="18" height="18" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13 6.51629C13 2.9193 10.088 0 6.5 0C2.912 0 0 2.9193 0 6.51629C0 9.67017 2.236 12.2962 5.2 12.9023V8.47118H3.9V6.51629H5.2V4.88722C5.2 3.62957 6.2205 2.60652 7.475 2.60652H9.1V4.5614H7.8C7.4425 4.5614 7.15 4.85464 7.15 5.21303V6.51629H9.1V8.47118H7.15V13C10.4325 12.6742 13 9.89824 13 6.51629Z" fill="#E3DFFF"/>
                      </svg>
                      <span className="ml-2">Sign in with Facebook</span>
                  </button>
              </div>
              <p className="my-4 font-light">Don’t have an account? <a href="/sign-up" className="font-medium">Sign Up</a></p>
          </div>
      </div>
    );
}

export default Login
