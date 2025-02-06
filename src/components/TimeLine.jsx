import { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";


function TimeLine({ image, isRight = false, isLeft=false, title, subTitle, text, list=[] }) {
    console.log('hola')
  const divRef = useRef(null);
  const [height, setHeight] = useState(0);
  const tiltRef = useRef(null);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
      console.log("h", entry.contentRect.height);
    });

    if (divRef.current) observer.observe(divRef.current);

    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center w-full max-w-[1440px]  h-min-[200px] ">
        <div
          className="w-2/5  h-auto flex flex-col items-end justify-center relative"
          style={{ height: `${height * 1.1}px` }}
        >
          {isLeft && (
             <div
             ref={divRef}
             className="w-3/4 absolute top-0 bg-transparent"
           >
             <div className="p-4 rounded-lg shadow-2xl shadow-[#6F0B45] bg-gradient-to-b from-[#6F0B45] via-[#A3205D] to-[#D63D80]" ref={tiltRef}>
             <h3 className="text-lg font-bold">{title}</h3>
             <h4 className="mb-3 font-serif">{subTitle}</h4>
              {
              list.map((item) => {
                return (
                  <>
                  <p key={item.name} className="text-xs text-gray-300 my-3 font-bold">{item.name}</p>
                  {
                    item.text.map((text)=> {
                      return (                    
                      <>
                      <p className="text-xs text-gray-300 leading-none">{`•`} {text}</p>
                      <br />
                      </>)
                      
                    })
                  }
                  </>
                )
              })
             }

             </div>
             
           </div>
          )}
        </div>

        <div
          className="w-1/5 flex flex-col items-center justify-center"
          style={{ height: `${height * 1.5}px` }}
        >
          <div className="bg-white h-[10%] w-[5px]"></div>

          <div className="bg-white h-[70px] w-[70px] rounded-full flex items-center justify-center overflow-hidden">
            <img src="https://erpsemsamx.com/assets/logo-a470df53.png" alt="timeline" className="h-full w-full object-contain" />
          </div>

          <div className="bg-white h-[calc(100%-70px-10%)] w-[5px]"></div>
        </div>

        <div
          className="w-2/5  h-auto flex flex-col items-start justify-center relative"
          style={{ height: `${height * 1.1}px` }}
        >
          {isRight && (
            <div
            ref={divRef}
            className="w-3/4 absolute top-0 bg-transparent"
          >
            <div className="p-4 rounded-lg shadow-2xl shadow-[#681798] bg-gradient-to-b from-[#681798] to-[#a855f7]" ref={tiltRef}>
            <h3 className="text-lg font-bold">{title}</h3>
            <h4 className="mb-3 font-serif">{subTitle}</h4>

            {
              list.map((item) => {
                return (
                  <>
                  <p key={item.name} className="text-xs text-gray-300 my-3 font-bold">{item.name}</p>
                  {
                    item.text.map((text)=> {
                      return (                    
                      <>
                      <p className="text-xs text-gray-300 leading-none">{`•`} {text}</p>
                      <br />
                      </>)
                      
                    })
                  }
                  </>
                )
              })
             }
            </div>
            
          </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TimeLine;
