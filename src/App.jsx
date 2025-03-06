import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaHouse,
  FaUserTie,
  FaFileCode,
  FaEnvelope,
  FaGithub,
  FaDownload 
} from "react-icons/fa6";
import logo from "./assets/images/logo.png";
import graph from "./assets/images/graph.png";
import graph1 from "./assets/images/graph (1).png";
import graph3 from "./assets/images/graph_3.svg";
import graph4 from "./assets/images/graph_4.svg";
import node_img from "./assets/images/nodejs.svg";
import js_img from "./assets/images/js.svg";
import html_img from "./assets/images/html.svg";
import css_img from "./assets/images/css.svg";
import tailwind_img from "./assets/images/tailwind.svg";
import flutter_img from "./assets/images/flutter.svg";
import php_img from "./assets/images/php.svg";
import java_img from "./assets/images/java.svg";
import mysql_img from "./assets/images/mysql.svg";
import aws_img from "./assets/images/aws.svg";
import mongo_img from "./assets/images/mongodb.svg";
import firebase_img from "./assets/images/firebase.svg";
import beauty_img from "./assets/images/beauty.png";
import react_components from "./assets/images/react_components.png";
import xbox_img from "./assets/images/xbox.png";
import travel_img from "./assets/images/travel.png";
import tinder_img from "./assets/images/tinder_itc.png";
import king_img from "./assets/images/king_style.png";
import auth_img from "./assets/images/auth_flutter.png";
import you_movie_img from "./assets/images/you_movie.png";
import calendar_img from "./assets/images/calendar.png";
import SelectLang from "./components/SelectLang";

import "./App.css";
import TimeLine from "./components/TimeLine";

const history = [
  {
    title: "Semsa",
    subTitle: "August 2023 – current",
    activities: [
      {
        name: "Custom ERP Development.",
        text: [
          "Designed and developed modules from scratch for both the frontend and backend.",
          "Implemented the user interface using React and Tailwind CSS, creating custom and responsive.",
          "Built and optimized complex queries in MySQL to improve database performance and efficiency.",
          "Ensured API security by implementing JWT authentication, activity logs, and database backup policies.",
          "Configured and managed cloud hosting using AWS, ensuring high availability and scalability.",
        ],
      },

      {
        name: "eCommerce Project Initiation.",
        text: [
          "Implemented user interfaces with React and Tailwind CSS, focusing on design and usability",
          "Designed the initial backend architecture using Node.js with Express and MongoDB, ensuring a solid foundation for system scalability and security.",
        ],
      },
    ],
  },

  {
    title: "Clever cloud CDMX ",
    subTitle: "August 2023 – December 2023",
    activities: [
      {
        name: "Desktop Software Developer Intern",
        text: [
          "Provided technical support and ongoing maintenance for a desktop point-of-sale application.",
          "Developed new modules and features based on specific client requirements.",
          "Implemented solutions using Java Swing for the graphical user interface and MySQL for data management.",
          "Used Git Bucket for version control, efficiently managing code changes.",
          "Optimized queries and database structures to improve system performance.",
        ],
      },
    ],
  },

  {
    title: "Instituto Tecnológico de Celaya",
    subTitle: "August 2022 – August 2023",
    activities: [
      {
        name: "Educational Software Developer",
        text: [
          "Developed an attendance and student management system focused on teachers.",
          "Implemented backend logic using PHP and MySQL for data management.",
          "Designed and optimized SQL queries to improve system performance and efficiency.",
          "Developed the mobile application using Flutter to ensure accessibility and ease of use.",
          "Implemented user authentication and access control in the system.",
          "Designed and implemented a REST API for communication between the frontend and backend.",
        ],
      },
    ],
  },
];

function App() {
  const [count, setCount] = useState(0);

  /* bg-[#030712d3]*/
  return (
    <>
      <header className="w-[100%] h-[60px] border-b	fixed border-slate-900 top-0 backdrop-blur-sm  bg-[#030712d3] z-[100] px-[32px]">
        <div className="h-[59px] max-[1439px]:w-full w-[1440px] absolute left-1/2 transform -translate-x-1/2 flex items-center justify-between px-8">
          <div className="flex items-center cursor-pointer">
            <img
              src={logo}
              alt="logo"
              className="h-[30px] w-[60px] pr-[1rem] object-cover"
            />
            <h2 className="logo max-[450px]:text-xs">Marco García</h2>
          </div>
          <ul className="flex space-x-6 items-center max-[800px]:hidden">
            <li className="flex items-center justify-center text-subTextColor space-x-2 cursor-pointer">
              <span>Home</span>
            </li>
            <li className="flex items-center justify-center text-subTextColor space-x-2 cursor-pointer">
              <span>About</span>
            </li>
            <li className="flex items-center justify-center text-subTextColor space-x-2 cursor-pointer">
              <span>Projects</span>
            </li>
            <li className="flex items-center justify-center text-subTextColor space-x-2 cursor-pointer">
              <span>Contact</span>
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <div className="mx-2">
            <SelectLang/>
            </div>
          
            <button class="bg-transparent border border-[#681798] shadow-md shadow-[#981792] px-8 py-2 rounded-lg cursor-pointer hover:bg-[#981792] max-[483px]:hidden">
              Resume
            </button>

            <button class="bg-transparent border border-[#681798] shadow-md shadow-[#981792] px-4 py-2 rounded-lg cursor-pointer hover:bg-[#981792] min-[484px]:hidden">
            <FaDownload />
            </button>
          </div>
        </div>
      </header>

      <section className=" min-[801px]:hidden  w-[calc(100%-64px)] left-1/2  -translate-x-1/2 h-[60px] border-b	fixed border-slate-900 bottom-0 backdrop-blur-sm  bg-[#030712d3] z-[100] px-[32px] rounded-2xl mx-auto my-4">
        <div className="flex items-center justify-between h-[60px]">
          <div className="text-lg flex items-center justify-between bg-[#030712] p-2 rounded-full cursor-pointer">
            <FaHouse />
          </div>

          <div className="text-lg flex items-center justify-between bg-[#030712] p-2 rounded-full cursor-pointer">
            <FaUserTie />
          </div>

          <div className="text-lg flex items-center justify-between bg-[#030712] p-2 rounded-full cursor-pointer">
            <FaFileCode />
          </div>

          <div className="text-lg flex items-center justify-between bg-[#030712] p-2 rounded-full cursor-pointer">
            <FaEnvelope />
          </div>
        </div>
      </section>

      <section className="w-full relative mt-[60px] mb-16 px-[64px] max-[900px]:px-[32px] max-[483px]:px-[16px] ">
        <div className="absolute inset-0 flex items-center max-[483px]:items-start  justify-center bg-[#02040ad3] blur-lg">
          <div className="w-full max-w-[1440px] h-[700px] mx-auto relative">
            <div className="">
              <img src={graph} alt="graph" />
            </div>
            <div className="absolute bottom-0 left-[200px]  max-[483px]:left-[50px]">
              <img src={graph1} alt="graph" />
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[1440px] h-[700px] max-[900px]:h-auto mx-auto z-10">
          <div className="w-full h-full flex items-start justify-between max-[900px]:flex-col">
            <div className="w-1/2 max-[900px]:w-full h-full flex items-center justify-start p-[64px] max-[900px]:p-32px] max-[483px]:p-[16px] ">
              <div className="w-full">
                <div className="h-[5px] rounded-2xl w-1/3 bg-white mb-4"></div>
                <h1 className="text-5xl font-extrabold mb-2 max-[521px]:text-3xl max-[483px]:text-5xl">
                  Nice to meet you, <br />
                  I'm Marco Garcia
                </h1>
                <p className="text-gray-400 mb-2">
                  Hi, I'm a passionate Web and Mobile Developer with experience
                  building dynamic, user-friendly websites and mobile
                  applications. I specialize in using modern technologies like
                  React, Flutter, and Node.js to create seamless user
                  experiences across platforms.
                </p>
                <div className="h-[1px] rounded-2xl w-full bg-white mb-2"></div>

                <div className="flex items-start justify-between max-[483px]:block max-[483px]:text-center">
                  <div className="mb-4">
                    <h1 className="text-5xl font-extrabold mb-2 max-[521px]:text-3xl max-[483px]:text-5xl">
                      3 <span className="text-cyan-700">+</span>
                    </h1>
                    <span className="text-xl ml-2 max-[521px]:text-lg max-[483px]:text-xl">
                      years of
                      <br />
                      experience
                    </span>
                  </div>

                  <div className="mb-4">
                    <h1 className="text-5xl font-extrabold mb-2 max-[521px]:text-3xl max-[483px]:text-5xl">
                      10 <span className="text-cyan-700">+</span>
                    </h1>
                    <span className="text-xl ml-2 max-[521px]:text-lg max-[483px]:text-xl">
                      years in
                      <br />
                      the field
                    </span>
                  </div>

                  <div className="mb-4">
                    <h1 className="text-5xl font-extrabold mb-2 max-[521px]:text-3xl max-[483px]:text-5xl">
                      10 <span className="text-cyan-700">+</span>
                    </h1>
                    <span className="text-xl ml-2 max-[521px]:text-lg max-[483px]:text-xl">
                      successful
                      <br />
                      projects
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 max-[900px]:w-full p-4 h-full flex items-center justify-center px-8">
              <div
                className="flex w-[450px] bg-[#681798] h-[450px] overflow-hidden max-[521px]:w-[350px] max-[521px]:h-[350px]   max-[483px]:w-[250px] max-[483px]:h-[250px]"
                style={{ borderRadius: "50%" }}
              >
                <img
                  src="https://scdn.posemaniacs.com/generated-photos/5e010aeb7b1b300007ea9e5d_transparent_352x352.webp"
                  alt="photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mb-32">
        <div className="flex items-center justify-center">
          <div className="w-1/2 max-[900px]:w-2/3 max-[483px]:w-4/5 h-full flex-col items-center justify-center backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg rounded-2xl px-[64px] max-[900px]:px-[32px] max-[483px]:px-[16px]">
            <div className="h-[5px] rounded-2xl w-1/3 bg-white mb-4 mx-auto"></div>
            <h2 className="text-3xl font-extrabold mb-2 max-[521px]:text-2xl max-[483px]:text-2xl text-center">
              About Me
            </h2>
            <p className="text-gray-200 mb-2 text-lg leading-relaxed">
              I am a passionate Systems Engineer, graduated from the Tecnológico
              Nacional de México in Celaya, and a Programming Technician from
              CETIS No. 115. With over 10 years of experience in software and
              database development, and more than three years in the
              professional field, I have worked in various areas of
              technological developments. <br /> <br />
              I specialize in web and mobile development, using technologies
              such as JavaScript, React, PHP, and Java. I have had the
              opportunity to collaborate with software companies, private
              enterprises, educational institutions, and freelance projects,
              allowing me to strengthen my skills in different environments and
              teams. <br /> <br />
              Additionally, I have experience in teaching, sharing knowledge,
              and helping train new generations of developers. My focus is on
              creating efficient, innovative, and scalable solutions, always
              striving to enhance user experience and optimize the performance
              of every project I work on.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center flex-col px-6 md:px-8">
        <div className="h-[5px] rounded-2xl w-1/3 bg-white mb-4 mx-auto"></div>
        <h2 className="text-3xl font-extrabold mb-2 max-[521px]:text-2xl max-[483px]:text-2xl text-center">
          About Me
        </h2>
        {history.map((item, index) => {
          return (
            <TimeLine
              isRight={index % 2 === 0}
              isLeft={!(index % 2 === 0)}
              title={item.title}
              subTitle={item.subTitle}
              list={item.activities}
            />
          );
        })}
      </section>

      <section className="w-full flex items-center justify-center flex-col bg-[#02040ad3] py-[128px] max-[900px]:py-[64px] max-[483px]:py-[32px]">
        <div className="h-[5px] rounded-2xl w-1/3 bg-white mb-4 mx-auto"></div>
        <h2 className="text-3xl font-extrabold mb-2 max-[521px]:text-2xl max-[483px]:text-2xl text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 max-[383px]:grid-cols-1 max-[540px]:grid-cols-2 max-[768px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 gap-[32px] p-4 w-full max-w-[1440px] px-[64px] max-[900px]:px-[32px] max-[483px]:px-[16px]">
          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl ">
            <div className="relative h-40">
              <img
                src={node_img}
                alt="nodejs"
                className="object-cover w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>

          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl">
            <div className="relative h-40">
              <img
                src={js_img}
                alt="js"
                className="object-cover w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>

          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl">
            <div className="relative h-40">
              <img
                src={html_img}
                alt="html"
                className="object-fill w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>

          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl">
            <div className="relative h-40">
              <img
                src={css_img}
                alt="css"
                className="object-fill w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>

          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl">
            <div className="relative h-40">
              <img
                src={tailwind_img}
                alt="flutter"
                className="object-fill w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>

          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl">
            <div className="relative h-40">
              <img
                src={flutter_img}
                alt="flutter"
                className="object-fill w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>

          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl">
            <div className="relative h-40">
              <img
                src={php_img}
                alt="php"
                className="object-fill w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>

          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl">
            <div className=" bg-transparent relative h-40">
              <img
                src={java_img}
                alt="java"
                className="object-fill w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>

          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl">
            <div className=" bg-transparent relative h-40">
              <img
                src={mysql_img}
                alt="mysql"
                className="object-fill w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>

          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl">
            <div className=" bg-transparent relative h-40">
              <img
                src={mongo_img}
                alt="mongo"
                className="object-fill w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>

          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl">
            <div className=" bg-transparent relative h-40">
              <img
                src={firebase_img}
                alt="firebase"
                className="object-fill w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>

          <div className="bg-transparent  overflow-hidden flex items-center justify-center rounded-xl">
            <div className=" bg-transparent relative h-40">
              <img
                src={aws_img}
                alt="aws"
                className="object-fill w-full h-full shadow-lg img-skill rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center flex-col py-[128px] max-[900px]:py-[64px] max-[483px]:py-[32px]">
        <div className="h-[5px] rounded-2xl w-1/3 bg-white mb-4 mx-auto"></div>
        <h2 className="text-3xl font-extrabold mb-2 max-[521px]:text-2xl max-[483px]:text-2xl text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-[32px] w-full max-w-[1440px] px-[64px] max-[900px]:px-[32px] max-[483px]:px-[16px]">
          <div className="max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg  rounded-lg">
            <a href="#">
              <img className="rounded-t-lg" src={beauty_img} alt="beauty" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Beauty responsive site
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Beauty is a responsive landing page for natural beauty cosmetic
                products.
              </p>

              <div className="w-full flex items-center justify-start">
                <div className="flex items-center justify-start">
                  <div className="m-2">
                    <img src={html_img} alt="html" className="h-10 w-10" />
                  </div>

                  <div className="m-2">
                    <img src={css_img} alt="css" className="h-10 w-10" />
                  </div>

                  <div className="m-2">
                    <img src={js_img} alt="js" className="h-10 w-10" />
                  </div>
                </div>

                <div className="flex items-center justify-end w-1/2">
                  <FaGithub className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg  rounded-lg">
            <a href="#">
              <img className="rounded-t-lg" src={xbox_img} alt="beauty" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Beauty responsive site
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Beauty is a responsive landing page for natural beauty cosmetic
                products.
              </p>

              <div className="w-full flex items-center justify-start">
                <div className="m-2">
                  <img src={html_img} alt="html" className="h-10 w-10" />
                </div>

                <div className="m-2">
                  <img src={css_img} alt="css" className="h-10 w-10" />
                </div>

                <div className="m-2">
                  <img src={js_img} alt="js" className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg  rounded-lg">
            <a href="#">
              <img
                className="rounded-t-lg"
                src={react_components}
                alt="react_components"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  React components
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                React Components is a project that focuses on componentizing the
                most commonly used elements on a web page.
              </p>

              <div className="w-full flex items-center justify-start">
                <div className="m-2">
                  <img src={reactLogo} alt="html" className="h-10 w-10" />
                </div>

                <div className="m-2">
                  <img src={html_img} alt="html" className="h-10 w-10" />
                </div>

                <div className="m-2">
                  <img src={css_img} alt="css" className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg  rounded-lg">
            <a href="#">
              <img className="rounded-t-lg" src={travel_img} alt="beauty" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg  rounded-lg">
            <a href="#">
              <img className="rounded-t-lg" src={tinder_img} alt="beauty" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg  rounded-lg">
            <a href="#">
              <img className="rounded-t-lg" src={king_img} alt="beauty" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg  rounded-lg">
            <a href="#">
              <img className="rounded-t-lg" src={auth_img} alt="beauty" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg  rounded-lg">
            <a href="#">
              <img className="rounded-t-lg" src={you_movie_img} alt="beauty" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg  rounded-lg">
            <a href="#">
              <img className="rounded-t-lg" src={calendar_img} alt="beauty" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center flex-col  bg-[#02040ad3] relative overflow-hidden">
        <div className="absolute -bottom-[5%] left-[17%]   h-[20%] bg-[#080f24] w-[20%] nube"></div>
        <div className="absolute -bottom-[10%] left-[30%]   h-[30%] bg-[#080f24] w-[20%] nube"></div>

        <div className="absolute -bottom-[10%] right-[0%]   h-[30%] bg-[#080f24] w-[20%] nube"></div>
        <div className="absolute -bottom-[10%] -right-[10%]   h-[30%] bg-[#080f24] w-[20%] nube"></div>

        <div className="absolute -bottom-[10%] -left-[5%]   h-[20%] bg-[#030712] w-[20%] nube"></div>
        <div className="absolute -bottom-[7.5%] left-[10%]  h-[15%] bg-[#030712] w-[20%] nube"></div>
        <div className="absolute -bottom-[12.5%] left-[25%]  h-[25%] bg-[#030712] w-[30%] nube"></div>
        <div className="absolute -bottom-[15%] left-[50%]  h-[30%] bg-[#030712] w-[40%] nube"></div>
        <div className="absolute -bottom-[12.5%] left-[75%]  h-[25%] bg-[#030712] w-[30%] nube"></div>

        <div className="absolute bottom-1/4  right-[400px]  max-[483px]:left-[50px]">
          <img src={graph4} alt="graph" className="w-[450px] h-[450px]" />
        </div>
        <div className="absolute bottom-1/3  right-[200px]  max-[483px]:left-[50px]">
          <img src={graph3} alt="graph" className="w-[450px] h-[450px]" />
        </div>

        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r w-full max-w-[1440px]">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg rounded-2xl p-12  w-full">
            <h2 className="text-white text-2xl font-semibold text-center mb-4">
              Contact
            </h2>
            <form>
              <div className="mb-6 flex justify-between items-start">
                <div className="w-1/2 px-8">
                  <label className="block text-white/80 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/50 rounded-lg border border-white/30 focus:ring-2 focus:ring-[#681798] focus:outline-none"
                  />
                </div>

                <div className="w-1/2 px-8">
                  <label class="block text-white/80 text-sm mb-2">Email</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/50 rounded-lg border border-white/30 focus:ring-2 focus:ring-[#681798] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-6 flex justify-between items-start">
                <div className="w-1/2 px-8">
                  <label className="block text-white/80 text-sm mb-2">
                    phone number
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/50 rounded-lg border border-white/30 focus:ring-2 focus:ring-[#681798] focus:outline-none"
                  />
                </div>

                <div className="w-1/2 px-8">
                  <label class="block text-white/80 text-sm mb-2">
                    subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/50 rounded-lg border border-white/30 focus:ring-2 focus:ring-[#681798] focus:outline-none"
                  />
                </div>
              </div>

              <div className="px-8 mb-4">
                <label class="block text-white/80 text-sm mb-2">subject</label>
                <textarea
                  rows="4"
                  class="w-full px-4 py-2 bg-white/20 text-white placeholder-white/50 rounded-lg border border-white/30 focus:ring-2 focus:ring-[#681798] focus:outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex flex-row-reverse justify-start items-start px-8">
                <button class="bg-[#681798] shadow-lg shadow-[#981792] px-8 py-2 rounded-lg cursor-pointer hover:bg-[#981792]">
                  Contact
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center flex-col h-[1000px]  relative overflow-hidden"></section>
    </>
  );
}

export default App;
