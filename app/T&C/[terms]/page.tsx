import React from "react";
import fs from "fs";
import path from "path";
import { formatContent } from "@/app/components/formatContent";

interface TermsPageProps {
  params: {
    terms: string;
  };
}

export default function TermsPage({ params }: TermsPageProps) {
  const { terms } = params;
  console.log(terms);

  // Validate the terms parameter
  if (terms !== "policy" && terms !== "terms") {
    return (
      <div
        className="min-h-screen py-6 px-6"
        style={{
          background:
            "linear-gradient(135deg, #162A38 0%, #162D3B 60%, #0F0E14 100%)",
        }}
      >
        <div className="max-w-full mx-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-white/10">
            <h1 className="text-2xl font-bold text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-gray-300">
              The requested page could not be found.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Determine the correct markdown file based on the parameter
  const markdownFileName =
    terms === "policy" ? "policy.md" : "terms-and-conditions.md";

  // Read the markdown file content
  const markdownPath = path.join(process.cwd(), `app/T&C/${markdownFileName}`);

  let markdownContent;
  try {
    markdownContent = fs.readFileSync(markdownPath, "utf8");
  } catch (error) {
    console.error("Error reading markdown file:", error);
    return (
      <div
        className="min-h-screen py-6 px-6"
        style={{
          background:
            "linear-gradient(135deg, #162A38 0%, #162D3B 60%, #0F0E14 100%)",
        }}
      >
        <div className="max-w-full mx-auto">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-white/10">
            <h1 className="text-2xl font-bold text-white mb-4">Error</h1>
            <p className="text-gray-300">
              Unable to load the requested content.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-6 px-6"
      style={{
        background:
          "linear-gradient(135deg, #162A38 0%, #162D3B 60%, #0F0E14 100%)",
      }}
    >
      <div className="max-w-full mx-auto">
        <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-white/10">
          {formatContent(markdownContent)}
        </div>
      </div>
    </div>
  );
}
