import Image from "next/image";
import React from "react";

export interface AboutCardProps {
  title?: string;
  establishedText?: string;
  imageSrc?: string;
  imageAlt?: string;
  leftSectionClassName?: string;
  rightSectionClassName?: string;
  descriptionParagraphs?: string[];
  backgroundColor?: string;
  children?: React.ReactNode;
}

export default function AboutCard({
  title = "Wholesale Furniture Outlet",
  establishedText = "",
  imageSrc = "/slider/room.png",
  imageAlt = "Living room showcase",
  leftSectionClassName = "",
  rightSectionClassName = "",
  descriptionParagraphs = [],
  backgroundColor = "#1a2332",
  children,
}: AboutCardProps) {
  return (
    <div>
      {/* About Section */}
      <section className="py-0 px-0" style={{ background: backgroundColor }}>
        <div className="flex flex-col lg:flex-row lg:max-h-[70vh]">
          {/* Left Section - Living Room Image */}
          <div
            className={`w-full lg:w-[60%] order-2 lg:order-1 ${leftSectionClassName}`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1920}
              height={380}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section - Text Panel */}
          {descriptionParagraphs && (
            <div
              className={`w-full lg:w-[40%] flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-16 order-1 lg:order-2 ${rightSectionClassName}`}
            >
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4">
                {title}
              </h1>

              {establishedText && <p className="text-sm sm:text-base lg:text-lg text-white mb-4 sm:mb-6">
                {establishedText}
              </p>}

              <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-white">
                {descriptionParagraphs.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-xs sm:text-sm lg:text-base leading-relaxed"
                  >
                    {text}
                  </p>
                ))}
              </div>
              {children}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
