import React, { Component, useState, useEffect } from "react";
import { Box, Typography, Button, Input } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { isMobile, isDesktop } from "react-device-detect";
import { Link } from "react-router-dom";

import Navbar from "../components/LandingPage/Navbar";

import history from "../history";

import google from "../utils/images/Google.svg";
import facebook from "../utils/images/FACEBOOK.svg";
import iconicli from "../utils/images/Path 1297.svg";
import { AddBox } from "@mui/icons-material";

const Loginpage = ({ props }) => {
	let navigate = useNavigate();
	let location = useLocation();
	const [path, setPath] = useState(window.location.pathname);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showError, setShow] = useState("none");
	if (location.state != null) {
		const [email, setEmail] = useState(location.state.email);
		const [password, setPassword] = useState(location.state.password);
		const [showError, setShow] = useState(location.state.showError);
	}

	useEffect(() => {
		if (location.state != null) {
			setShow(location.state.showError);
		}
	}, [showError]);

	const redirect = () => {
		navigate("/preload", { state: { email: email, password: password, showError: "inline" } });
	};
	if (isDesktop)
		return (
			<StyledEngineProvider injectFirst>
				<Box className="login">
					<Box>
						<Typography className="title">Log in to continue the journey </Typography>
						<Typography className="signuptext">
							If you are not a member yet, you can <a href="/register">sign up here!</a>
						</Typography>
						<Box className="purpleback"></Box>
						<Typography className="incorrect" style={{ display: showError }}>
							Email or password is incorrect, try again.
						</Typography>
						<Input
							type="text"
							disableUnderline
							autoComplete="off"
							className="email"
							placeholder="Enter Email"
							defaultValue={email}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input disableUnderline type="text" style={{ display: "none" }} />
						<Input type="password" style={{ display: "none" }} />
						<Input
							type="password"
							disableUnderline
							className="password"
							placeholder="Password"
							autocomplete="new-password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<Typography className="forgot">Forgot your password?</Typography>
						<Button
							className="button"
							onClick={() => {
								redirect();
							}}>
							<Typography className="text">LOG IN</Typography>
						</Button>

						<Button className="google">
							<img src={google} />
						</Button>
						<Typography className="google-text">Log in with Google </Typography>
						<Button className="facebook">
							<img src={facebook} />
						</Button>
						<Typography className="facebook-text">Log in with Facebook </Typography>
					</Box>
					<Navbar />
				</Box>
			</StyledEngineProvider>
		);
	if (isMobile)
		return (
			<StyledEngineProvider injectFirst>
				<Box className="login">
					<Box className="topbar">
						<img src={iconicli} />
						<Button className="light" component={Link} to="/login" onClick={() => setPath("/login")}>
							<Typography className="text" style={{ textTransform: "none" }}>
								Log in
							</Typography>
						</Button>
						<Box className="line1"></Box>
						<Box className="line2"></Box>
						<Box className="line3"></Box>
					</Box>
					<Typography className="intro">Log in to continue the journey!</Typography>
					<Typography className="incorrect" style={{ display: showError }}>
						Email or password is incorrect, try again.
					</Typography>
					<Input
						type="text"
						disableUnderline
						autoComplete="off"
						className="email"
						placeholder="Enter Email"
						defaultValue={email}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Input disableUnderline type="text" style={{ display: "none" }} />
					<Input type="password" style={{ display: "none" }} />
					<Input
						type="password"
						disableUnderline
						className="password"
						placeholder="Password"
						autocomplete="new-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Typography className="forgot">Forgot your password?</Typography>
					<Button
						className="button"
						onClick={() => {
							redirect();
						}}>
						<Typography className="text" style={{ textTransform: "none" }}>
							Log in
						</Typography>
					</Button>
					<Box className="continue">
						<Typography className="text">or continue with</Typography>
						<Box className="leftline"></Box>
						<Box className="rightline"></Box>
					</Box>
					<Button className="google">
						<img src={google} />
					</Button>
					<Typography className="google-text">Log in with Google</Typography>
					<Button className="facebook">
						<img src={facebook} />
					</Button>
					<Typography className="facebook-text">Log in with Facebook</Typography>
					<Typography className="signup">
						If you are not a member yet, you can <a href="/register">sign up here!</a>
					</Typography>
				</Box>
				<Navbar />
			</StyledEngineProvider>
		);
};

export default Loginpage;
