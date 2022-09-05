import {Navigate, Routes, Route, BrowserRouter} from 'react-router-dom';
import CarDetail from "../pages/CarDetail";
import CarList from "../pages/CarList";
import Home from "../pages/Home";
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Router = () => {
    const isLogin = localStorage.getItem("token");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={isLogin ? <Navigate to="/cars" /> : <SignIn /> } />
                <Route path="/cars/:id" element={isLogin ? <Navigate to="/cars/:id" /> : <SignIn />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;