import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import LandingPage from "../assets/landingpage.png";
import TextField from "@mui/material/TextField";
import "./Registration.css";

const SignUp = () => {
    const api = "https://bootcamp-rent-car.herokuapp.com/customer/auth/register"
    let [nama, setNama] = useState();
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();

    const klikRegister = async() => {
        try {
            let data = await window.fetch(api,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                }),
            })
        } catch (error) {
            
        }
    }

    return (
        <div className="login">
            <div className="login-form">
                <div className="form">
                    <img src={Logo} alt='nav-logo' />
                    <h3>Welcome Back!</h3>
                    <p>Name</p>
                    <TextField onChange={(e) => setNama(e.target.value)} id="name" label="Nama Lengkap" variant="outlined" style={{width: 370}} />
                    <p>Email</p>
                    <TextField onChange={(e) => setEmail(e.target.value)} id="email" label="Contoh: aprijanti@gmail.com" variant="outlined" style={{width: 370}} />
                    <p>Password</p>
                    <TextField onChange={(e) => setPassword(e.target.value)} id="password" label="6+ karakter" variant="outlined" style={{width: 370}} />
                    <br/>
                    <button className="button-registration" onClick={klikRegister}>Sign Up</button>
                    <p style={{textAlign: "center"}}>Already have an account? <Link to="/signin">Sign In here</Link></p>
                </div>
            </div>
            <div className="login-landing">
                <h1>Binar Car Rental</h1>
                <img src={LandingPage} alt="landing-page" />
            </div>
        </div>
    )
}

export default SignUp;