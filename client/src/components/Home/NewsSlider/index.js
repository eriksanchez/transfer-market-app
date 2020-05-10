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
  {
    title:
      "Carlos Vela, starting off another season in the MLS with a wonder goal!",
    description:
      "Carlos Vela, coming off a history season in the 2019 campaign, shows no stop of slowing down for the 2020 season. With 35 goals in 30 goals, Carlos Vela comes into the new season with no signs of form loss.",
    image: "https://goolfm.net/wp-content/uploads/2020/03/Carlos-Vela.jpg",
  },
];

const NewsSlider = () => {
  return (
    <div
      style={{
        width: "60%",
        marginLeft: "10px",
      }}
    >
      <Slider>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              background: `url('${slide.image}') no-repeat center center`,
            }}
            onClick={() => history.push("/login")}
          >
            <div style={{ backgroundColor: "rgba(75,171,232)", float: "left" }}>
              <h2 style={{ color: "white" }}>{slide.title}</h2>
            </div>
            <div style={{ color: "white" }}>{slide.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
