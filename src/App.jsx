import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "react-vertical-timeline-component/style.min.css";
import {
  FaHouse,
  FaUserTie,
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
  FaLeftLong,
  FaRightLong,
  FaLaptop,
  FaCopy,
} from "react-icons/fa6";
import logo from "./assets/images/logo.png";
import yop from "./assets/images/yop.jpg";
import yop2 from "./assets/images/yop_2.jpg";
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
import { AlertPositioned } from "./alerts/Alerts";
import sendContact from "./services/sendContact";

const skills = {
  Frontend: [html_img, css_img, js_img, ts_img, react_img, tailwind_img],
  Backend: [node_img, php_img, laravel_img, java_img],
  DataBase: [mysql_img, mongo_img, postgresql_img],
  "Mobile App Development": [flutter_img, dart_img, java_img],
  DevOps: [aws_img, firebase_img],
  Learning: [swift_img, nextjs_img],
};
const sections = ["home", "about", "projects", "services", "contact"];


  const getInitialLang = () => {
  const stored = localStorage.getItem("lang");
  if (stored) return stored;
  const nav = navigator.language.split("-")[0];
  return nav === "es" ? "es" : "en";
};

const getInitialLanguaje = () => {
  const lang = getInitialLang();
  //console.log('lang ', lang)
  return lang === "es" ? spanish : english;
};

function App() {
  const [languaje, setLanguaje] = useState(getInitialLanguaje);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1098);
  const [activeSection, setActiveSection] = useState("");
  const [showAllPro, setShowAllPro] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [fromCont, setFromCont] = useState("");
  const [nameCont, setNameCont] = useState("");
  const [textCont, setTextCont] = useState("");

  const maxProjects = 6;




  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1098);
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let current = activeSection;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            current = id;
            break;
          }
        }
      }
      if (current) {
        //console.log(current)
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    const body = {
      from: fromCont,
      subject: nameCont,
      text: textCont,
    };

    const response = await sendContact.send({ body });
    //console.log("response", response);

    if (response.error) {
      AlertPositioned({
        title: languaje.messagesAlert["error"].title,
        text: languaje.messagesAlert["error"].msg,
        icon: languaje.messagesAlert["error"].type,
      });
    } else {
      AlertPositioned({
        title: languaje.messagesAlert["success"].title,
        text: languaje.messagesAlert["success"].msg,
        icon: languaje.messagesAlert["success"].type,
      });
    }
    setIsSending(false);
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

          <ul className="flex  items-center gap-1 max-[768px]:hidden">
            {languaje.header.map((item) => {
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`px-6 py-2 rounded-xl item-li ${
                      item.id === activeSection
                        ? "text-[var(--first-color)]"
                        : ""
                    }`}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
          <div>
            <SelectLang
              onChange={(lan) => {
                const lang = lan ? english : spanish;
                localStorage.setItem("lang", lan ? "en" : "es");
                setLanguaje(lang);
              }}
            />
          </div>
        </div>
      </header>

      <section className="w-full h-[60px] div-nav fixed bottom-0 z-50 max-w-[650px] left-1/2 -translate-x-1/2 mb-2 rounded-xl px-4 max-[650px]:w-[calc(100%-2rem)] hidden max-[768px]:block">
        <div className="container flex justify-between items-center h-full">
          <a
            className="h-full w-16  flex items-center justify-center"
            href={`#home`}
          >
            <FaHouse
              className={`h-full w-1/2 ${
                "home" === activeSection ? "text-[var(--first-color)]" : ""
              }`}
            />
          </a>

          <a
            className="h-full w-16  flex items-center justify-center"
            href={`#about`}
          >
            <FaUserTie
              className={`h-full w-1/2 ${
                "about" === activeSection ? "text-[var(--first-color)]" : ""
              }`}
            />
          </a>

          <a
            className="h-full w-16  flex items-center justify-center"
            href={`#projects`}
          >
            <FaLaptop
              className={`h-full w-1/2 ${
                "projects" === activeSection ? "text-[var(--first-color)]" : ""
              }`}
            />
          </a>

          <a
            className="h-full w-16  flex items-center justify-center"
            href={`#services`}
          >
            <FaCode
              className={`h-full w-1/2 ${
                "services" === activeSection ? "text-[var(--first-color)]" : ""
              }`}
            />
          </a>

          <a
            className="h-full w-16  flex items-center justify-center"
            href={`#contact`}
          >
            <FaEnvelope
              className={`h-full w-1/2 ${
                "contact" === activeSection ? "text-[var(--first-color)]" : ""
              }`}
            />
          </a>
        </div>
      </section>

      <section id="home" className="w-full mb-32 mt-[60px] pt-16 ">
        <div className="container">
          {/* red */}
          <div className="container-row gap-y-8">
            <div className="w-full  flex flex-col items-start justify-center h-full relative !z-[1]">
              <div className="blur-bg pointer-events-none"></div>
              <div className="relative border border-[var(--text-color)] px-4 py-2 w-fit typewriter-wrapper">
                <div className="h-3 w-3 border border-[var(--text-color)] bg-[var(--text-color)] absolute -top-[6px] -left-[6px]" />
                <div className="h-3 w-3 border border-[var(--text-color)] bg-[var(--text-color)] absolute -top-[6px] -right-[6px]" />
                <div className="h-3 w-3 border border-[var(--text-color)] bg-[var(--text-color)] absolute -bottom-[6px] -right-[6px]" />
                <div className="h-3 w-3 border border-[var(--text-color)] bg-[var(--text-color)] absolute -bottom-[6px] -left-[6px]" />
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
              {/* 
                <img
                src={graph1}
                alt="graph1"
                className="absolute -bottom-24 w-full -z-[1] background-shape"
              />
                */}
              <div className="w-full h-full flex flex-col justify-center items-center z-10 rounded-lg">
                <img
                  src={yop}
                  alt="user"
                  className="w-[400px] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="w-full mb-32 pb-8 bg-[var(--second-body-color)] pt-32 max-[768px]:pt-16"
      >
        <div className="container ">
          <h1 className="h1-font-size text-[var(--first-color)] text-center">
            <b>{languaje.about.title}</b>
          </h1>

          <div className="flex justify-center items-center mb-8">
            <div className="h-1 w-1/3 bg-white rounded-xl"></div>
          </div>

          <div className="container-row mb-8 gap-y-8">
            <div className="flex flex-col justify-center items-center">
              <div className="h-[400px] w-[400px] bg-white rounded-circular overflow-hidden max-[600px]:!h-[200px] max-[600px]:!w-[200px]">
                <img
                  src={yop2}
                  alt="user"
                  className="object-contain w-[400px] h-[400px] max-[600px]:!h-[200px] max-[600px]:!w-[200px]"
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

      <section id="projects" className="w-screen mb-32">
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

      <section
        id="services"
        className="w-screen mb-32 bg-[var(--second-body-color)] pt-32 max-[768px]:pt-16 pb-20"
      >
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

      <section id="contact" className="w-screen mb-32">
        <div className="container relative">
          <div class="blur-bg-3 pointer-events-none"></div>
          <h1 className="h1-font-size text-[var(--first-color)] text-center">
            <b>{languaje.contact.title}</b>
          </h1>

          <div className="flex justify-center items-center mb-8">
            <div className="h-1 w-1/3 bg-white rounded-xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-12">
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--second-body-color)] shadow-md rounded-2xl p-6 space-y-6"
            >
              <div>
                <label htmlFor="name" className="">
                  {languaje.contact.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required={true}
                  value={nameCont}
                  className="mt-1 block w-full border-2 border-[var(--body-color)] bg-[var(--body-color)] rounded-xl shadow-sm px-4 py-2 focus:border-[var(--first-color-alt)] focus:outline-none"
                  placeholder={languaje.contact.namePlaceholder}
                  onChange={(e) => {
                    setNameCont(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" className="">
                  {languaje.contact.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required={true}
                  value={fromCont}
                  className="mt-1 block w-full border-2 border-[var(--body-color)] bg-[var(--body-color)] rounded-xl shadow-sm px-4 py-2 focus:border-[var(--first-color-alt)] focus:outline-none"
                  placeholder={languaje.contact.emailPlaceholder}
                  onChange={(e) => {
                    setFromCont(e.target.value);
                  }}
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
                  required={true}
                  className="mt-1 block w-full border-2 border-[var(--body-color)] bg-[var(--body-color)] rounded-xl shadow-sm px-4 py-2 focus:border-[var(--first-color-alt)] focus:outline-none"
                  placeholder={languaje.contact.messagePlaceholder}
                  onChange={(e) => {
                    setTextCont(e.target.value);
                  }}
                />
              </div>

              <div className="text-center flex items-center justify-center">
                <button
                  disabled={isSending}
                  type="submit"
                  className={`${
                    isSending
                      ? "opacity-75 cursor-progress"
                      : "hover:bg-[var(--second-color)]"
                  } flex items-center justify-center text-[var(--text-color)] bg-[var(--first-color)]  focus:outline-none focus:ring-4 focus:ring-[var(--second-color-alt)] font-medium rounded-full px-8 py-2.5 text-center me-2 mb-2 z-10`}
                >
                  {isSending ? (
                    <>
                      <svg
                        aria-hidden="true"
                        role="status"
                        class="inline w-4 h-4 me-3 text-[var(--text-color)] animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span>{languaje.buttons.isSending}</span>
                    </>
                  ) : (
                    <span>{languaje.buttons.send}</span>
                  )}
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
            <h3 className="font-bold text-[var(--text-color)] mb-2">
              MarcoSare.dev
            </h3>
            <p className="smaller-font-size text-[var(--sub-text-color)]">
              {languaje.footer.desc}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-bold text-[var(--text-color)] mb-2">
              {languaje.footer.subtitle2}
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="hover:underline smaller-font-size text-[var(--sub-text-color)]"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="hover:underline smaller-font-size text-[var(--sub-text-color)]"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:underline smaller-font-size text-[var(--sub-text-color)]"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="font-bold text-[var(--text-color)] mb-4">
              {languaje.footer.subtitle3}
            </h4>
            <div className="flex gap-4 mt-2 flex-wrap justify-start items-center">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-[var(--sub-text-color)] w-6 h-6" />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-[var(--sub-text-color)] w-6 h-6" />
              </a>

              <div className="flex justify-start items-center p-2 bg-[var(--body-color)] rounded-lg gap-4">
                <FaEnvelope className="text-[var(--sub-text-color)] w-6 h-6" />
                <span className="smaller-font-size text-[var(--sub-text-color)]">
                  marcoramirez3700@gmail.com
                </span>
                <FaCopy className="text-[var(--sub-text-color)] w-4 h-4 hover:cursor-pointer" />
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
