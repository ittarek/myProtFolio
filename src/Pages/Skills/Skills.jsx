import React from "react";

const Skills = () => {
  const data = [
    {
      name: "HTMl",
      value: 100,
      message: "Html is my love side",
    },
    {
      name: "CSS",
      value: 100,
      message: "Css is my love side",
    },
    {
      name: "BootStrap",
      value: 100,
      message: "BootsTrap is my love side",
    },
    {
      name: "TailWind",
      value: 100,
      message: "TailWind is my love side",
    },
    {
      name: "JavaScript",
      value: 90,
      message: "JavaScript is my love side",
    },
    {
      name: "React.js",
      value: 90,
      message: "React is my love side",
    },
    {
      name: "Express.js",
      value: 50,
      message: "Express is my love side",
    },
    {
      name: "Next.js",
      value: 10,
      message: "Next is my running Learning Things",
    },
  ];
  return (
    <div>
      <h1 className="text-4xl text-white text-center"> My Skills</h1>

     <div className="lg:grid lg:grid-cols-3 mx-10 my-5">
     {data.map((item) => (
        <div className="card w-96 bg-neutral text-neutral-content my-5 hover:border hover:border-1 hover:border-red-800  hover:bg-sky-900 ">
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.message}</p>
            <div className="card-actions">
        
          <p className="inline">
          <progress
                className="progress progress-error bg-red-800 w-56 "
                value={item.value}
                max="100"
              ></progress>
          </p>
              <p className="text-center">{item.value}%</p>
            </div>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Skills;
