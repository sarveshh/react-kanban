import React, { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  BannerImg,
} from "./HeroStyles";
import { SquaredButtonWithLink, SquaredButton } from "../ButtonElements";
import banner from "../../../images/banner.png";
import { Box } from "@mui/material";
const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroH1>Plan. Win. Celebrate</HeroH1>
        <HeroP>If you fail to plan, you plan to fail.</HeroP>
        <HeroBtnWrapper>
          <SquaredButton
            to="https://github.com/sarveshh/spofity"
            primary={true.toString()}
            dark="true"
          >
            <a
              href="https://github.com/sarveshh/spofity"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              View on Github
            </a>
          </SquaredButton>
          <SquaredButtonWithLink
            to="SignUp"
            onMouseEnter={onHover}
            background="#25282c"
            onMouseLeave={onHover}
            dark="true"
            smooth={true.toString()}
            duration={500}
            spy={true.toString()}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </SquaredButtonWithLink>
        </HeroBtnWrapper>
        <Box display="flex" justifyContent="center" alignItems="center" m={4}>
          <BannerImg src={banner} alt="" width="80%" />
        </Box>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
