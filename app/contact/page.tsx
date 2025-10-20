import React from "react";
import AboutCard from "../components/AboutCard";

export default function page() {
  // Form fields data array
  const formFields = [
    {
      id: "name",
      name: "name",
      label: "Name:",
      type: "text",
      required: true,
      autoComplete: "off"
    },
    {
      id: "email",
      name: "email", 
      label: "Email Address:",
      type: "email",
      required: true,
      autoComplete: "off"
    },
    {
      id: "message",
      name: "message",
      label: "Message:",
      type: "textarea",
      required: true,
      rows: 6
    }
  ];

  return (
    <div>
      <AboutCard
        title="Contact Us"
        descriptionParagraphs={[
          "For personalized assistance and inquiries, our dedicated customer care team is always ready to provide friendly and knowledgeable support.",
        ]}
      >
        <form className="w-full">
          {formFields.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-white text-lg font-bold mb-2"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  name={field.name}
                  rows={field.rows}
                  required={field.required}
                  className="w-full block px-3 py-2 rounded bg-white text-black text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c5f6f] resize-none"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  className="w-full block px-3 py-2 rounded bg-white text-black text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c5f6f]"
                />
              )}
            </div>
          ))}
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
