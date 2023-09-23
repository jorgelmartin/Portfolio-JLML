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
import akdemy1 from '../../assets/Akdemy/home.jpeg'; 
import akdemy2 from '../../assets/Akdemy/python.jpeg'; 
import akdemy3 from '../../assets/Akdemy/php.jpeg'; 
import akdemy4 from '../../assets/Akdemy/register.png';
import akdemy5 from '../../assets/Akdemy/login.png';
import akdemy6 from '../../assets/Akdemy/profileakdemy.png';
import akdemy7 from '../../assets/Akdemy/admin.jpeg';
import akdemy8 from '../../assets/Akdemy/convoadmin.png';
import akdemy9 from '../../assets/Akdemy/create.png';
import akdemy10 from '../../assets/Akdemy/detailconvo.jpeg';
import akdemy11 from '../../assets/Akdemy/users.png';
import akdemy12 from '../../assets/Akdemy/pending.png';
import akdemy13 from '../../assets/Akdemy/student.jpeg';
import akdemy14 from '../../assets/Akdemy/inscription.png';
import akdemy15 from '../../assets/Akdemy/inscriptionok.png';
import akdemy16 from '../../assets/Akdemy/myprograms.png';
import akdemy17 from '../../assets/Akdemy/home2.jpeg';
import akdemy18 from '../../assets/Akdemy/BBDDakdemy.png';
import Dental1 from '../../assets/DentalClinic/BackDental.png';
import Dental2 from '../../assets/DentalClinic/home.jpeg';
import Dental3 from '../../assets/DentalClinic/detail.png';
import Dental4 from '../../assets/DentalClinic/login.png';
import Dental5 from '../../assets/DentalClinic/register.png';
import Dental6 from '../../assets/DentalClinic/admin.jpeg';
import Dental7 from '../../assets/DentalClinic/patients.png';
import Dental8 from '../../assets/DentalClinic/perfil.png';
import Dental9 from '../../assets/DentalClinic/users.png';
import Dental10 from '../../assets/DentalClinic/citas.png';
import Dental11 from '../../assets/DentalClinic/citapaciente.png';
import Dental12 from '../../assets/DentalClinic/detallecita.png';
import Dental13 from '../../assets/DentalClinic/home1.jpeg';
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
                                description={"Proyecto de consola portátil recreada con precisión utilizando HTML5, CSS3. Para una interacción más dinámica con el usuario se utiliza JavaScript que al presionar el botón START se active y desactive la pantalla con la imagen intro del juego Mobile Leyends. Por el momento no apto para móviles."}
                                images={[consoleImage1, consoleImage2, consoleImage3]}
                                playLink="https://jorgemctin.github.io/VideoConsoleCSS/"
                                gitHubLink="https://github.com/jorgemctin/VideoConsoleCSS"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Digital Menu Restaurant"}
                                description={"El proyecto es un sitio web de carta de restaurante digital para un negocio de comida callejera. Ofrece un menú con opciones de inicio, carta y contacto, reseñas de clientes y la capacidad de hacer reservas con confirmación. Tecnologías: Bootstrap, HTML y CSS."}
                                images={[digitalMenu1, digitalMenu2, digitalMenu3, digitalMenu4, digitalMenu5, digitalMenu6]}
                                playLink="https://jorgemctin.github.io/DigitalMenuRestaurant/"
                                gitHubLink="https://github.com/jorgemctin/DigitalMenuRestaurant/"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Backend DentalClinic"}
                                description={"Sistema de gestión de clínica dental con roles de pacientes y administradores/dentistas. Los pacientes pueden gestionar sus citas y perfiles, mientras que los administradores ven todos los pacientes y citas. Los pacientes también pueden ver su historial de citas con detalles y tratamientos asociados."}
                                images={[Dental1]}
                                playLink="https://react-dentalclinic.vercel.app/"
                                gitHubLink="https://github.com/jorgemctin/Backend-DentalClinic"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Frontend DentalClinic"}
                                description={"Desarrollo y diseño FRONTEND de una aplicación funcional para una clínica dental. Los pacientes (role por defecto) una vez registrados podrán editar su perfil, crear la cita de interés, teniendo la oportunidad de escoger fecha, hora, servicio y dentista. También podrán ver el historial de sus citas, al igual que modificarla. El admin podrá ver todos las citas y usuarios registrados en la aplicación. Credenciales Admin: admin@dentist.com - Hola1234"}
                                images={[Dental2, Dental3, Dental4, Dental5, Dental6, Dental7, Dental8, Dental9, Dental10, Dental11, Dental12, Dental13]}
                                playLink="https://react-dentalclinic.vercel.app/"
                                gitHubLink="https://github.com/jorgemctin/Frontend-DentalClinic"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Backend AkdemyProject"}
                                description={"El proyecto Akdemy es una aplicación que ofrece diferentes programas y convocatorias a sus usuarios. Los administradores tienen privilegios adicionales para gestionar convocatorias y solicitudes de inscripción. Los usuarios tendrán acceso a su propio perfil, donde podrán visualizar y editar su información personal. Además, podrán explorar todos los programas académicos ofrecidos por la institución, obtener detalles sobre cada uno de ellos y tomar decisiones sobre sus intereses educativos."}
                                images={[akdemy18]}
                                playLink="https://react-akdemy-project.vercel.app/"
                                gitHubLink="https://github.com/jorgemctin/Laravel-AkdemyProject"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Frontend AkdemyProject"}
                                description={"En Akdemy los usuarios se registran y acceden a su espacio, donde pueden explorar programas académicos, solicitar inscripciones y editar su información personal. Los administradores gestionan las convocatorias y solicitudes de inscripción. Akdemy brinda una experiencia educativa completa y transparente, con un enfoque en la accesibilidad y facilidad de uso. Credenciales Admin: admin@admin.com - Hola1234"}
                                images={[akdemy1, akdemy2, akdemy3, akdemy4, akdemy5, akdemy6, akdemy7, akdemy8, akdemy9, akdemy10, akdemy11, akdemy12, akdemy13, akdemy14, akdemy15, akdemy16, akdemy17 ]}
                                playLink="https://react-akdemy-project.vercel.app/"
                                gitHubLink="https://github.com/jorgemctin/React-AkdemyProject"
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <Project
                                title={"Game MasterMind JS"}
                                description={"MasterMind es un juego de lógica. Los jugadores pueden comenzar ingresando su nombre y eligiendo un nivel de dificultad, que determina la cantidad de intentos y colores disponibles. Seleccionan colores para adivinar una combinación secreta. El botón 'Comprobar' verifica si la elección es correcta. También hay un menú de ayuda con información sobre cómo jugar y detalles sobre el juego. El objetivo es acertar la combinación secreta dentro de los intentos disponibles."}
                                images={[mm1, mm2, mm3, mm4, mm5, mm6, mm7, mm8, mm9]}
                                playLink="https://jorgemctin.github.io/Game-MasterMind/"
                                gitHubLink="https://github.com/jorgemctin/Game-MasterMind"
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};
