import { useState } from "react";

import en_img from "../assets/images/en_usa.png";
import es_img from "../assets/images/es_mx.png";
import { FaChevronDown } from "react-icons/fa6";


  const getInitialLang = () => {
  const stored = localStorage.getItem("lang");
  if (stored) return stored;
  const nav = navigator.language.split("-")[0];
  return nav === "es" ? "es" : "en";
};

const getInitialLanguaje = () => {
  const lang = getInitialLang();
  //console.log('lang ', lang)
  return lang === "es" ? false : true;
};

function SelectLang({onChange}) {
  const [focused, setFocused] = useState(false);
  const [isEng, setIsEng] = useState(getInitialLanguaje);

  return (
    <div
      className={`flex justify-center items-center bg-[#030712d3] w-16 h-12 p-1  border-solid  hover:bg-white/10 hover:cursor-pointer  ${
        focused ? "border-t border-l border-r " : "border rounded-lg"
      }`}
      tabIndex={0}
      onFocus={() => {
        //console.log("true");
        setFocused(true);
      }}
      onBlur={() => setFocused(false)}
    >
      <div className="flex justify-center items-start flex-col relative h-12">
        <div className="flex items-center justify-start">
          <img src={isEng ? en_img : es_img} alt="lang1" className="w-7 h-7" />
        </div>
        <div
          onClick={() => 
          {
            onChange(!isEng);
            setIsEng(!isEng)
          }
          }
          className={`mt-2 bg-[#030712d3] hover:bg-white/10 hover:cursor-pointer h-12 w-16 -left-2  absolute -bottom-11 flex items-center justify-start p-1 ${
            focused ? "border-b border-l border-r" : "hidden"
          }`}
        >
          <img src={isEng ? es_img : en_img} alt="lang2" className="w-7 h-7" />
        </div>
      </div>

      <div className="flex justify-center items-center h-full ml-2">
        <FaChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${
            focused ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default SelectLang;
