import { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function TimeLine({
  image,
  isRight = false,
  isLeft = false,
  title,
  subTitle,
  list = [],
  page,
}) {
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  const tiltRef = useRef([]); // Almacenará referencias a múltiples elementos con VanillaTilt
  const [height, setHeight] = useState(200);
  const [height2, setHeight2] = useState(200);

  const handleRedirect = ({ link }) => {
    window.open(link, "_blank");
  };

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
      <div className="hidden lg:flex items-center justify-center w-full">
        <div
          className="w-2/5 flex flex-col items-end justify-center relative"
          style={{ height: `${height}px` }}
        >
          {isLeft && (
            <div ref={divRef} className="w-3/4 absolute top-0">
              <div
                ref={(el) => (tiltRef.current[0] = el)}
                className="px-8 py-12 bg-[var(--body-color)] rounded-xl"
              >
                <h3 className="h3-font-size text-[var(--first-color-alt)]">
                  {" "}
                  <b>{title}</b>
                </h3>
                <h4 className="normal-font-size">{subTitle}</h4>
                {list.map((item) => (
                  <div key={item.name}>
                    <p className="normal-font-size mt-4">{item.name}:</p>

                    <ul class="list-disc pl-5 space-y-2 text-gray-800">
                      {item.text.map((text, index) => (
                        <li
                          key={index}
                          className="small-font-size text-[var(--sub-text-color)]"
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Línea de tiempo */}
        <div
          className="w-1/5 flex flex-col items-center justify-center"
          style={{ height: `${height}px` }}
        >
          <div className="bg-[var(--first-color-alt)] h-[10%] w-[5px]"></div>
          <div
            className="bg-white h-[70px] w-[70px] rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={() => {
              handleRedirect({ link: page });
            }}
          >
            <img
              src={image}
              alt="timeline"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="bg-[var(--first-color-alt)] h-[calc(100%-70px-10%)] w-[5px]"></div>
        </div>

        <div
          className="w-2/5 flex flex-col items-start justify-center relative"
          style={{ height: `${height}px` }}
        >
          {isRight && (
            <div ref={divRef} className="w-3/4 absolute top-0">
              <div
                ref={(el) => (tiltRef.current[0] = el)}
                className="px-8 py-12 bg-[var(--body-color)] rounded-xl"
              >
                <h3 className="h3-font-size text-[var(--first-color-alt)]">
                  {" "}
                  <b>{title}</b>
                </h3>
                <h4 className="normal-font-size">{subTitle}</h4>
                {list.map((item) => (
                  <div key={item.name}>
                    <p className="normal-font-size mt-4">{item.name}:</p>

                    <ul class="list-disc pl-5 space-y-2 text-gray-800">
                      {item.text.map((text, index) => (
                        <li
                          key={index}
                          className="small-font-size text-[var(--sub-text-color)]"
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Se muestra en pantallas menores a 800px */}
      <div className="flex lg:hidden items-center justify-center w-full">
        <div className="w-4/5" ref={divRef2}>
          <div
            ref={(el) => (tiltRef.current[2] = el)}
            className="px-8 py-12 bg-[var(--body-color)] rounded-xl"
          >
            <h3 className="h3-font-size text-[var(--first-color-alt)]">{title}</h3>
            <h4 className="normal-font-size">{subTitle}</h4>
            {list.map((item) => (
                  <div key={item.name}>
                    <p className="normal-font-size mt-4">{item.name}:</p>

                    <ul class="list-disc pl-5 space-y-2 text-gray-800">
                      {item.text.map((text, index) => (
                        <li
                          key={index}
                          className="small-font-size text-[var(--sub-text-color)]"
                        >
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
          </div>
        </div>

        <div
          className="w-1/5 flex flex-col items-center justify-center h-full"
          style={{ height: `${height2 * 1.2}px` }}
        >
          <div className="bg-white h-[10%] w-[5px]"></div>
          <div className="bg-white h-[50px] w-[50px] rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt="timeline"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="bg-white h-[calc(100%-50px-10%)] w-[5px]"></div>
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
