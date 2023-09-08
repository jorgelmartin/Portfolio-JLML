import React from "react";
import './Stack.css';
import { Container, Card, Row, Col } from "react-bootstrap";

export const Stack = () => {
  const frontendTechnologies = [
    { name: "HTML (HyperText Markup Language)", description: "It is the markup language used to create the structure and content of a web page." },
    { name: "CSS (Cascading Style Sheets)", description: "Used to style and design the web page, controlling the visual presentation." },
    { name: "JavaScript", description: "A programming language that allows user interaction with the web page, including animations and form validations." },
    { name: "Bootstrap", description: "Framework that makes it easier to design responsive web pages with a modern look." },
    { name: "React", description: "A JavaScript library for building interactive user interfaces and reusable components." },
    { name: "Redux", description: "A JavaScript state management library commonly used with React to efficiently manage application state." },
  ];

  const backendTechnologies = [
    { name: "Node.js", description: "A JavaScript runtime environment on the server-side that enables the development of server-side web applications." },
    { name: "Java", description: "A popular programming language for developing enterprise applications and servers." },
    { name: "MySQL", description: "A widely used relational database management system for storing and managing data." },
    { name: "Sequelize", description: "A Node.js library that provides object-relational mapping (ORM) for interacting with SQL databases." },
    { name: "JWT (JSON Web Tokens)", description: "Used for authentication and authorization in web applications and API services." },
    { name: "Express", description: "A web application framework for Node.js that simplifies API creation and route handling." },
    { name: "PHP-Laravel", description: "A PHP development framework that facilitates the creation of robust and secure web applications." },
  ];

  const toolsTech = [
    { name: "Git", description: "A version control system that allows tracking changes in source code." },
    { name: "GitHub", description: "Source code hosting platform based on Git, used to host code repositories, collaborate on projects, and manage the development workflow." },
    { name: "MySQL Workbench", description: "A database management tool for designing, modeling, and administering MySQL databases." },
    { name: "Postman", description: "A tool for testing and debugging APIs by sending HTTP requests." },
    { name: "Docker", description: "Platform for creating, deploying, and managing applications in containers, making deployment and scalability easier." },
    { name: "WordPress", description: "A widely used content management system (CMS) for building websites and blogs." },
  ];

  return (
    <>
      <Container
        style={{
          marginTop: '7em'
        }}>
        <div className="stackContainer">
          <Row>
            <Col xs={12} lg={6}>
              <Card
                style={{
                  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
                  backgroundColor: '#58006a57',
                  color: 'white',
                  padding: '1em',
                  fontSize: '0.8em'
                }}
              >
                <h3>Stack Frontend</h3>
                <div className="">
                  {frontendTechnologies.map((tech, i) => (
                    <div className="techName" key={i}>
                      <h6>{tech.name}</h6>
                      <p>{tech.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col xs={12} lg={6}>
              <Card
                style={{
                  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
                  backgroundColor: '#58006a57',
                  color: 'white',
                  padding: '1em',
                  fontSize: '0.8em'
                }}>
                <h3>Stack Backend</h3>
                <div className="">
                  {backendTechnologies.map((tech, i) => (
                    <div className="techName" key={i}>
                      <h6>{tech.name}</h6>
                      <p>{tech.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col xs={12} lg={6}>
              <Card
                style={{
                  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
                  backgroundColor: '#58006a57',
                  color: 'white',
                  padding: '1em',
                  fontSize: '0.8em',
                  marginBottom: '2em',
                  marginTop: '-3em',
                }}>
                <h3>Tools and Version Control</h3>
                <div>
                  {toolsTech.map((tech, i) => (
                    <div className="techName" key={i}>
                      <h6>{tech.name}</h6>
                      <p>{tech.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col xs={12} lg={6}>
              <Card
                style={{
                  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
                  backgroundColor: '#58006a57',
                  color: 'white',
                  padding: '1em',
                  fontSize: '0.8em',
                  marginTop: '2em'
                }}>
                <h3>Development Methodology</h3>
                <div>
            
                    <div className="techName">
                      <h6>SCRUM</h6>
                      <p>An agile framework for managing software development projects, focusing on collaboration, adaptability, and incremental delivery.</p>
                    </div>
      
                </div>
              </Card>
            </Col>
          </Row>

          {/* Agrega más secciones y tecnologías según sea necesario */}
        </div>
      </Container>
    </>
  )
}