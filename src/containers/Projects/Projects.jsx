import React from "react";
import "./Projects.css";
// import { ImageGallery } from "../../components/ImageGallery/ImageGallery";
import consoleImage1 from '../../assets/consola1.png';
import consoleImage2 from '../../assets/consola2.png';
import consoleImage3 from '../../assets/console3.png';
import digitalMenu1 from '../../assets/digitalMenu1.png';
import digitalMenu2 from '../../assets/digitalMenu2.png';
import digitalMenu3 from '../../assets/digitalMenu3.png';
import digitalMenu4 from '../../assets/digitalMenu4.png';
import masterMind1 from '../../assets/mm1.png';
import masterMind2 from '../../assets/mm2.png';
import masterMind3 from '../../assets/mm3.png';
import masterMind4 from '../../assets/mm4.png';
import masterMind5 from '../../assets/mm5.png';
import masterMind6 from '../../assets/mm6.png';
import masterMind7 from '../../assets/mm7.png';

import { Container, Row, Col } from "react-bootstrap";
import { Project } from "../../components/Project/Project";



export const Projects = () => {
  return (
    <Container fluid>
      <div className="containerProjects">
      <Row>
      <Col>
        <div className="projectConsole">
        <Project
          title="Video Console"
          images={[consoleImage1, consoleImage2, consoleImage3]}
          link="https://jorgemctin.github.io/videoconsolaconcss/"
        />
        </div></Col>
        <Col>
        <div className="projectConsole1">
        <Project
          title="Digital Menu Restaurant"
          images={[digitalMenu1, digitalMenu2, digitalMenu3, digitalMenu4]}
          link="https://jorgemctin.github.io/cartarestaurantedigital/"
        />
</div></Col>
<Col>
        <Project
          title="Game MasterMind"
          images={[masterMind1, masterMind2, masterMind3, masterMind4, masterMind5, masterMind6, masterMind7]}
          link="https://jorgemctin.github.io/Game-Master-Mind/"
        /></Col>
      </Row>
      </div>
    </Container>
  );
};
