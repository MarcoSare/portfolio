import { useState, useEffect, useRef } from "react";

import en_img from "../assets/images/en_usa.png";
import es_img from "../assets/images/es_mx.png";
import { FaChevronDown } from "react-icons/fa6";



function SelectLang({  }) {

    return (<>
    <div className="flex justify-center items-start bg-red-900 w-12 h-12 p-1 border border-solid">
        <div className="flex justify-center items-start flex-col relative h-12">

        <div className="flex items-center justify-start">
            <img src={en_img} alt="en_lang" className="w-7 h-7"/>
        </div>
        <div className="mt-2 bg-red-900 h-12 -left-1 w-12 absolute -bottom-11 flex items-center justify-start p-1">
            <img src={es_img} alt="en_lang" className="w-7 h-7"/>
        </div>
        </div>

        <div className="flex justify-center items-center h-full ml-1">
        <FaChevronDown className="w-3 h-3"/>
        </div>
        



    </div>
    
    </>)



 }


export default SelectLang;
