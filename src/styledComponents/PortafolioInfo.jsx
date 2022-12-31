import React from "react";
import styled, { css } from "styled-components";
import { device, fonts, colors } from "./config";
import { motion } from "framer-motion";

import bannerImg from "../images/banner.jpg";

const PortafolioInfo = styled.main`
  ${fonts.text}
  height: auto;
  transition: height 0.8s, opacity 0.8s;

  @media ${device.tablet} {
    position: absolute;
    width: 70%;
    right: 0;
    margin: 0;
  }
`;
const section = css`
  transform-style: preserve-3d;
  position: relative;
  height: 100vh;
  text-align: center;
`;

const Header = styled.header`
  ${section}
  background-image: url(${bannerImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 3rem;
`;
const Title = styled.h1`
  ${fonts.title}
  color: ${colors.primary};
  align-self: center;
  padding-top: 4rem;
  padding-bottom: 8rem;
  position: relative;
  text-align: center;
  min-width: 14rem;
  font-size: 5rem;

  &::after {
    position: absolute;
    content: "";
    bottom: 6rem;
    display: block;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 1rem;
    width: 100%;
    background-color: ${colors.secondary};
  }
`;
const IconImg = styled.img`
  width: 7rem;
`;

const Icons = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 3rem;
  column-gap: 9rem;
  max-width: 70rem;

  span:last-child {
    grid-column: 1/3;
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    span:last-child {
      grid-column: 3/4;
    }
  }
`;

const Info = styled(motion.section)`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2.7rem;
  padding-right: 2.7rem;
  color: ${colors.gray};
  line-height: 4.5rem;
  margin-bottom: 3rem;
`;

const CardsProjects = styled.div`
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
    column-gap: 5rem;
  }
`;

export { PortafolioInfo, Header, Info, Title, Icons, IconImg, CardsProjects };
