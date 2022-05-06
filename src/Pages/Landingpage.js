import React from "react";
import Navbar from "../components/Navbar";
import CreateAccount from "../components/CreateAccount";
import WhatisIconicli from "../components/WhatisIconicli";
import YellowDots from "../components/YellowDots";
import BookInstantly from "../components/BookInstantly";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import { Box, Typography, Button } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import { StickyContainer, Sticky } from "react-sticky";

import "../utils/css/landingpage.css";
//TODO:rewrite all the css file into className selector
//TODO:rewrite all the css file, make the css file as neat as possible
//TODO:delete the yellow dots and what is title and rewrite it into whatis component

const Landingpage = () => {
	return (
		<StyledEngineProvider injectFirst>
			<Box className="landingpages">
				<Box className="content">
					<CreateAccount />
					<YellowDots props={{ left: "145px", top: "765px" }} />
					<Typography className="whatisiconicli">What is ICONICLI?</Typography>
					<WhatisIconicli props={{ left: "177px", top: "941px" }} />
					<BookInstantly />
					<HowItWorks />
					<Pricing />
				</Box>
				<Navbar />
			</Box>
		</StyledEngineProvider>
	);
};

export default Landingpage;
