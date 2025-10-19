import React from "react";
import Slider from "./section/slider";
import CardSlider from "./section/cardSlider";
import HightLight from "./section/HightLight";
import { bestSellerProducts } from "../data/productData";
import About from "./section/about";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Slider />
      <CardSlider preset="payOnDelivery" />
      <HightLight />
      <CardSlider preset="bestSellers" config={{
        title: "Best Sellers",
        products: bestSellerProducts
      }} />
      <About />
      
    </div>
  );
}
