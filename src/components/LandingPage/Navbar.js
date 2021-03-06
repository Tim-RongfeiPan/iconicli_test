import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { isMobile, isDesktop } from "react-device-detect";

import ICONICLI_LOGO from "../../utils/images/ICONICLI_LOGO.png";
import notch from "../../utils/images/Notch.svg"
import right from "../../utils/images/Right Side.svg"

import "../../utils/css/navbar.css";

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
	width: "45px",
	height: "19px",
	// left: "16px",
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
	width: "45px",
	height: "19px",
	// left: "16px",
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

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			path: window.location.pathname,
		};
	}
	setPath = (e) => {
		this.setState({
			path: e,
		});
	};

	render() {
		// console.log(isDesktop,isMobile);
		if (isDesktop)
			return (
				<Box className="NavbarHeader">
					<Box className="NavbarRectangle"></Box>
					<Button className="LandingLogo" component={Link} to="/" onClick={() => this.setPath("/")}>
						<img src={ICONICLI_LOGO} className="LandingLogoimg" />
					</Button>
					<Box className="NavbarMenu">
						<Typography
							style={typostyle}
							sx={{
								order: "0",
								left: "0%",
								right: "87.43%",
							}}>
							BENIFITS
						</Typography>
						<Typography
							style={typostyle}
							sx={{
								order: "1",
								left: "17.38%",
								right: "70.89%",
							}}>
							PRICING
						</Typography>
						<Typography
							style={typostyle}
							sx={{
								order: "2",
								left: "33.83%",
								right: "44.36%",
							}}>
							HOW IT WORKS
						</Typography>
						<Typography
							style={typostyle}
							sx={{
								order: "3",
								left: "60.44%",
								right: "33.64%",
							}}>
							FAQ
						</Typography>
						<Typography
							style={typostyle}
							sx={{
								order: "4",
								left: "71.16%",
								right: "19.04%",
							}}>
							ABOUT
						</Typography>
						<Typography
							style={typostyle}
							sx={{
								order: "5",
								left: "85.77%",
								right: "0%",
							}}>
							CONTACT
						</Typography>
					</Box>
					<Box className="Navbar_Login">
						<Button
							component={Link}
							to="/login"
							style={Navbar_Login_text}
							onClick={() => this.setPath("/login")}>
							Log in
						</Button>
					</Box>
					<Box className="Navbar_Signup">
						<Button
							component={Link}
							to="/register"
							style={Navbar_Signup_text}
							onClick={() => this.setPath("/register")}>
							Sign up
						</Button>
					</Box>
				</Box>
			);
		else if (isMobile)
			return (
				<Box className="navbar">
					<Box className="rect"></Box>
					<Button className="left" component={Link} to="/" onClick={() => this.setPath("/")}>
						<Typography className="time">9:41</Typography>
					</Button>
					<Box className="midbox">
						<img src={notch} className="mid" />
					</Box>
					<Box className="right">
						<img src={right} />
					</Box>
				</Box>
			);
	}
}

export default Navbar;
