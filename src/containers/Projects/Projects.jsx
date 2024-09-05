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
import mm1 from '../../assets/mm1.jpeg';
import mm2 from '../../assets/mm2.png';
import mm3 from '../../assets/mm3.png';
import mm4 from '../../assets/mm4.png';
import mm5 from '../../assets/mm5.png';
import mm6 from '../../assets/mm6.png';
import mm7 from '../../assets/mm7.png';
import mm8 from '../../assets/mm8.png';
import mm9 from '../../assets/mm9.png';
import akdemy1 from '../../assets/Akdemy/home1.jpg'; 
import akdemy2 from '../../assets/Akdemy/python.jpg'; 
import akdemy3 from '../../assets/Akdemy/php.jpg'; 
import akdemy4 from '../../assets/Akdemy/register.png';
import akdemy5 from '../../assets/Akdemy/login.png';
import akdemy6 from '../../assets/Akdemy/profileakdemy.png';
import akdemy7 from '../../assets/Akdemy/admin.jpg';
import akdemy8 from '../../assets/Akdemy/convoadmin.png';
import akdemy9 from '../../assets/Akdemy/create.png';
import akdemy10 from '../../assets/Akdemy/detailconvo.png';
import akdemy11 from '../../assets/Akdemy/users.png';
import akdemy12 from '../../assets/Akdemy/pending.png';
import akdemy13 from '../../assets/Akdemy/student.jpg';
import akdemy14 from '../../assets/Akdemy/inscription.png';
import akdemy15 from '../../assets/Akdemy/inscriptionok.png';
import akdemy16 from '../../assets/Akdemy/myprograms.png';
import akdemy17 from '../../assets/Akdemy/home2.jpg';
import akdemy18 from '../../assets/Akdemy/backAkdemy.png';
import akdemy19 from '../../assets/Akdemy/messagesRoom.jpg';
import akdemy20 from '../../assets/Akdemy/messagesRoom1.jpg';
import Dental1 from '../../assets/DentalClinic/BackDental.png';
import Dental2 from '../../assets/DentalClinic/home.jpeg';
import Dental3 from '../../assets/DentalClinic/detail.png';
import Dental4 from '../../assets/DentalClinic/login.png';
import Dental5 from '../../assets/DentalClinic/register.png';
import Dental6 from '../../assets/DentalClinic/adminMenu.png';
import Dental7 from '../../assets/DentalClinic/patients.png';
import Dental8 from '../../assets/DentalClinic/perfil.png';
import Dental9 from '../../assets/DentalClinic/users.png';
import Dental10 from '../../assets/DentalClinic/citas.png';
import Dental11 from '../../assets/DentalClinic/citapaciente.png';
import Dental12 from '../../assets/DentalClinic/detallecita.png';
import Dental13 from '../../assets/DentalClinic/home1.jpeg';
import Dental14 from '../../assets/DentalClinic/userDetail.png';
import { Container, Row, Col } from "react-bootstrap";
import { Project } from "../../components/Project/Project";

export const Projects = () => {
    return (

        // PROJECTS - JLML
        <Container>
            <div className="containerProjects">
                <Row>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Video Console with CSS"}
                                description={"Project of a handheld console recreated using HTML5 and CSS3. For a more dynamic interaction with the user, JavaScript is used to activate and deactivate the screen with the intro image of the Mobile Legends game when the START button is pressed. Currently not responsive."}
                                images={[consoleImage1, consoleImage2, consoleImage3]}
                                playLink="https://jorgelmartin.github.io/VideoConsoleCSS/"
                                gitHubLink="https://github.com/jorgelmartin/VideoConsoleCSS"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Digital Menu Restaurant"}
                                description={"The project is a digital restaurant menu website for a street food business. It offers a menu with options for starters, menu, and contact, customer reviews, and the ability to make reservations with confirmation. Technologies used: Bootstrap, HTML, and CSS."}
                                images={[digitalMenu1, digitalMenu2, digitalMenu3, digitalMenu4, digitalMenu5, digitalMenu6]}
                                playLink="https://jorgelmartin.github.io/DigitalMenuRestaurant/"
                                gitHubLink="https://github.com/jorgelmartin/DigitalMenuRestaurant/"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Backend DentalClinic"}
                                description={"Dental clinic management system with patient and administrator/dentist roles. Patients can manage their appointments and profiles, while administrators can view all users and appointments."}
                                images={[Dental1]}
                                playLink="https://react-dentalclinic.vercel.app/"
                                gitHubLink="https://github.com/jorgelmartin/Backend-DentalClinic"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Frontend DentalClinic"}
                                description={"Frontend development and design of an application for a dental clinic. Patients (default role) once registered will be able to edit their profile, schedule an appointment of interest, having the opportunity to choose date, time, service, and dentist. They will also be able to view their appointment history, as well as modify it. The admin will be able to see all appointments and users registered in the application. Admin Credentials: admin@dentist.com - Hola1234"}
                                images={[Dental2, Dental3, Dental4, Dental5, Dental6, Dental7, Dental8, Dental9,Dental14, Dental10, Dental11, Dental12, Dental13]}
                                playLink="https://react-dentalclinic.vercel.app/"
                                gitHubLink="https://github.com/jorgelmartin/Frontend-DentalClinic"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Backend AkdemyProject"}
                                description={"The backend project of Akdemy is designed for program visualization, user profile management, convocations, and message exchange. Endpoints are provided to carry out these operations, in addition to authentication functions."}
                                images={[akdemy18]}
                                playLink="https://react-akdemy-project.vercel.app/"
                                gitHubLink="https://github.com/jorgelmartin/Laravel-AkdemyProject"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Frontend AkdemyProject"}
                                description={"Akdemy is an application that provides academic programs and convocations to users. Administrators can manage users, convocations, and enrollment requests, while users can explore programs, request enrollments, and track their requests. It also features program-specific messaging rooms for users to communicate and share experiences. The application design focuses on accessibility and ease of use. Admin Credentials: admin@admin.com -  Hola1234"}
                                images={[akdemy1, akdemy2, akdemy3, akdemy4, akdemy5, akdemy13, akdemy19, akdemy20, akdemy14, akdemy15, akdemy16, akdemy6,akdemy7, akdemy11, akdemy12,  akdemy8, akdemy9, akdemy10,  akdemy17 ]}
                                playLink="https://react-akdemy-project.vercel.app/"
                                gitHubLink="https://github.com/jorgelmartin/React-AkdemyProject"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Game MasterMind JS"}
                                description={"MasterMind is a logic game. Players can start by entering their name and choosing a difficulty level, which determines the number of attempts and available colors. They select colors to guess a secret combination. The 'Check' button verifies if the choice is correct. There is also a help menu with information on how to play and details about the game. The goal is to guess the secret combination within the available attempts."}
                                images={[mm1, mm2, mm3, mm4, mm5, mm6, mm7, mm8, mm9]}
                                playLink="https://jorgelmartin.github.io/GameMasterMind/"
                                gitHubLink="https://github.com/jorgelmartin/GameMasterMind"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};
