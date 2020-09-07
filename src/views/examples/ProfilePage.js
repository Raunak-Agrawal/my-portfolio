import React from "react";

import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Pdf from "assets/pdf/raunakresume.pdf";
import "./ProfilePage.scss";
import { projects } from "./projectdata";
import ReactGA from "react-ga";

function initializeAnalytics() {
  ReactGA.initialize("UA-150904862-1", {
    gaOptions: {
      siteSpeedSampleRate: 100
    }
  });
  ReactGA.pageview("/");
}
function ProfilePage() {
  initializeAnalytics();
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div
              className="avatar"
              // style={{ position: "relative", bottom: "60px", zIndex: 1 }}
            >
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/RaunakAgrawal.jpeg")}
              />
            </div>
            <div className="name">
              <h4 className="name-title">
                Hi, I' am Raunak Agrawal
                <br />
              </h4>
              <h6 className="description">JavaScript Engineer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                A front-end developer building web interfaces and mobile apps
                with React and React Native
              </p>
              <br />
              {/* <hr /> */}
              <p>
                <strong>Tech Stack : </strong>
                <small>
                  React JS, React Native, Redux, Firebase, Node JS, Mongo DB,
                  GIT
                </small>
              </p>
              {/* <div
                style={{
                  width: "50px",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <hr />
              </div> */}

              <Button
                className="btn-round mt-4"
                color="default"
                outline
                onClick={() => window.open(Pdf, "_blank")}
              >
                <i className="fa fa-download" /> RESUME
              </Button>
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem style={{ cursor: "pointer" }}>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Work
                  </NavLink>
                </NavItem>
                <NavItem style={{ cursor: "pointer" }}>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Projects
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                     <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="8" md="8" xs="8">
                          <h6>
                            Full stack developer <br />
                            <small
                              className="companyName"
                              onClick={() =>
                                window.open(
                                  "https://hashedin.com/",
                                  "_blank"
                                )
                              }
                            >
                              HashedIn
                            </small>
                          </h6>
                        </Col>
                        <Col
                          className="ml-auto mr-auto"
                          lg="4"
                          md="4"
                          xs="4"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <Label>
                            <span>DEC 2019 - PRESENT</span>
                          </Label>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="8" md="8" xs="8">
                          <h6>
                            Full stack developer <br />
                            <small
                              className="companyName"
                              onClick={() =>
                                window.open(
                                  "https://www.tunerlabs.com/",
                                  "_blank"
                                )
                              }
                            >
                              tunerlabs consulting
                            </small>
                          </h6>
                        </Col>
                        <Col
                          className="ml-auto mr-auto"
                          lg="4"
                          md="4"
                          xs="4"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <Label>
                            <span>JAN 2019 - DEC 2019</span>
                          </Label>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col lg="8" md="8" xs="8">
                          <h6>
                            project intern <br />
                            <small
                              className="companyName"
                              onClick={() =>
                                window.open(
                                  "https://cloudfabrica.com/",
                                  "_blank"
                                )
                              }
                            >
                              cloud fabrica
                            </small>
                          </h6>
                        </Col>

                        <Col
                          className="ml-auto mr-auto"
                          lg="4"
                          md="4"
                          xs="4"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <Label>
                            <span>MAY 2019 - JULY 2019</span>
                          </Label>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col lg="8" md="8" xs="8">
                          <h6>
                            intern, coding bootcamp <br />
                            <small
                              className="companyName"
                              onClick={() =>
                                window.open("https://frulix.com/", "_blank")
                              }
                            >
                              Codeslash.io, frulix
                            </small>
                          </h6>
                        </Col>
                        <Col
                          className="ml-auto mr-auto"
                          lg="4"
                          md="4"
                          xs="4"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <Label>
                            <span>AUG 2018 - OCT 2019</span>
                          </Label>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2" id="follows">
              <h3 className="text-center mb-4" style={{ fontWeight: "bold" }}>
                Some of the projects that I have worked on &#128522;
              </h3>
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    {projects.map((project, index) => {
                      return (
                        <>
                          <li key={index}>
                            <Row>
                              <Col
                                className="ml-auto mr-auto"
                                lg="12"
                                md="12"
                                xs="12"
                              >
                                <h5 className="text-center">
                                  <strong>{project.name}</strong> <br />
                                  <br />
                                  <small
                                    style={{
                                      textTransform: "capitalize"
                                    }}
                                  >
                                    {project.description}
                                  </small>
                                  <br />
                                  {project.link ? (
                                    <div style={{ marginTop: "10px" }}>
                                      <small style={{ fontWeight: "bold" }}>
                                        Link :
                                      </small>
                                      <small
                                        onClick={() =>
                                          window.open(project.link)
                                        }
                                        style={{
                                          cursor: "pointer"
                                        }}
                                      >
                                        {" " + project.link}
                                      </small>
                                      <br />
                                    </div>
                                  ) : null}
                                  <label className="label label-default mr-1 mt-4 p-2">
                                    Technologies : {project.techStack}
                                  </label>
                                </h5>
                              </Col>
                            </Row>
                          </li>
                          <hr className="horizontaltag" />
                        </>
                      );
                    })}
                  </ul>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
