import React from "react";
import AboutCard from "../components/AboutCard";

export default function page() {
  return (
    <div>
      <AboutCard
        title="Contact Us"
        descriptionParagraphs={[
          "For personalized assistance and inquiries, our dedicated customer care team is always ready to provide friendly and knowledgeable support.",
        ]}
      >
        <form className=" w-full">
          <div>
            <label
              htmlFor="name"
              className="block text-white text-lg font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full block px-3 py-2 rounded bg-white text-black text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c5f6f]"
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-white text-lg font-bold mb-2"
            >
              Email Address :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full block px-3 py-2 rounded bg-white text-black text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c5f6f]"
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-white text-lg font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full block px-3 py-2 rounded bg-white text-black text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c5f6f] resize-none"
            />
          </div>
          <div className="flex items-center gap-4 mt-2">
            <div>
              <div className="bg-white w-[140px] h-[40px] rounded flex items-center justify-center border border-gray-300">
                <span className="text-xs text-gray-500">[reCAPTCHA]</span>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#365a66] text-white px-8 py-2 rounded font-semibold text-base hover:bg-[#23404d] transition-colors"
              style={{ minWidth: "100px" }}
            >
              Send
            </button>
          </div>
        </form>
      </AboutCard>
    </div>
  );
}
