import React from "react";
import Modal from "react-modal";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Skills from "./Skills";

Modal.setAppElement("#root");

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="vivace_tm_about">
          <div className="vivace_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>About Me</h3>
              </div>
            </div>
          </div>

          <Intro />
          <div className="vivace_tm_short_info">
            <PersonalInfo />
          </div>

          <div className="vivace_tm_button" data-position="left">
          <a href="assets/img/cv.docx" download>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>

      <div className="vivace_tm_progressbox">
        <div className="container">
          <div className="in">
            <Skills />
          </div>
        </div>
      </div>

      <div className="vivace_tm_skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div>

      <div className="vivace_tm_resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutMain;
