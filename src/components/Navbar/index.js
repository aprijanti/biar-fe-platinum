import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import React from "react";
import "./style.css"
import Button from "../Button/index";

const Navbar = () => {
    const isLogin = localStorage.getItem("token");
    return (
            <div className="nav">
                <img src={Logo} alt='nav-logo' />
                <div className="nav-link">
                    <Link to ="/">Home</Link>
                    <Link to ="/">Our Service</Link>
                    <Link to ="/">Why Us</Link>
                    <Link to ="/">Testimonial</Link>
                    <Link to ="/">FAQ</Link>
                    {isLogin ? <Button klikLogOut={() => {
                        window.localStorage.removeItem("token")
                        window.location.reload()
                    }} text="Log Out"></Button> : <Link to="/signup"><Button text="Register"></Button></Link>}
                </div>
            </div>
            )
        }

export default Navbar;