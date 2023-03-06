import React from "react";

const PersonalInfo = () => {
  const personalInfoContent = [
    {
      id: 1,
      colClass: "left",
      info: [
        {
          id: 1,
          name: "Age",
          content: "26",
        },
        {
          id: 2,
          name: "Email",
          content: (
            <>
              <a href="mailto:kevinzhao96@hotmail.com">kevinzhao96@hotmail.com</a>
            </>
          ),
        }
      ],
    },
    {
      id: 2,
      colClass: "right",
      info: [
        {
          id: 1,
          name: "Nationality",
          content: "AUS",
        },
        {
          id: 2,
          name: "Study",
          content: "University of Adelaide",
        },
        {
          id: 3,
          name: "Degree",
          content: "Bachelor of Software Engineering (Honours)",
        },
        {
          id: 4,
          name: "Interest",
          content: "Gaming",
        }
      ],
    },
  ];
  return (
    <>
      {personalInfoContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="vivace_tm_info">
            <ul>
              {item?.info?.map((value) => (
                <li key={value.id}>
                  <span>{value.name}:</span>
                  <span>{value.content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
