import React from "react";
import "./Projects.css";
import consoleImage1 from '../../assets/console1.png';
import consoleImage2 from '../../assets/consola2.png';
import consoleImage3 from '../../assets/console3.png';
import digitalMenu1 from '../../assets/digitalMenu1.png';
import digitalMenu2 from '../../assets/digitalMenu2.png';
import digitalMenu3 from '../../assets/digitalMenu3.png';
import digitalMenu4 from '../../assets/digitalMenu4.png';
import digitalMenu5 from '../../assets/digitalMenu5.png';
import digitalMenu6 from '../../assets/digitalMenu6.png';
import masterMind1 from '../../assets/mm1.jpeg';
import masterMind2 from '../../assets/mm2.png';
import masterMind3 from '../../assets/mm3.png';
import masterMind4 from '../../assets/mm4.png';
import masterMind5 from '../../assets/mm5.png';
import masterMind6 from '../../assets/mm6.png';
import masterMind7 from '../../assets/mm7.png';
import masterMind8 from '../../assets/mm8.png';
import masterMind9 from '../../assets/mm9.png';
import { Container, Row, Col } from "react-bootstrap";
import { Project } from "../../components/Project/Project";

export const Projects = () => {
  return (
    <Container >
    <div className="containerProjects">
        <Row>
            <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                <div className="projectConsole">
                    <Project
                        title={"Video Console with CSS3"}
                        description={"Proyecto de consola portátil recreada con precisión utilizando HTML y CSS3, con un enfoque en el diseño auténtico y una experiencia de usuario envolvente."}
                        images={[consoleImage1, consoleImage2, consoleImage3]}
                        playLink="https://jorgemctin.github.io/VideoConsoleCSS/"
                        gitHubLink="https://github.com/jorgemctin/VideoConsoleCSS"
                    />
                </div>
            </Col>
            <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                <div className="projectConsole">
                    <Project
                        title={"Digital Menu Restaurant"}
                        images={[digitalMenu1, digitalMenu2, digitalMenu3, digitalMenu4, digitalMenu5, digitalMenu6]}
                        playLink="https://jorgemctin.github.io/DigitalMenuRestaurant/"
                        gitHubLink="https://github.com/jorgemctin/DigitalMenuRestaurant/"
                    />
                </div>
            </Col>
            <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                <div className="projectConsole">
                    <Project
                        title={"Game MasterMind JS"}
                        images={[masterMind1, masterMind2, masterMind3, masterMind4, masterMind5, masterMind6, masterMind7, masterMind8, masterMind9]}
                        playLink="https://jorgemctin.github.io/Game-MasterMind/"
                        gitHubLink="https://github.com/jorgemctin/Game-MasterMind"
                    />
                </div>
            </Col>
            <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                <div className="projectConsole">
                    <Project
                        title={"Backend Dental Clinic"}
                        images={[masterMind1, masterMind2, masterMind3, masterMind4, masterMind5, masterMind6, masterMind7]}
                        playLink="https://jorgemctin.github.io/Game-MasterMind/"
                        gitHubLink="https://github.com/jorgemctin/Backend-DentalClinic"
                    />
                </div>
            </Col>
            <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                <div className="projectConsole">
                    <Project
                        title={"Frontend Dental Clinic"}
                        images={[masterMind1, masterMind2, masterMind3, masterMind4, masterMind5, masterMind6, masterMind7]}
                        playLink="https://jorgemctin.github.io/Game-Master-Mind/"
                        gitHubLink="https://github.com/jorgemctin/Frontend-DentalClinic"
                    />
                </div>
            </Col>
            <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                <div className="projectConsole">
                    <Project
                        title={"Backend AkdemyProject"}
                        images={[masterMind1, masterMind2, masterMind3, masterMind4, masterMind5, masterMind6, masterMind7]}
                        playLink="https://react-akdemy-project.vercel.app/"
                        gitHubLink="https://github.com/jorgemctin/Laravel-AkdemyProject"
                    />
                </div>
            </Col>
            <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                <div className="projectConsole">
                    <Project
                        title={"Frontend AkdemyProject"}
                        images={[masterMind1, masterMind2, masterMind3, masterMind4, masterMind5, masterMind6, masterMind7]}
                        playLink="https://react-akdemy-project.vercel.app/"
                        gitHubLink="https://github.com/jorgemctin/React-AkdemyProject"
                    />
                </div>
            </Col>
        </Row>
    </div>
</Container>
  );
};
