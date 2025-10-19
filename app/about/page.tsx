import React from "react";
import AboutCard from "../components/AboutCard";

export default function AboutPage() {
  return (
    <div>
      <AboutCard
        title="About Us"
        descriptionParagraphs={[
          "Discover Wholesale Furniture Outlet – your premier destination for exquisite furnishings crafted with precision and care. From luxurious beds and inviting sofas to elegant dining sets and captivating living room ensembles, we offer a diverse array of meticulously handmade pieces tailored to elevate your home.",
          "Explore our extensive selection of over 3,000 products, each available for customization to suit your unique preferences and lifestyle.",
          "Experience convenience like never before with our complimentary UK-wide next day delivery service, as well as the opportunity for a free consultation with our expert design team. We are ready to provide friendly and knowledgeable support. Contact us today and transform your living space with Wholesale Furniture Outlet.",
        ]}
      />
    </div>
  );
}