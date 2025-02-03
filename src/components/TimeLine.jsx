import { useState, useEffect, useRef } from "react";

function TimeLine({ image, isRight = false, isLeft=false, title, subTitle, text }) {
    console.log('hola')
  const divRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
      console.log("h", entry.contentRect.height);
    });

    if (divRef.current) observer.observe(divRef.current);

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
              className="bg-[#6F0B45] w-3/4 absolute -top-8 rounded-lg p-4 shadow-lg shadow-pink-500/50"
            >
              <h3 className="text-lg font-bold">{title}</h3>
              <h4 className="mb-3 font-serif">{subTitle}</h4>

              <p className="text-xs text-gray-400">{text}</p>
            </div>
          )}
        </div>

        <div
          className="w-1/5 flex flex-col items-center justify-center"
          style={{ height: `${height * 2}px` }}
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
              className="bg-[#6F0B45] w-3/4 absolute -top-10 rounded-lg"
            >
              <h3>{title}</h3>
              <h4>{subTitle}</h4>
              <p className="text-xs">{text}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TimeLine;
