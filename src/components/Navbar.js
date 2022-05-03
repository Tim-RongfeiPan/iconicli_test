import React,  {Component} from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

import ICONICLI_LOGO from "../utils/images/ICONICLI_LOGO.png";



const Navbar = () => {
    const typostyle = {
        position: "static",
        top: "0%",
        bottom: "0%",

        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",

        color: "#1F0045",

        fontFamily: "Poppins",
        flex: "none",
        flexGrow: "0",
        margin: "0px 3%",
    };

    const Navbar_Login_text = {
        position: "static",
        width: "60px",
        height: "19px",
        left: "16px",
        top: "10.5px",

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "18.75px",
        /* identical to box height */

        color: "#1f0045",

        /* Inside auto layout */

        flex: "none",
        order: "0",
        flexGrow: "0",
        margin: "0px 10px",
    };

    const Navbar_Signup_text = {
        position: "static",
        width: "65px",
        height: "19px",
        left: "16px",
        top: "10.5px",

        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "18.75px",
        /* identical to box height */

        color: "#ffffff",

        /* Inside auto layout */

        flex: "none",
        order: "0",
        flexGrow: "0",
        margin: "0px 10px",
    };

    return (
        <React.Fragment>
            <Box className="NavbarHeader">
                <Box className="NavbarRectangle"></Box>
                <img src={ICONICLI_LOGO} className="LandingLogo" />
                <Box className="NavbarMenu">
                    <Typography
                        style={typostyle}
                        sx={{
                            order: "0",
                            left: "0%",
                            right: "87.43%"
                        }}
                    >
                        BENIFITS
                    </Typography>
                    <Typography
                        style={typostyle}
                        sx={{
                            order: "1",
                            left: "17.38%",
                            right: "70.89%"
                        }}
                    >
                        PRICING
                    </Typography>
                    <Typography
                        style={typostyle}
                        sx={{
                            order: "2",
                            left: "33.83%",
                            right: "44.36%"
                        }}
                    >
                        HOW IT WORKS
                    </Typography>
                    <Typography
                        style={typostyle}
                        sx={{
                            order: "3",
                            left: "60.44%",
                            right: "33.64%"
                        }}
                    >
                        FAQ
                    </Typography>
                    <Typography
                        style={typostyle}
                        sx={{
                            order: "4",
                            left: "71.16%",
                            right: "19.04%"
                        }}
                    >
                        ABOUT
                    </Typography>
                    <Typography
                        style={typostyle}
                        sx={{
                            order: "5",
                            left: "85.77%",
                            right: "0%"
                        }}
                    >
                        CONTACT
                    </Typography>
                </Box>
                <Box className="Navbar_Login">
                    <Typography style={Navbar_Login_text}>Log in</Typography>
                </Box>
                <Box className="Navbar_Signup">
                    <Typography style={Navbar_Signup_text}>Sign up</Typography>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Navbar;
