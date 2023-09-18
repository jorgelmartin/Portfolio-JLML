import React from "react";
import './Stack.css';
import { Container, Card, Row, Col } from "react-bootstrap";

export const Stack = () => {
  const frontendTechnologies = [
    { name: "HTML", description: "It is the markup language used to create the structure and content of a web page." },
    { name: "CSS", description: "Used to style and design the web page, controlling the visual presentation." },
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
    { name: "JWT", description: "Used for authentication and authorization in web applications and API services." },
    { name: "NoSQL", description: "Used for authentication and authorization in web applications and API services." },
    { name: "Mongoose", description: "Used for authentication and authorization in web applications and API services." },
    { name: "Express", description: "A web application framework for Node.js that simplifies API creation and route handling." },
    { name: "PHP", description: "A PHP development framework that facilitates the creation of robust and secure web applications." },
    { name: "Laravel", description: "A PHP development framework that facilitates the creation of robust and secure web applications." },
  ];

  const toolsTech = [
    { name: "Git", description: "A version control system that allows tracking changes in source code." },
    { name: "GitHub", description: "Source code hosting platform based on Git, used to host code repositories, collaborate on projects, and manage the development workflow." },
    { name: "Workbench", description: "A database management tool for designing, modeling, and administering MySQL databases." },
    { name: "Postman", description: "A tool for testing and debugging APIs by sending HTTP requests." },
    { name: "Docker", description: "Platform for creating, deploying, and managing applications in containers, making deployment and scalability easier." },
    { name: "WordPress", description: "A widely used content management system (CMS) for building websites and blogs." },
  ];

  const toolsMethodology = [
    { name: "Scrum" },
    { name: "Trello" },
    { name: "Kanban" },
    { name: "Jira" },
  ];

  return (
    <>
      <Container
        style={{
          marginTop: '0.3em'
        }}>
        <div className="stackContainer" >
        
          <Row >
            <Col xs={12} lg={6}  className="d-flex justify-content-center">
              <Card className="cardStack" >
                <h3 className="techTitle">Frontend</h3>
                <div className="techName">
                  {frontendTechnologies.map((tech, i) => (
                    <div className="techNameMap" key={i}>
                      <h6>{tech.name}</h6>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center">
              <Card className="cardStack">
                <h3 className="techTitle">Backend</h3>
                <div className="techName">
                  {backendTechnologies.map((tech, i) => (
                    <div className="techNameMap" key={i}>
                      <h6>{tech.name}</h6>
                      {/* <p>{tech.description}</p> */}
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center">
              <Card className="cardStack">
                <h3 className="techTitle">Tools and Version Control</h3>
                <div className="techName">
                  {toolsTech.map((tech, i) => (
                    <div className="techNameMap" key={i}>
                      <h6>{tech.name}</h6>
                      {/* <p>{tech.description}</p> */}
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center">
              <Card className="cardStack"
                style={{
                  // marginTop: '2em'
                }}>
                <h3 className="techTitle">Development Methodology</h3>
                <div className="techName">
                  {toolsMethodology.map((tech, i) => (
                    <div className="techNameMap" key={i}>
                      <h6>{tech.name}</h6>
                      {/* <p>{tech.description}</p> */}
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}