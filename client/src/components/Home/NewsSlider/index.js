import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import history from "../../Routers/history";

const slides = [
  {
    title: "Edison Cavani on his way out.",
    description:
      "The Uraguayian super star is at the end of his PSG contract and is now up for grabs.",
    image:
      "https://img.bleacherreport.net/img/images/photos/003/848/415/hi-res-721f6cc92cc4dd87fb17cc3476e04a6a_crop_north.jpg?1579614823&w=3072&h=2048",
  },
  { title: "Second Item", description: "This is the second item" },
];

const NewsSlider = () => {
  return (
    <div>
      <Slider>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${slide.image}') no-repeat center center`,
            }}
            onClick={() => history.push("/login")}
          >
            <h2>{slide.title}</h2>
            <div>{slide.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
