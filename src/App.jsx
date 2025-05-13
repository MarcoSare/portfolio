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
  FaDownload,
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

function App() {
  return (
    <>
      <header className="container h-[60px] ">
        <div className="div-nav h-full w-full rounded-full  px-8 py-2 flex justify-between items-center">
          <div className="w-12 h-12">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>

          <ul className="flex gap-1">
            <li><button className="px-6 py-2 rounded-xl item-li">Home</button></li>
            <li><button className="px-6 py-2 rounded-xl item-li">Services</button></li>
             <li><button className="px-6 py-2 rounded-xl item-li">About me</button></li>
             <li><button className="px-6 py-2 rounded-xl item-li">Projects</button></li>
             <li><button className="px-6 py-2 rounded-xl item-li">Contact</button></li>
          </ul>
          <div></div>
        </div>
      </header>

      <section className="w-screen h-[900px] bg-orange-400 ">
        <div className="container container-row h-[900px] bg-red-700">
          <div className="w-full h-[900px] bg-yellow-400">
            <h1>Hola</h1>
          </div>
          <div className="w-full h-[900px] bg-green-600"></div>

          

          



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
