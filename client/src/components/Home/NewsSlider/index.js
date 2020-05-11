import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import history from "../../Routers/history";

const slides = [
  {
    title: "Edison Cavani Contract.",
    description:
      "The Uraguayian super star is at the end of his PSG contract...",
    logoImage:
      "https://lh3.googleusercontent.com/proxy/tS3TlY6RYG_lCskU9Am3wom_4noVDMFWYZpJGzbAos4gMZ_B4WJqdFptRdK5yk6B21Ca0D9DV1gpYBtguOOgn0O66_8km_FjV4-cdh8ajLsuOMqbwVuByGnyjLlOeKfYEw",
    image:
      "https://img.bleacherreport.net/img/images/photos/003/848/415/hi-res-721f6cc92cc4dd87fb17cc3476e04a6a_crop_north.jpg?1579614823&w=3072&h=2048",
  },
  {
    title: "MLS Start on fire!",
    description:
      "Carlos Vela, starting off another season in the MLS with a wonder goal!",
    logoImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MLS_crest_logo_RGB_gradient.svg/1200px-MLS_crest_logo_RGB_gradient.svg.png",
    image: "https://goolfm.net/wp-content/uploads/2020/03/Carlos-Vela.jpg",
  },
  {
    title: "Local Football",
    description: "Lucchese on top of the table, look to return to Serie C",
    logoImage:
      "https://upload.wikimedia.org/wikipedia/it/0/02/Lucchesestemma.png",
    image:
      "https://www.ivg.it/photogallery_new/images/2014/11/lucchese-258543.660x368.jpg",
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
            {/*Container with Title, Image, And Description*/}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,

                flexDirection: "column",
              }}
            >
              {/*Title Container */}
              <div
                style={{
                  backgroundColor: "rgba(75,171,232)",
                  display: "inline-block",
                }}
              >
                <h2
                  style={{
                    color: "white",
                    margin: "5px",
                    fontSize: "20px",
                  }}
                >
                  {slide.title.toLocaleUpperCase()}
                </h2>
              </div>

              {/*Image and Description Container */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <img
                  alt=""
                  style={{ width: "100px", height: "100px", margin: "7px" }}
                  src={slide.logoImage}
                ></img>
                <div
                  style={{
                    color: "white",
                  }}
                >
                  <h2 style={{ font: "bold", margin: "5px" }}>
                    {slide.description}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
