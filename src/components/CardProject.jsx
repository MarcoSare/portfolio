import { useState } from "react";

import node_img from "../assets/images/nodejs.svg";
import js_img from "../assets/images/js.svg";
import ts_img from "../assets/images/ts.png";
import react_img from "../assets/images/react.png";
import html_img from "../assets/images/html.svg";
import css_img from "../assets/images/css.svg";
import tailwind_img from "../assets/images/tailwind.svg";
import postgresql_img from "../assets/images/postgresql.svg";

import flutter_img from "../assets/images/flutter.svg";
import dart_img from "../assets/images/dart.png";
import php_img from "../assets/images/php.svg";
import laravel_img from "../assets/images/laravel.png";
import java_img from "../assets/images/java.svg";
import mysql_img from "../assets/images/mysql.svg";
import aws_img from "../assets/images/aws.svg";
import mongo_img from "../assets/images/mongodb.svg";
import firebase_img from "../assets/images/firebase.svg";

import nextjs_img from "../assets/images/nextjs.svg";
import swift_img from "../assets/images/swift.png";
import beauty_img from "../assets/images/beauty.png";
import react_components from "../assets/images/react_components.png";
import xbox_img from "../assets/images/xbox.png";
import travel_img from "../assets/images/travel.png";
import tinder_img from "../assets/images/tinder_itc.png";
import tinder_img_2 from "../assets/images/tinder_itc_2.png";
import tinder_img_3 from "../assets/images/tinder_itc_3.png";
import king_img from "../assets/images/king_style.png";

import you_movie_img from "../assets/images/you_movie.png";
import you_movie_img_2 from "../assets/images/you_movie_2.png";
import you_movie_img_3 from "../assets/images/you_movie_3.png";

import auth_img from "../assets/images/auth.png";
import auth_img_2 from "../assets/images/auth_2.png";
import auth_img_3 from "../assets/images/auth_3.png";


import pokedex_img from "../assets/images/pokedex.png";
import pokedex_img_2 from "../assets/images/pokedex_2.png";
import pokedex_img_3 from "../assets/images/pokedex_3.png";

import calendar_img from "../assets/images/calendar.png";


const images = {
    'tinder_itc_1' : tinder_img,
    'tinder_itc_2' : tinder_img_2,
    'tinder_itc_3' : tinder_img_3,
    'you_movie_1' : you_movie_img,
    'you_movie_2' : you_movie_img_2,
    'you_movie_3' : you_movie_img_3,
    'auth_1': auth_img_2,
    'auth_2': auth_img,
    'auth_3': auth_img_3,
    "king" : king_img,
    "react_components" : react_components,
    'beauty' : beauty_img,
    "pokedex_1" : pokedex_img,
    "pokedex_2" : pokedex_img_2,
    "pokedex_3" : pokedex_img_3,
    "travel" : travel_img,
    "xbox" : xbox_img
}


const technologies = {
    'Flutter' : flutter_img,
    'Dart' : dart_img,
    'FireBase' : firebase_img,
    "React" : react_img,
    "Html" : html_img,
    "Css" : css_img,
    "JavaScript" : js_img,
    "Aws": aws_img,
    "TypeScript" : ts_img
}

const bg = [
    "bg-gra", "bg-gra-2", "bg-gra-3"
]

function CardProject({ project, index }) {


  return (
    <div className="bg-[var(--second-body-color)]  rounded-xl  min-h-[300px] flex flex-col items-start justify-start  relative">
      <div className=" relative w-full h-[400px] rounded-xl bg-gra-3 overflow-hidden">
        {project.isMobile ? (
          <>
            <div className="h-[400px] absolute left-0  w-1/2">
              <img
                src={images[project.images[1]]}
                alt="tinder_img"
                className="h-full"
              />
            </div>
            <div className="h-[400px] absolute right-0  w-1/2 flex justify-end">
              <img
                src={images[project.images[2]]}
                alt="tinder_img"
                className="h-full"
              />
            </div>

            <div className="h-[400px] absolute left-1/2 transform -translate-x-1/2 w-1/2 flex justify-center">
              <img
                src={images[project.images[0]]}
                alt="tinder_img"
                className="h-full"
              />
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-[5%] right-0 h-[370px] w-[100%] rounded-lg overflow-hidden -rotate-6">
              <img
                src={images[project.images[0]]}
                alt="tinder_img"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </>
        )}
      </div>
      <div className="mb-4 px-8 py-12">
        <h2 className="h3-font-size mb-4 text-[var(--first-color-alt)]">
          <b>{project.name}</b>
        </h2>
        <p className="small-font-size text-[var(--sub-text-color)] mb-4">
          {project.desc}
        </p>

        <div className="flex  flex-wrap gap-4">
          {project.technologies.map((techno) => {
            return (
              <div className="bg-cristal px-3 py-1 rounded-full text-sm font-medium border border-white flex justify-center items-center gap-4" key={techno}>
               <img src={technologies[techno]} alt="flutter_img" className="h-6 w-6" />
                <span>{techno}</span>
              </div>
            );
          })}
        </div>

       
      </div>
    </div>
  );
}

export default CardProject;
{
    /* 
     <div className="flex  flex-wrap gap-4">
          {project.technologies.map((techno) => {
            return (
              <div className="bg-cristal px-3 py-1 rounded-full text-sm font-medium border border-white flex justify-center items-center gap-4">
                <img src={technologies[techno][0]} alt="flutter_img" className="h-6 w-6" />
                <span>{technologies[techno][1]}</span>
              </div>
            );
          })}
        </div>
    */
}