import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { FaCircleUser } from "react-icons/fa6";
import quotation_img from "../assets/images/quotation.png";

const TestimonialSlide = ({ activeIndex, testimonial, isMobile }) => {

    //console.log('hola?', testimonial.name)



  /* 
  
   name: "Jorge Alberto Plascencia",
    page: "https://www.ideamia.com.mx/",
    role: "Director General IDEAMIA – Tech",
    mail: "jorge@ideamia.com.mx",
    text: ` El Ing. Marco Isaías Ramírez García, con quien tuve el privilegio
            de colaborar estrechamente en diversos proyectos de desarrollo de
            software dentro de nuestra empresa, demostró ser un profesional
            altamente competente, comprometido y proactivo. Participó
            activamente en el diseño, desarrollo y puesta en marcha de sistemas
            complejos.`,
  */
  return (
    
      <div className="px-8 py-12 rounded-xl min-h-[300px] w-full flex-col items-start justify-start relative bg-[--body-color] my-6">
        {/* Header */}
        <div className="flex gap-8 mb-4">
          <div className="w-20 h-20 rounded-full flex items-center justify-center">
            <FaCircleUser className="w-3/4 h-3/4" />
          </div>
          <div className="flex flex-col">
            <p className="h3-font-size">
              <b>{testimonial.name}</b>
            </p>
            <a
              href={testimonial.page}
              className="normal-font-size text-[var(--first-color)] underline"
              target="_blank" rel="noopener noreferrer"
            >
              {testimonial.role}
            </a>
            <p className="smaller-font-size text-[var(--first-color)]">
              {testimonial.mail}
            </p>
          </div>
        </div>

        {/* Testimonial Text */}
        <div
          className="flex"
          style={{ paddingLeft: isMobile ? 0 : 112 }}
        >
          <p className="small-font-size text-[var(--sub-text-color)]">
           {testimonial.text}
          </p>
        </div>

        {/* Quotation Marks */}
        <div className="w-24 h-24 absolute top-0 left-28 rotate-180">
          <img src={quotation_img} alt="quotation" className="opacity-10 filter grayscale" />
        </div>
        <div className="w-24 h-24 absolute bottom-0 right-28">
          <img src={quotation_img} alt="quotation" className="opacity-10 filter grayscale" />
        </div>
      </div>
    
  );
};

export default TestimonialSlide;
