import React from "react";
import './Stack.css';
import { Container, Card, Row, Col } from "react-bootstrap";

export const Stack = () => {

  //TECHNOLOGIES 
  const frontendTechnologies = [
    { name: "HTML" },
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "Bootstrap" },
    { name: "Tailwind" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Redux" },
    { name: "Angular" },
  ];

  const backendTechnologies = [
    { name: "Node.js" },
    { name: "Java" },
    { name: "MySQL" },
    { name: "Sequelize" },
    { name: "JWT" },
    { name: "TypeORM" },
    { name: "NoSQL" },
    { name: "MongoDB" },
    { name: "Express" },
    { name: "PHP" },
    { name: "Laravel" },
  ];

  const toolsTech = [
    { name: "Git" },
    { name: "GitHub" },
    { name: "MySQL Workbench" },
    { name: "PhpMyAdmin" },
    { name: "Azure Databricks" },
    { name: "GoDeploy" },
    { name: "AWS" },
    { name: "Postman" },
    { name: "Docker" },
    { name: "WordPress" },
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
          marginTop: '3.5em'
        }}>
        <div className="stackContainer" >
          <Row >
            <Col xs={12} lg={6}  className="d-flex justify-content-center">
              <Card className="cardStack">
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
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
            <Col xs={12} lg={6} className="d-flex justify-content-center">
              <Card className="cardStack">
                <h3 className="techTitle">Development Methodology</h3>
                <div className="techName">
                  {toolsMethodology.map((tech, i) => (
                    <div className="techNameMap" key={i}>
                      <h6>{tech.name}</h6>
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