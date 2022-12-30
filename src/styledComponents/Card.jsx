import React from "react";
import styled from "styled-components";
import { device, fonts, colors } from './config'


import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const Card = styled.div`
  max-width: 30rem;
  box-shadow: 10px 8px 5px rgba(0,0,0,0.3), inset 0 0 5px rgba(0,0,0,0.3);
    margin-bottom: 4rem;
`;

const CardImage = styled(LightGallery)`
    position: relative;
`;

const Lay = styled.div`
background-color: rgba(0,0,0,0.5);
position: absolute;
top: 0;
width: 200%;
height: 100%;
display: flex;
justify-content: center ;
align-items: center;
color: white;
transform: scale(0);
transition: .3s ease;

img{
    width: 100px;
    filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
}
`;

const Link = styled.a`
  width: 100%;
  position: relative;
  &:hover ${Lay}{
        transform: scale(1);
    }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  position: relative;
`;

const Info = styled.div`
    padding-bottom: 2rem;
    font-size: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;

    h2{
        color: ${colors.secondary};
        font-weight: bolder;
        font-size: 2rem;
        margin-top: 2.3rem;
        margin-bottom: 1.2rem;
    }
    p{
        line-height: 2.6rem;
        height: 11.5rem;
        display: flex;
        align-items: center;
    }
`;
const Buttons = styled.div`
    display: flex;
    padding-top: 2rem;
    justify-content: space-evenly;


    a{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        background-color: ${colors.secondary};
        opacity: 0.7;
        color: white;
        width: 40%;
        height: 3rem;
        border: none;
        border-radius: 0.9rem;
        outline: none;
        cursor: pointer;
    }

    a:hover{
        opacity: 1;
    }
`;

export { Card, CardImage, Link, Image, Info, Buttons,Lay };
