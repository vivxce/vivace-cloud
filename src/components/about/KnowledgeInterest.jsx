import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Knowledge",
      content: [
        " Bootstrap, npm, Node",
        " React, Redux, HTML5, CSS, ES6",
        " Git, JIRA, Confluence, Agile",
        " C++"
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        " Gaming",
        " Sports -- NBA, tennis",
        " Photography"
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="vivace_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="vivace_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
