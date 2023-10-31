/** @format */
import React from "react";
import Header from "../components/Header";
import SwiperSliderComponent from "../components/SwiperComponent";
import WhoWeAre from "../components/WhoWeAre";
import Concepts from "../components/Concepts";
import Publications from "../components/Publications";
import Awards from "../components/Awards";

export default function Home() {
  return (
    <div className="text-[#e7e7e7] uppercase">
      <Header />
      <SwiperSliderComponent />
      <WhoWeAre />
      <Concepts />
      <Publications />
      <Awards />
    </div>
  );
}
