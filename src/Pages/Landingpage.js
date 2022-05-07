import React from "react";
import "../utils/css/landingpage.css";

import Navbar from "../components/LandingPage/Navbar";
import CreateAccount from "../components/LandingPage/CreateAccount";
import WhatisIconicli from "../components/LandingPage/WhatisIconicli";
import YellowDots from "../components/LandingPage/YellowDots";
import BookInstantly from "../components/LandingPage/BookInstantly";
import HowItWorks from "../components/LandingPage/HowItWorks";
import Pricing from "../components/LandingPage/Pricing";
import WhyJoin from "../components/LandingPage/WhyJoin";
import WhatSay from "../components/LandingPage/WhatSay";
import BottomInfo from "../components/LandingPage/BottomInfo";

import { Box, Typography } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

//TODO:rewrite all the css file into className selector
//TODO:rewrite all the css file, make the css file as neat as possible
//TODO:delete the yellow dots and what is title and rewrite it into whatis component

const Landingpage = () => {
	return (
		<StyledEngineProvider injectFirst>
			<Box >
				<Box>
					<CreateAccount />
					<YellowDots props={{ left: "145px", top: "765px" }} />
					<Typography className="whatisiconicli">What is ICONICLI?</Typography>
					<WhatisIconicli props={{ left: "177px", top: "941px" }} />
					<BookInstantly />
					<HowItWorks />
					<Pricing />
					<WhyJoin />
					<WhatSay />
					<BottomInfo/>
				</Box>
				<Navbar />
			</Box>
		</StyledEngineProvider>
	);
};

export default Landingpage;
