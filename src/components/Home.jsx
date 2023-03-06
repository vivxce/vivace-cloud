import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="vivace_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/3.jpg)",
              }}
            ></div>
          </div>
          <div className="details">
            <h3 className="name">Kevin Zhao</h3>
            <p className="job">
              Gamer, frontend developer, art enthusiast.
            </p>
            <Social />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
