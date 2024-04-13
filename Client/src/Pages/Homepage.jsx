import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mens_kurta } from "../Data/Men/men_kurta";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
        <HomeProductSection data={mens_kurta} section={"Men's Kurta"} url={`/men/clothing/mens_kurta`}/>
        <HomeProductSection data={sareePage1} section={"Saree"} url={`/women/clothing/women_saree`}/>
        <HomeProductSection data={dressPage1} section={"Dress"} url={`/women/clothing/women_dress`}/>
        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} url={`/women/clothing/gouns`}/>
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} url={`/women/clothing/kurta`}/>
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>

      
    </div>
  );
};

export default Homepage;
