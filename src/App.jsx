import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHouse, FaUserTie, FaFileCode, FaEnvelope } from "react-icons/fa6";
import logo from "./assets/images/logo.png";
import graph from "./assets/images/graph.png";
import graph1 from "./assets/images/graph (1).png";
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
          <div>
            <button className="btn hover:bg-gradient-to-r from-violet-700 to-purple-900 transition-all py-[4px] px-[16px] border border-subTextColor rounded-sm hover:border-transparent max-[450px]:text-xs">
              Donwload CV
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

      <section className="w-full relative mt-[60px] mb-16">
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
            <div className="w-1/2 max-[900px]:w-full max-[900px]:px-40 max-[648px]:px-24 p-4 h-full flex items-center justify-start px-8">
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
          <div className="w-1/2  h-full flex-col items-center justify-center px-8 bg-[#02040ad3] m-8 py-4 rounded-lg backdrop-blur-3xl">
            <div className="h-[5px] rounded-2xl w-1/3 bg-white mb-4 mx-auto"></div>
            <h2 className="text-2xl font-extrabold mb-2 max-[521px]:text-3xl max-[483px]:text-5xl text-center">
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

      <section className="w-full flex items-center justify-center flex-col">
        <div className="h-[5px] rounded-2xl w-1/3 bg-white mb-4 mx-auto"></div>
        <h2 className="text-2xl font-extrabold mb-2 max-[521px]:text-3xl max-[483px]:text-5xl text-center">
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

      <section className="w-full flex items-center justify-center flex-col">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
            <div class="relative h-48">
              <img
                src="https://via.placeholder.com/150"
                alt="Image 1"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold">Card Title 1</h3>
              <p class="text-gray-600">
                Some description or content for the card.
              </p>
            </div>
          </div>

          <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
            <div class="relative h-48">
              <img
                src="https://via.placeholder.com/150"
                alt="Image 2"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold">Card Title 2</h3>
              <p class="text-gray-600">
                Some description or content for the card.
              </p>
            </div>
          </div>

          <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
            <div class="relative h-48">
              <img
                src="https://via.placeholder.com/150"
                alt="Image 3"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold">Card Title 3</h3>
              <p class="text-gray-600">
                Some description or content for the card.
              </p>
            </div>
          </div>

          <div class="bg-white border rounded-lg shadow-lg overflow-hidden">
            <div class="relative h-48">
              <img
                src="https://via.placeholder.com/150"
                alt="Image 4"
                class="object-cover w-full h-full"
              />
            </div>
            <div class="p-4">
              <h3 class="text-xl font-semibold">Card Title 4</h3>
              <p class="text-gray-600">
                Some description or content for the card.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
