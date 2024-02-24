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
      { name: "Bash", level: "Basic" },
      { name: "Dart", level: "Basic" },
    ],
  },
  {
    category: "Framework",
    skills: [
      { name: "CodeIgniter", level: "Beginner" },
      { name: "SpringBoot", level: "Beginner" },
      { name: "Laravel", level: "Basic" },
      { name: "React", level: "Basic" },
      { name: "Dart", level: "Basic" },
    ],
  },
  {
    category: "Databases Sql & non Sql",
    skills: [
      { name: "MySql", level: "Beginner" },
      { name: "PostgreSql", level: "basic" },
      { name: "Firebase", level: "Beginner" },
    ],
  },
  {
    category: "Middleware Tools",
    skills: [
      { name: "WSO2 API Manager", level: "Basic" },
      { name: "Redhat Fuse", level: "Basic" },
      { name: "Redhat Jboss", level: "Basic" },
      { name: "Keycloack Single sign on", level: "Beginner" },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "Redhat Enterprose Linux (RHEL)", level: "Basic" },
      { name: "Ubuntu Server", level: "Basic" },
      { name: "Redhat Openstack Platform", level: "Basic" },
      { name: "Docker", level: "Basic" },
    ],
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
