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
  FaLinkedin,
  FaFacebook,
  FaDownload,
} from "react-icons/fa6";
import logo from "./assets/images/logo.png";
import user from "./assets/images/user.png";
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

function App() {
  return (
    <>
      <header className="container h-[60px] ">
        <div className="div-nav h-full w-full rounded-full  px-8 py-2 flex justify-between items-center">
          <div className="w-12 h-12">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>

          <ul className="flex gap-1">
            <li>
              <button className="px-6 py-2 rounded-xl item-li">Home</button>
            </li>
            <li>
              <button className="px-6 py-2 rounded-xl item-li">Services</button>
            </li>
            <li>
              <button className="px-6 py-2 rounded-xl item-li">About me</button>
            </li>
            <li>
              <button className="px-6 py-2 rounded-xl item-li">Projects</button>
            </li>
            <li>
              <button className="px-6 py-2 rounded-xl item-li">Contact</button>
            </li>
          </ul>
          <div></div>
        </div>
      </header>

      <section className="w-screen mb-32">
        {/* orange */}
        <div className="container container-row">
          {/* red */}
          <div className="w-full  bg-white">
            <div className="flex w-fit px-4 py-2 border border-black">
              <h1>¡HOLA!</h1>
            </div>

            <div className="mt-[1.5rem] border border-black px-4 py-2">
              <h1 className="h1-font-size">
                I'm{" "}
                <span className="text-[var(--first-color)]">Marco García,</span>
              </h1>
              <h1 className="biggest-font-size mb-8">
                Web and movil developer
              </h1>
              <p className="normal-font-size text-[var(--sub-text-color)] mb-4">
                Hi, I'm a passionate Web and Mobile Developer with experience
                building dynamic, user-friendly websites and mobile
                applications. I specialize in using modern technologies like
                React, Flutter, and Nodejs to create seamless user experiences
                across platforms.
              </p>
              <div className="h-[2px] bg-[var(--sub-text-color)] mb-4"></div>
              <div className="grid-info-header mb-4">
                <div className="w-full flex flex-col justify-center items-center">
                  <p className="h1-font-size">
                    <b>3</b>{" "}
                    <span className="text-[var(--second-color)]">+</span>
                  </p>
                  <p className="normal-font-size">
                    Year of <br />
                    experiences
                  </p>
                </div>

                <div className="w-full flex flex-col justify-center items-center">
                  <p className="h1-font-size">
                    <b>6</b>{" "}
                    <span className="text-[var(--second-color)]">+</span>
                  </p>
                  <p className="normal-font-size">
                    Year in <br />
                    the field
                  </p>
                </div>

                <div className="w-full flex flex-col justify-center items-center">
                  <p className="h1-font-size">
                    <b>10</b>{" "}
                    <span className="text-[var(--second-color)]">+</span>
                  </p>
                  <p className="normal-font-size">
                    {" "}
                    Successful
                    <br />
                    Projects
                  </p>
                </div>
              </div>

              <div className="flex flex-row-reverse gap-4">
                <div className="relative group  overflow-hidden border w-12 h-12 rounded-full flex justify-center items-center cursor-pointer box-shadow">
                  <FaGithub className="w-3/4 h-3/4 text-[var(--first-color)]" />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-[#d7266d7c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  <div className="absolute bottom-4 left-4 text-white z-10"></div>
                </div>

                <div className="relative group  overflow-hidden border w-12 h-12 rounded-full flex justify-center items-center cursor-pointer box-shadow">
                  <FaLinkedin className="w-3/4 h-3/4 text-[var(--first-color)]" />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-[#d7266d7c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  <div className="absolute bottom-4 left-4 text-white z-10"></div>
                </div>

                <div className="relative group  overflow-hidden border w-12 h-12 rounded-full flex justify-center items-center cursor-pointer box-shadow">
                  <FaFacebook className="w-3/4 h-3/4 text-[var(--first-color)]" />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-[#d7266d7c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  <div className="absolute bottom-4 left-4 text-white z-10"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative overflow-hidden">
            {" "}
            {/* green*/}
            <img
              src={graph1}
              alt="graph1"
              className="absolute -bottom-24 w-full -z-[1]"
            />
            <div className="w-full h-full flex flex-col justify-end items-center">
              <div className="h-full w-full">
                <img
                  src={user}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        
        
      </section>

      <section className="w-screen">
        <div className="container">
        <h1 className="h1-font-size text-[var(--first-color)] mb-8">My services</h1>

        <div className="grid-services gap-8">
          <div className=" bg-red-800 rounded-xl  h-80">
            
          </div>

          <div className=" bg-red-800 rounded-xl  h-80"></div>

          <div className=" bg-red-800 rounded-xl  h-80"></div>

        </div>


          

        </div>
      </section>
    </>
  );
}

export default App;

/* 
<div className="container-w-full h-[500px] bg-red-600">
       <div className="container h-[200px] bg-black">
        <h1 className="biggest-font-size">Hola</h1>
       </div>
    </div>



    <div className="w-[550px] h-[550px] blur-xl">
            <img src={graph1} alt="graph1" className="w-full h-full"/>
          </div>
          <div className="w-[550px] h-[550px] blur-xl">
            <img src={graph} alt="graph2" className="w-full h-full"/>
          </div>
*/
