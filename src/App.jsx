import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Marquee from "react-fast-marquee";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaHouse,
  FaUserTie,
  FaFileCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaCode,
  FaCodeBranch,
  FaAndroid,
  FaDatabase,
  FaCloud,
  FaToolbox,
  FaCircleUser,
  FaLeftLong,
  FaRightLong,
  FaDownload,
  FaLaptop,
  FaUser, 
  FaCopy 

} from "react-icons/fa6";
import logo from "./assets/images/logo.png";
import user from "./assets/images/user.png";
import graph from "./assets/images/graph.png";
import graph1 from "./assets/images/graph (1).png";
import graph3 from "./assets/images/graph_3.svg";
import graph4 from "./assets/images/graph_4.svg";
import node_img from "./assets/images/nodejs.svg";
import js_img from "./assets/images/js.svg";
import ts_img from "./assets/images/ts.png";
import react_img from "./assets/images/react.png";
import html_img from "./assets/images/html.svg";
import css_img from "./assets/images/css.svg";
import tailwind_img from "./assets/images/tailwind.svg";
import postgresql_img from "./assets/images/postgresql.svg";

import flutter_img from "./assets/images/flutter.svg";
import dart_img from "./assets/images/dart.png";
import php_img from "./assets/images/php.svg";
import laravel_img from "./assets/images/laravel.png";
import java_img from "./assets/images/java.svg";
import mysql_img from "./assets/images/mysql.svg";
import aws_img from "./assets/images/aws.svg";
import mongo_img from "./assets/images/mongodb.svg";
import firebase_img from "./assets/images/firebase.svg";

import nextjs_img from "./assets/images/nextjs.svg";
import swift_img from "./assets/images/swift.png";
import beauty_img from "./assets/images/beauty.png";
import react_components from "./assets/images/react_components.png";
import xbox_img from "./assets/images/xbox.png";
import travel_img from "./assets/images/travel.png";
import tinder_img from "./assets/images/tinder_itc.png";
import tinder_img_2 from "./assets/images/tinder_itc_2.png";
import tinder_img_3 from "./assets/images/tinder_itc_3.png";
import king_img from "./assets/images/king_style.png";
import auth_img from "./assets/images/auth_flutter.png";
import you_movie_img from "./assets/images/you_movie.png";
import you_movie_img_2 from "./assets/images/you_movie_2.png";
import you_movie_img_3 from "./assets/images/you_movie_3.png";
import calendar_img from "./assets/images/calendar.png";
import quotation_img from "./assets/images/quotation.png";
import semsa_logo from "./assets/images/semsa_logo.png";

import SelectLang from "./components/SelectLang";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";
import TimeLine from "./components/TimeLine";
import TestimonialSlide from "./components/TestimonialSlide";

import english from "./assets/languajes/englis.json";
import spanish from "./assets/languajes/spanish.json";
import CardProject from "./components/CardProject";




const skills = {
  Frontend: [html_img, css_img, js_img, ts_img, react_img, tailwind_img],
  Backend: [node_img, php_img, laravel_img, java_img],
  DataBase: [mysql_img, mongo_img, postgresql_img],
  "Mobile App Development": [flutter_img, dart_img, java_img],
  DevOps: [aws_img, firebase_img],
  Learning: [swift_img, nextjs_img],
};

const skillsImg = [
  html_img,
  css_img,
  js_img,
  ts_img,
  react_img,
  tailwind_img,
  node_img,
  php_img,
  laravel_img,
  java_img,
  mysql_img,
  mongo_img,
  postgresql_img,
  flutter_img,
  aws_img,
  firebase_img,
];

function App() {
  const [languaje, setLanguaje] = useState(english);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1098);

  const [showAllPro, setShowAllPro] = useState(false);

  const maxProjects = 6;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1098);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (swiper) => {
    //console.log("holaaaa", swiper.realIndex);
    setActiveIndex(swiper.realIndex);
  };

  const iconsServices = {
    front: (
      <FaCode className="text-[var(--first-color)] biggest-font-size mb-4" />
    ),
    back: (
      <FaCodeBranch className="text-[var(--first-color)] biggest-font-size mb-4" />
    ),
    app: (
      <FaAndroid className="text-[var(--first-color)] biggest-font-size mb-4" />
    ),
    db: (
      <FaDatabase className="text-[var(--first-color)] biggest-font-size mb-4" />
    ),
    ops: (
      <FaCloud className="text-[var(--first-color)] biggest-font-size mb-4" />
    ),
    man: (
      <FaToolbox className="text-[var(--first-color)] biggest-font-size mb-4" />
    ),
  };

  return (
    <>
      <header className="w-full h-[60px] div-nav fixed top-0 z-50">
        <div className="container  h-full w-full   px-8 py-2 flex justify-between items-center">
          <div className="w-12 h-12">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>

          <ul className="flex gap-1 max-[768px]:hidden">
            <li>
              <button className="px-6 py-2 rounded-xl item-li">
                {languaje.header.home}
              </button>
            </li>
            <li>
              <button className="px-6 py-2 rounded-xl item-li">
                {languaje.header.about}
              </button>
            </li>
            <li>
              <button className="px-6 py-2 rounded-xl item-li">
                {languaje.header.projects}
              </button>
            </li>
            <li>
              <button className="px-6 py-2 rounded-xl item-li">
                {languaje.header.services}
              </button>
            </li>
            <li>
              <button className="px-6 py-2 rounded-xl item-li">
                {languaje.header.contact}
              </button>
            </li>
          </ul>
          <div>
            <SelectLang
              onChange={(lan) => {
                //console.log('está en inglés: ', lan)
                const lang = lan ? english : spanish;
                setLanguaje(lang);
              }}
            />
          </div>
        </div>
      </header>

      <section className="w-full h-[60px] div-nav fixed bottom-0 z-50 max-w-[650px] left-1/2 -translate-x-1/2 mb-2 rounded-xl px-4 max-[650px]:w-[calc(100%-2rem)] hidden max-[768px]:block">
        <div className="container flex justify-between items-center h-full">
          <div className="h-full w-16  flex items-center justify-center">
            <FaHouse className="h-full w-1/2" />
          </div>

          <div className="h-full w-16  flex items-center justify-center">
            <FaUserTie className="h-full w-1/2" />
          </div>

          <div className="h-full w-16  flex items-center justify-center">
            <FaLaptop className="h-full w-1/2" />
          </div>

          <div className="h-full w-16  flex items-center justify-center">
            <FaCode className="h-full w-1/2" />
          </div>

          <div className="h-full w-16  flex items-center justify-center">
            <FaEnvelope className="h-full w-1/2" />
          </div>
        </div>
      </section>

      <section className="w-full mb-32 mt-[60px] pt-16 ">
        {/* orange 
        <div class="blur-bg"></div>
        <div class="blur-bg-2"></div>
        
        */}

        {/* checar*/}
        <div className="container">
          {/* red */}
          <div className="container-row">
            <div className="w-full  flex flex-col items-start justify-center h-full relative !z-[1]">
              <div className="blur-bg pointer-events-none"></div>
              <div className="relative border border-white px-4 py-2 w-fit typewriter-wrapper">
                <div className="h-3 w-3 bg-white absolute -top-[6px] -left-[6px]" />
                <div className="h-3 w-3 bg-white absolute -top-[6px] -right-[6px]" />
                <div className="h-3 w-3 bg-white absolute -bottom-[6px] -right-[6px]" />
                <div className="h-3 w-3 bg-white absolute -bottom-[6px] -left-[6px]" />
                <h1 className="typewriter h1-font-size">
                  {languaje.hero.sayHi}
                </h1>
              </div>

              <div className="mt-[1.5rem]  px-4 py-2">
                <h1 className="h1-font-size">
                  {languaje.hero.p1}{" "}
                  <span className="text-[var(--first-color)]">
                    Marco García,
                  </span>
                </h1>
                <h1 className="biggest-font-size mb-8">{languaje.hero.p2}</h1>
                <p className="normal-font-size text-[var(--sub-text-color)] mb-4">
                  {languaje.hero.desc}
                </p>
                <div className="h-[2px] bg-[var(--sub-text-color)] mb-4"></div>
                <div className="grid-info-header mb-4">
                  <div className="w-full flex flex-col justify-center items-center">
                    <p className="h1-font-size">
                      <b>3</b>{" "}
                      <span className="text-[var(--second-color)]">+</span>
                    </p>
                    <p className="normal-font-size">
                      {languaje.hero.yearExp[0]}
                      <br />
                      {languaje.hero.yearExp[1]}
                    </p>
                  </div>

                  <div className="w-full flex flex-col justify-center items-center">
                    <p className="h1-font-size">
                      <b>6</b>{" "}
                      <span className="text-[var(--second-color)]">+</span>
                    </p>
                    <p className="normal-font-size">
                      {languaje.hero.yearField[0]}
                      <br />
                      {languaje.hero.yearField[1]}
                    </p>
                  </div>

                  <div className="w-full flex flex-col justify-center items-center">
                    <p className="h1-font-size">
                      <b>10</b>{" "}
                      <span className="text-[var(--second-color)]">+</span>
                    </p>
                    <p className="normal-font-size">
                      {languaje.hero.projects[0]}
                      <br />
                      {languaje.hero.projects[1]}
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
                className="absolute -bottom-24 w-full -z-[1] background-shape"
              />
              <div className="w-full h-full flex flex-col justify-center items-center z-10">
                <img
                  src={user}
                  alt="user"
                  className="w-full h-full object-fill img-user "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mb-32 pb-8 bg-[var(--second-body-color)] pt-32 max-[768px]:pt-16">
        <div className="container ">
          <h1 className="h1-font-size text-[var(--first-color)] text-center">
            <b>{languaje.about.title}</b>
          </h1>

          <div className="flex justify-center items-center mb-8">
            <div className="h-1 w-1/3 bg-white rounded-xl"></div>
          </div>

          <div className="container-row mb-8">
            <div className="flex flex-col justify-center items-center">
              <div className="h-[400px] w-[400px] bg-white rounded-circular overflow-hidden max-[600px]:!h-4/5 max-[600px]:!w-4/5">
                <img
                  src={user}
                  alt="user"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-start px-12 relative">
              <h2 className="h2-font-size text-[var(--first-color-alt)] mb-8 z-10">
                <b>{languaje.about.subtitle}</b>{" "}
              </h2>
              <p className="normal-font-size mb-4 z-10">
                {languaje.about.desc[0]} <br /> <br /> {languaje.about.desc[1]}
              </p>

              <button
                type="button"
                class="text-white bg-[var(--first-color)] hover:bg-[var(--second-color)] focus:outline-none focus:ring-4 focus:ring-[var(--second-color-alt)] font-medium rounded-full px-8 py-2.5 text-center me-2 mb-2 z-10"
              >
                {languaje.buttons.resume}
              </button>
            </div>
          </div>

          <div>
            {languaje.about.history.map((item, index) => {
              return (
                <TimeLine
                  isRight={index % 2 === 0}
                  isLeft={!(index % 2 === 0)}
                  title={item.title}
                  subTitle={item.subTitle}
                  list={item.activities}
                  image={item.imagen}
                  page={item.page}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-screen mb-32">
        <div className="container relative">
          <h1 className="h1-font-size text-[var(--first-color)] text-center">
            <b>{languaje.projects.title}</b>
          </h1>

          <div className="flex justify-center items-center mb-8">
            <div className="h-1 w-1/3 bg-white rounded-xl"></div>
          </div>

          <div className="max-w-3xl mx-auto px-4 py-12 text-center">
            <p className="normal-font-size">{languaje.projects.desc}</p>
          </div>

          <div className="grid-projects">
            {languaje.projects.list.map((project, index) => {
              if (showAllPro) {
                return <CardProject project={project} index={index} />;
              } else {
                if (index < maxProjects) {
                  return <CardProject project={project} index={index} />;
                }
              }
            })}
          </div>

          <div className="text-center">
            <button
              type="button"
              class="text-white bg-[var(--first-color)] hover:bg-[var(--second-color)] focus:outline-none focus:ring-4 focus:ring-[var(--second-color-alt)] font-medium rounded-full px-8 py-2.5 text-center me-2 mb-2 z-10"
              onClick={() => {
                setShowAllPro(!showAllPro);
              }}
            >
              {languaje.buttons.showAll}
            </button>
          </div>

          <div className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="h2-font-size text-[var(--first-color-alt)] font-bold mb-8 text-center">
              {languaje.projects.subtitle}
            </h2>

            <div className="max-w-3xl mx-auto px-4 py-12 text-center">
              <p className="small-font-size text-[var(--sub-text-color)]">
                {languaje.projects.skillsDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-[var(--second-body-color)]  shadow rounded-2xl p-6 relative"
                >
                  <div className="blur-bg-3"></div>
                  <h3 className="h3-font-size text-[var(--text-color)] mb-4">
                    <b>{category}</b>
                  </h3>
                  <ul className="flex flex-wrap gap-4">
                    {items.map((skill) => (
                      <img
                        alt="skill"
                        src={skill}
                        className="w-12 h-12 object-cover"
                      ></img>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen mb-32 bg-[var(--second-body-color)] pt-32 max-[768px]:pt-16 pb-20">
        <div className="container relative">
          <h1 className="h1-font-size text-[var(--first-color)] text-center">
            <b>{languaje.services.title}</b>
          </h1>

          <div className="flex justify-center items-center mb-8">
            <div className="h-1 w-1/3 bg-white rounded-xl"></div>
          </div>

          <div className="max-w-3xl mx-auto px-4 py-12 text-center">
            <p className="normal-font-size">{languaje.services.desc}</p>
          </div>

          <div className="grid-services gap-8 mb-16">
            {languaje.services.list.map((service) => {
              return (
                <div className="bg-[var(--body-color)] rounded-xl  min-h-[300px] flex flex-col items-start justify-start px-8 py-12 relative">
                  {/* <div className="blur-bg-4"></div> */}
                  {iconsServices[service.icon]}
                  <h2 className="h3-font-size mb-4">
                    <b>{service.name}</b>
                  </h2>
                  <p className="small-font-size text-[var(--sub-text-color)]">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full">
            <h2 className="h2-font-size text-[var(--first-color-alt)] font-bold mb-8 text-center">
             {languaje.services.subtitle}
            </h2>
            <div className="max-w-3xl mx-auto px-4 py-12 text-center">
              <p className="small-font-size text-[var(--sub-text-color)]">
                {languaje.services.testDesc}
              </p>
            </div>

            <div className="flex justify-center container relative">
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-8">
                <button className="custom-prev p-3 bg-[var(--first-color)] backdrop-blur-md rounded-full hover:bg-[var(--second-color)] transition">
                  <FaLeftLong className="h2-font-size text-white" />
                </button>
                <button className="custom-next p-3 bg-[var(--first-color)] backdrop-blur-md rounded-full hover:bg-[var(--second-color)] transition">
                  <FaRightLong className="h2-font-size text-white" />
                </button>
              </div>
              <Swiper
                spaceBetween={10}
                slidesPerView="auto"
                centeredSlides={true}
                loop={true}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                autoplay={{
                  delay: 10000, // 15 segundos
                  disableOnInteraction: false, // sigue después de interacción
                }}
                modules={[Pagination, Navigation, Autoplay]}
                onSlideChange={handleSlideChange}
                className="w-full"
              >
                {languaje.services.testimonials.map((testimonial, index) => {
                  return (
                    <SwiperSlide
                      style={{
                        width: isMobile ? "100%" : "800px",
                      }}
                    >
                      <TestimonialSlide
                        testimonial={testimonial}
                        activeIndex={index}
                        isMobile={isMobile}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen mb-32">
        <div className="container relative">
          <div class="blur-bg-3 pointer-events-none"></div>
          <h1 className="h1-font-size text-[var(--first-color)] text-center">
            <b>{languaje.contact.title}</b>
          </h1>

          <div className="flex justify-center items-center mb-8">
            <div className="h-1 w-1/3 bg-white rounded-xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-12">
            <form className="bg-[var(--second-body-color)] shadow-md rounded-2xl p-6 space-y-6">
              <div>
                <label htmlFor="name" className="">
                  {languaje.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full border-2 border-[var(--body-color)] bg-[var(--body-color)] rounded-xl shadow-sm px-4 py-2 focus:border-[var(--first-color-alt)] focus:outline-none"
                  placeholder={languaje.contact.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="">
                  {languaje.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border-2 border-[var(--body-color)] bg-[var(--body-color)] rounded-xl shadow-sm px-4 py-2 focus:border-[var(--first-color-alt)] focus:outline-none"
                  placeholder={languaje.contact.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="">
                  {languaje.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full border-2 border-[var(--body-color)] bg-[var(--body-color)] rounded-xl shadow-sm px-4 py-2 focus:border-[var(--first-color-alt)] focus:outline-none"
                  placeholder={languaje.contact.messagePlaceholder}
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  class="text-white bg-[var(--first-color)] hover:bg-[var(--second-color)] focus:outline-none focus:ring-4 focus:ring-[var(--second-color-alt)] font-medium rounded-full px-8 py-2.5 text-center me-2 mb-2 z-10"
                >
                  {languaje.buttons.send}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[--second-body-color] text-gray-300 px-6 py-10 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h3 className="font-bold text-[var(--text-color)] mb-2">MarcoSare.dev</h3>
            <p className="smaller-font-size text-[var(--sub-text-color)]">
              {languaje.footer.desc}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-bold text-[var(--text-color)] mb-2">{languaje.footer.subtitle2}</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#inicio" className="hover:underline smaller-font-size text-[var(--sub-text-color)]">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#proyectos" className="hover:underline smaller-font-size text-[var(--sub-text-color)]">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:underline smaller-font-size text-[var(--sub-text-color)]">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="font-bold text-[var(--text-color)] mb-4">{languaje.footer.subtitle3}</h4>
            <div className="flex gap-4 mt-2 flex-wrap justify-start items-center">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[var(--sub-text-color)] w-6 h-6"/>
              </a>
              
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[var(--sub-text-color)] w-6 h-6"/>
              </a>

              <div className="flex justify-start items-center p-2 bg-[var(--body-color)] rounded-lg gap-4">
                <FaEnvelope className="text-[var(--sub-text-color)] w-6 h-6"/>
                <span className="smaller-font-size text-[var(--sub-text-color)]">marcoramirez3700@gmail.com</span>
                <FaCopy className="text-[var(--sub-text-color)] w-4 h-4 hover:cursor-pointer"/>

              </div>

            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          {new Date().getFullYear()} MarcoSare.dev
        </div>
      </footer>
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



          <Marquee gradient={false} speed={60}>
            {skillsImg.map((skill) => (
              <div key={skill} className="mx-4  h-[65px] w-[65px]">
                <img
                  src={skill}
                  alt={skill}
                  className="w-full h-full object-cover mx-4"
                />
              </div>
            ))}
          </Marquee>  
*/

/* 

 <div className="bg-cristal rounded-xl  min-h-[300px] flex flex-col items-start justify-start px-8 py-12  relative">
              <div className="absolute left-12 group  overflow-hidden border w-12 h-12 rounded-full flex justify-center items-center cursor-pointer box-shadow z-[1] bg-white">
                <FaGithub className="w-3/4 h-3/4 text-black" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[#d7266d7c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <div className="absolute bottom-4 left-4 text-white z-10"></div>
              </div>

              <div className="h-[400px] mb-8"></div>
              <h2 className="h3-font-size mb-4">
                <b>Frontend development</b>
              </h2>
              <p className="small-font-size text-[var(--sub-text-color)] mb-4">
                I create modern, responsive, and high-performance websites
                tailored to your needs. From simple landing pages to dynamic web
                applications, I ensure clean code, great user experience, and
                seamless functionality across all devices. I create modern,
                responsive, and high-performance websites tailored to your
                needs. From simple landing pages to dynamic web applications, I
                ensure clean code, great user experience, and seamless
                functionality across all devices.
              </p>

              <div className="flex  flex-wrap gap-4">
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-black">
                  Flutter
                </div>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-black">
                  Dart
                </div>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-black">
                  FireBase
                </div>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-black">
                  Node.js
                </div>
              </div>
            </div>

*/
