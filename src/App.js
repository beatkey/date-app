import { Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import './Assets/Css/Main.css';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="sign-up" element={<SignUp />} />
            </Routes>
        </div>
    );
}

export default App;
