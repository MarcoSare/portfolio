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
        <TimeLine
          isRight={true}
          title="Semsa"
          subTitle="2023"
          text="I specialize in web and mobile development, using technologies such as JavaScript, React, PHP, and Java. I have had the opportunity to collaborate with software companies, private enterprises, educational institutions, and freelance projects, allowing me to strengthen my skills in different environments and teams."
        />
        <TimeLine
          isLeft={true}
          title="Semsa"
          subTitle="2023"
          text="I specialize in web and mobile development, using technologies such as JavaScript, React, PHP, and Java. I have had the opportunity to collaborate with software companies, private enterprises, educational institutions, and freelance projects, allowing me to strengthen my skills in different environments and teams."
        />
      </section>
    </>
  );
}

export default App;
