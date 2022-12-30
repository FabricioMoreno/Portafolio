import React from 'react'
import { PortafolioInfo,Header,Info,Title,Icons,IconImg,CardsProjects } from '../styledComponents/PortafolioInfo'
import CardProject from './CardProject'
import icons from '../assets/icons'
import projects from '../assets/projects'

const Portafolio = ()=>{
  const iconsImg = icons.map((icon,index)=><span key={index}><IconImg src={icon}/></span>)

  const projectsCards = projects.map((project)=>{
    return(
      <CardProject
      key={project.id}
      {...project}
      ></CardProject>
    )
  })

    return(
      <PortafolioInfo>
        <Header id='1'>
          
        </Header>
        <Info id='2'>
          <Title>Sobre mi</Title>
          <p>He dedicado tiempo desde mi adolescencia en formarme como desarrollador web. Tengo conocimientos en distintas tecnologías en frontend y backend. Me considero un amante de todos los recursos desarrollados en el ámbito  de JS y mi stack favorito es el MERN ❤️</p>
        </Info>

        <Info id='3'>
          <Title>Habilidades</Title>
          <Icons>
            {iconsImg}
          </Icons>

        </Info>

        <Info id='4'>
          <Title>Proyectos</Title>
          <CardsProjects>
            {projectsCards}
          </CardsProjects>
        </Info>

      </PortafolioInfo>
    )
}

export default Portafolio