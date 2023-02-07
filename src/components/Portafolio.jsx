import React, { useEffect } from "react";
import {
  PortafolioInfo,
  Header,
  Info,
  Title,
  Icons,
  IconImg,
  CardsProjects,
} from "../styledComponents/PortafolioInfo";
import CardProject from "./CardProject";
import icons from "../assets/icons";
import projects from "../assets/projects";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { cardsVariants, iconsVariants } from "../assets/animations";
import ContactsLinks from "./ContactsLinks";

const Portafolio = () => {
  const iconsImg = icons.map((icon, index) => (
    <span key={index}>
      <IconImg src={icon} />
    </span>
  ));

  const projectsCards = projects.map((project) => {
    return <CardProject key={project.id} {...project}></CardProject>;
  });

  //Animations
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const animationControl2 = useAnimation();
  const animationControl3 = useAnimation();
  const animationControl4 = useAnimation();

  useEffect(() => {
    if (inView4) {
      animationControl4.start("show");
    }
  }, [animationControl4, inView4]);

  useEffect(() => {
    if (inView2) {
      animationControl2.start("visible");
    }
  }, [animationControl2, inView2]);

  useEffect(() => {
    if (inView3) {
      animationControl3.start("visible");
    }
  }, [inView3]);

  return (
    <PortafolioInfo>
      <Header id="1"></Header>

      <Info id="2">
        <Title>Sobre mi</Title>
        <motion.div
          ref={ref2}
          animate={animationControl2}
          initial="hidden"
          variants={iconsVariants}
        >
          <p>
            He dedicado tiempo desde mi adolescencia en formarme como
            desarrollador web. Tengo conocimientos en distintas tecnologías en
            frontend y backend. Me considero un amante de todos los recursos
            desarrollados en el ámbito de JS y mi stack favorito es el MERN ❤️
          </p>
        </motion.div>
      </Info>

      <Info id="3">
        <Title>Habilidades</Title>
        <Icons
          ref={ref3}
          animate={animationControl3}
          initial="hidden"
          variants={iconsVariants}
        >
          {iconsImg}
        </Icons>
      </Info>

      <Info id="4">
        <Title>Proyectos</Title>
        <motion.div
          ref={ref4}
          variants={cardsVariants}
          initial="hidden"
          animate={animationControl4}
        >
          <CardsProjects>{projectsCards}</CardsProjects>
        </motion.div>
      </Info>
      
      <Info id="5">
        <Title>Contacto</Title>
        <ContactsLinks/>
      </Info>
    </PortafolioInfo>
  );
};

export default Portafolio;
