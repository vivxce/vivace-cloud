import React from "react";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Education",
      resume: [
        {
          id: 1,
          year: "2015 - 2018",
          institute: "University of Adelaide",
          degree: "Bachelor of Software Engineering (Honours)",
        }
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Experience",
      resume: [
        {
          id: 1,
          year: "2019 - Now",
          institute: "ANZ",
          degree: "Engineer",
        },
        {
          id: 2,
          year: "2017-2018",
          institute: "PixelForce",
          degree: "Intern Engineer",
        }
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="vivace_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="vivace_tm_resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h3>{value.institute}</h3>
                      <span>{value.degree}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
