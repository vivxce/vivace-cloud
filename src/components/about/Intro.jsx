import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/1.jpg",
    name: "Kevin Zhao",
    designation: "React Developer",
    text: (
      <>
        <p>
          I'm Kevin Zhao, and I've been working with React for 4 years. I've been working with ANZ during this time creating applications to assist bankers with servicing customers.
        </p>
        <p>
          I love working on pre-existing applications, maintaining and upgrading them. I'm an avid debugger, defect-fixer and aesthetic pleaser.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
