import { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function TimeLine({ image, isRight = false, isLeft = false, title, subTitle, list = [] }) {
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  const tiltRef = useRef([]); // Almacenará referencias a múltiples elementos con VanillaTilt
  const [height, setHeight] = useState(200);

  const [height2, setHeight2] = useState(200);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });

    if (divRef.current) observer.observe(divRef.current);





    const observer2 = new ResizeObserver(([entry]) => {
      setHeight2(entry.contentRect.height);
    });

    if (divRef2.current) observer2.observe(divRef2.current);

    // Inicializar VanillaTilt en todas las referencias
    tiltRef.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
        });
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-[1440px]">
      {/* Se muestra en pantallas grandes */}
      <div className="hidden md:flex items-center justify-center w-full">
        <div className="w-2/5 flex flex-col items-end justify-center relative" style={{ height: `${height * 1.1}px` }}>
          {isLeft && (
            <div ref={divRef} className="w-3/4 absolute top-0">
              <div
                ref={(el) => (tiltRef.current[0] = el)}
                className="p-4 rounded-lg shadow-lg shadow-[#6F0B45] backdrop-blur-lg bg-white/10 border border-white/20"
              >
                <h3 className="text-lg font-bold">{title}</h3>
                <h4 className="mb-3 font-serif">{subTitle}</h4>
                {list.map((item) => (
                  <div key={item.name}>
                    <p className="text-xs text-gray-300 my-3 font-bold">{item.name}</p>
                    {item.text.map((text, index) => (
                      <p key={index} className="text-xs text-gray-300 leading-none">• {text}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Línea de tiempo */}
        <div className="w-1/5 flex flex-col items-center justify-center" style={{ height: `${height * 1.5}px` }}>
          <div className="bg-white h-[10%] w-[5px]"></div>
          <div className="bg-white h-[70px] w-[70px] rounded-full flex items-center justify-center overflow-hidden">
            <img src={image} alt="timeline" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white h-[calc(100%-70px-10%)] w-[5px]"></div>
        </div>

        <div className="w-2/5 flex flex-col items-start justify-center relative" style={{ height: `${height * 1.1}px` }}>
          {isRight && (
            <div ref={divRef} className="w-3/4 absolute top-0">
              <div
                ref={(el) => (tiltRef.current[1] = el)}
                className="p-4 rounded-lg shadow-lg shadow-[#681798] backdrop-blur-lg bg-white/10 border border-white/20"
              >
                <h3 className="text-lg font-bold">{title}</h3>
                <h4 className="mb-3 font-serif">{subTitle}</h4>
                {list.map((item) => (
                  <div key={item.name}>
                    <p className="text-xs text-gray-300 my-3 font-bold">{item.name}</p>
                    {item.text.map((text, index) => (
                      <p key={index} className="text-xs text-gray-300 leading-none">• {text}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Se muestra en pantallas menores a 800px */}
      <div className="flex md:hidden items-center justify-center w-full ">
        <div className="w-4/5" ref={divRef2}>
          <div
            ref={(el) => (tiltRef.current[2] = el)}
            className="p-4 rounded-lg shadow-lg shadow-[#681798] backdrop-blur-lg bg-white/10 border border-white/20"
          >
            <h3 className="text-lg font-bold">{title}</h3>
            <h4 className="mb-3 font-serif">{subTitle}</h4>
            {list.map((item) => (
              <div key={item.name}>
                <p className="text-xs text-gray-300 my-3 font-bold">{item.name}</p>
                {item.text.map((text, index) => (
                  <p key={index} className="text-xs text-gray-300 leading-none">• {text}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/5 flex flex-col items-center justify-center h-full"  style={{ height: `${height2 * 1.2}px` }}>
          <div className="bg-white h-[10%] w-[5px]"></div>
          <div className="bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center overflow-hidden">
            <img src={image} alt="timeline" className="h-full w-full object-contain" />
          </div>
          <div className="bg-white h-[calc(100%-50px-10%)] w-[5px]"></div>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
