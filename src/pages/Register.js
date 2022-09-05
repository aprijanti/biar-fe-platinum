import Grid from "@mui/material/Grid"
import Logo from "../assets/logo.png";
import React from "react";

const Register = () => {
    return (
        <div className="register">
            <Grid container>
                <Grid item xl={6} xs={12}>
                    <img src={Logo} alt='nav-logo' />
                    KANAN
                </Grid>
                <Grid item xl={6}>
                    KIRI
                </Grid>
            </Grid>
        </div>
    )
}

export default Register;