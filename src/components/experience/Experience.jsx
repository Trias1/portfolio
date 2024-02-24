import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const experienceData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", level: "Beginner" },
      { name: "CSS", level: "Beginner" },
      { name: "JavaScript", level: "Basic" },
      { name: "Bootstrap", level: "Beginner" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "JAVA", level: "Beginner" },
      { name: "PHP", level: "Beginner" },
    ],
  },
  {
    category: "Framework",
    skills: [
      { name: "CodeIgniter", level: "Beginner" },
      { name: "SpringBoot", level: "Beginner" },
      { name: "Laravel", level: "Basic" },
      { name: "React", level: "Basic" },
    ],
  },
  {
    category: "Databases Sql",
    skills: [
      { name: "MySql", level: "Beginner" },
      { name: "PostgreSql", level: "basic" },
    ],
  },
  {
    category: "Databases non Sql",
    skills: [{ name: "Firebase", level: "Beginner" }],
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h2>Skills and Abilities</h2>
      <div className="container experience__container">
        {experienceData.map((category, index) => (
          <div className="experience__frontend" key={index}>
            <h3>{category.category}</h3>
            <div className="experience__content">
              {category.skills.map((skill, i) => (
                <article className="experience__details" key={i}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill.name}</h4>
                    <small className="text-light">{skill.level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
