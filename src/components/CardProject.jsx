import React from 'react'

import {Card, CardImage, Link, Image,Info, Buttons,Lay} from "../styledComponents/Card"
import LightGallery from 'lightgallery/react';
import { cardVariants } from '../assets/animations';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import eyeImg from "../images/eye.svg"

function CardProject({title,description,linkGithub,linkWebsite,img}) {

  return (
    <Card
      variants={cardVariants}
    >
      <CardImage
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      download={false}
      counter={false}
      mobileSettings={
        {showCloseIcon: true}
      }
      >
        <Link href={img} data-html>
          <Image src={img}/>
          <Lay><img src={eyeImg}/></Lay>
        </Link>
        
      </CardImage>
      <Info>
          <h2>{title}</h2>
          <p>{description}</p>
          <Buttons>
            <a href={linkGithub} target="_blank">Ver código</a>
            <a href={linkWebsite} target="_blank">Ver demo</a>
          </Buttons>
        </Info>
    </Card>
  );
}

export default CardProject