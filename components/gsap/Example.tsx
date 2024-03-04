"use client";

import gsap from "gsap";
import React, { useLayoutEffect, useRef, useState } from "react";
const ExampleGsap = () => {
  const boxRef = useRef();
  const [ctxState, setCtxState] = useState<any>();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(boxRef.current, {
        duration: 1,
        repeat: -1,
        scale: 1.5,
        ease: "elastic.inOut",
        stopOpacity: 0,
      });
    });

    setCtxState(ctx);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={boxRef} className="w-[150px] h-[150px] bg-green-400"></div>
      <button onClick={() => ctxState.revert()}>stop</button>
    </>
  );
};

export default ExampleGsap;
