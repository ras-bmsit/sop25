import React from "react";

// Generates a random height for image boxes
const getRandomHeight = () => {
  const heights = ["h-40", "h-52", "h-64", "h-72", "h-80", "h-96"];
  return heights[Math.floor(Math.random() * heights.length)];
};

// Screenshot image file names
const imagePaths = [
  "/Highlights/Screenshot1.png",
  "/Highlights/Screenshot2.png",
  "/Highlights/Screenshot3.png",
  "/Highlights/Screenshot4.png",
  "/Highlights/Screenshot5.png",
  "/Highlights/Screenshot6.png",
  "/Highlights/Screenshot7.png",
  "/Highlights/Screenshot8.png",
  "/Highlights/Screenshot9.png",
];

const HighlightsGallery = () => {
  return (
    <section id="highlights" className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 mario-font border-b-4 border-yellow-400 inline-block pb-2">
        SoP 2024 Highlights
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {imagePaths.map((src, i) => {
          const randomHeight = getRandomHeight();
          return (
            <img
              key={i}
              src={src}
              alt={`Highlight ${i + 1}`}
              className={`w-full object-cover rounded-lg shadow-lg ${randomHeight}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HighlightsGallery;
