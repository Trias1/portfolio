import React from "react";
import "./job_experience.css";
import { RxBorderSolid } from "react-icons/rx";

const timelineData = [
  {
    title:
      "Pt Inovasi Informatika Indonesia, South Jakarta (Hybrid) | Fulltime",
    date: "october 2022 - Presents",
    skill: "Middleware Consultant, Cloud Consultant",
  },
  {
    title: "Cloud Consultant",
    date: "June 2023 – May 2024",
    description:
      "Manageservice RHOSP (Redhat Opensatck Platform) in Aplikasinusa Lintasarta as L1 Cloud Infrastructure",
    responsibilities: [
      "Health check and Creating Alert with customization script for existing Cluster",
      "Troubleshoot and support L1 ticketing",
      "PM CM every month for all cluster",
    ],
    skill:
      "Linux, Cloud Services, IT Consulting Cloud Consulting, Red Hat Enterprise Linux (RHEL)",
  },
  {
    title: "Middleware Consultant",
    date: "February 2023 – June 2023",
    description:
      "Implementation Keycloak on Linux Server & Application On Boarding to application mobile & website:",
    responsibilities: [
      "Installation Java",
      "Installation produk keycloak standalone",
      "Konfigurasi realm and client id",
      "SMTP configuration",
      "Configure identity providers",
      "Token configuration",
      "SSO functionality testing",
      "Check current session management settings",
      "Installation of the Keycloak client adapter in the application",
      "Adjustment of the code in the application regarding changes to the login flow using Keycloak (Supporting)",
      "Testing SSO features on apps in a development environment",
    ],
    skill:
      "Linux Server, Middleware, Keycloak, MySQL, Java, Dart, Flutter, Php, Laravel",
  },
  {
    title: "Freelance",
    description:
      "Buat kode VBA untuk form Excel dengan ketentuan sebagai berikut:",
    responsibilities: [
      "Jika formulir belum diisi sesuai aturan yang berlaku atau sudah habis masa berlakunya, maka akan muncul pemberitahuan tidak dapat dicetak",
    ],
    skill: "Excel, Vba",
  },
  {
    title: "Pt Prosigmaka Mandiri, Jakarta (Online) | Bootcamp",
    date: "June 2022 - september 2022",
    description: "Technical Consultant Program as contract employee",
    responsibilities: [
      "Learning about frontend using React.js, css, html for developing application",
      "Learning about Java Fundamental and use java springboot for develop backend application",
      "Learning Basic linux and Docker",
    ],
    skill: "Reactjs, Java ,Javascript, Linux server, Docker, Fullstack",
  },
];
export default function Job() {
  return (
    <div className="container experiencee__container">
      <div className="experience__frontend">
        <p className="experience__name-ha"></p>
        <div className="timeline">
          {timelineData.map((event, index) => (
            <div className="event" key={index}>
              <h3>{event.title}</h3>
              <h5>{event.date}</h5>
              <p>{event.description}</p>
              {event.responsibilities && (
                <ul className="job_list">
                  {event.responsibilities.map((responsibility, i) => (
                    <li key={i}>
                      <RxBorderSolid className="job_list-icon" />
                      <p>{responsibility}</p>
                    </li>
                  ))}
                </ul>
              )}
              <h5>Skill: {event.skill}</h5>
              {index !== timelineData.length - 1 && (
                <div className="timeline-divider"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
