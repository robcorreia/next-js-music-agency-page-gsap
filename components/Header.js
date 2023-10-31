"use client";
import React, { useRef } from "react";
import close from "@/images/close-outline.svg";
import menu from "@/images/menu-outline.svg"
import Image from "next/image";

export default function Header() {
  let resMenu = useRef(null);
  let resMenuHeader = useRef(null);
  let resMenuItem1 = useRef(null);
  let resMenuItem2 = useRef(null);
  let resMenuItem3 = useRef(null);
  let resMenuItem4 = useRef(null);

  return (
    <div>
      <div
        ref={resMenu}
        className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black -translate-y-[1200px]"
      >
        <div
          className="flex items-start justify-between w-[100%] h-fit py-[5px]"
          ref={resMenuHeader}
        >
          <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
            Robson <br />
            Correia
          </div>
          <div className="block cursor-pointer mx-[5px]">
            <Image src={close} className="w-9 object-contain invert" alt="" />
          </div>
        </div>
        <div className="mx-2 my-10 space-y-1">
            <span className="overflow-hidden block">
                <div ref={resMenuItem1} className="font-neutrallFace font-bold text-[30px]">
                    WORK
                </div>
            </span>
            <span className="overflow-hidden block">
                <div ref={resMenuItem2} className="font-neutrallFace font-bold text-[30px]">
                    ABOUT
                </div>
            </span>
            <span className="overflow-hidden block">
                <div ref={resMenuItem3} className="font-neutrallFace font-bold text-[30px]">
                    PUNLICATIONS
                </div>
            </span>
            <span className="overflow-hidden block">
                <div ref={resMenuItem4} className="font-neutrallFace font-bold text-[30px]">
                    OFFICE
                </div>
            </span>
        </div>
      </div>
      <div className="absolute bg-black top-0 py-[5px] font-neutralFace h-[20vh] flex justify-between w-[100%] flex-col">
        <div id="header" className="flex items-start justify-between w-[100%] h-fit">
            <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] leading-none">
                Robson <br/> Correia
            </div>
            <div className="max-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
                WORK
            </div>
            <div className="max-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
                ABOUT
            </div>
            <div className="max-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
                PUBLICATIONS
            </div>
            <div className="max-1 md:block hidden mix-blend-difference font-neutralFace font-bold text-[30px]">
                OFFICE
            </div>
            <div className="block md:hidden cursor-pointer mx-[5px]">
                <Image src={menu} alt="" className="w-9 object-contain invert"/>
            </div>
        </div>
        <div className="flex items-start text-sm justify-between sm:justify-evenly px-5 w-[100%] h-fit">
            <div>
                An independent <br/> music agency
            </div>
            <div>Amsterdam</div>
        </div>
      </div>
    </div>
  );
}
