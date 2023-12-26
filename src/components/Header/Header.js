import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import styles from "./Header.module.css";
import resume from "../../assets/resume.png";
import resume1 from "../../assets/curriculum-vitae.png";
import Counts from "../Counts/Counts";
import Footer from "../Footer/Footer";

const NextArrow = ({ onClick }) => (
  <div className={styles.nextArrow} onClick={onClick}>
    <BsChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={styles.prevArrow} onClick={onClick}>
    <BsChevronLeft />
  </div>
);

const Header = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to go to the next slide
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  // Automatic slide change interval (in milliseconds)
  const autoSlideInterval = 3000;

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Function to handle image click and scroll to 800 pixels
  // const handleImageClick = () => {
  //   window.scrollTo({ top: 700, behavior: "smooth" });
  // };

  const templateImages = images.map((image, idx) => (
    <div
      className={idx === imageIndex ? styles.activeSlide : styles.slide}
      key={image.id}
    >
      <div
        className={styles.slideWrapper}
        // onClick={handleImageClick}
      >
        {image.code ? image.code : <img src={image.src} alt={image.alt} />}
      </div>
    </div>
  ));

  return (
    <>
      <div className={styles["slider-container"]}>
        <Slider ref={sliderRef} {...settings}>
          {templateImages}
        </Slider>
      </div>
      <br />
      <div>
        <div className={styles["aboutSection"]}>
          <div className={styles["container3"]}>
            <div className={styles["aboutContent"]}>
              <div className={styles["aboutImage"]}>
                <img src={resume} alt="Your Photo" />
              </div>
              <div className={styles["aboutInfo"]}>
                {/* <h2>About</h2> */}
                <p className={styles["text"]}>
                  A resume builder is a website that allows you to rapidly
                  generate a resume. Resume builders enable you to select a
                  pre-formatted resume template, fill in your contact and
                  background details, and select pre-written job history bullet
                  points. You'll save a lot of time.
                </p>
                <p>
                  However, not all resume builders are made equal. Choose a
                  high-quality resume builder that is simple to use, has a
                  decent range of professional layouts, and gives bullet points
                  targeted to your needs so you can best illustrate your prior
                  achievements in context.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["aboutSection"]}>
          <div className={styles["container3"]}>
            <div className={styles["aboutContent"]}>
              <div className={styles["aboutInfo"]}>
                {/* <h2>About Me</h2> */}
                <p className={styles["text"]}>
                  The goal of an online resume builder is to automate the
                  existing manual method by employing computerized equipment and
                  full-featured computer software to fulfill their demands, so
                  their important information may be saved for longer period of
                  time with simple and manipulation.
                </p>
                <p>
                  Using a resume builder provides you with current resume
                  templates to use. You don't want to employ a template from ten
                  years ago since it might lose you a job interview or possibly
                  the job itself. Furthermore, you may personalize these
                  templates to your own.
                </p>
              </div>
              <div className={styles["aboutImage"]}>
                <img src={resume1} alt="Your Photo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>Resume Download Count Number, visit count</div> */}
      <Counts />
      {/* <div>Footer</div> */}
      <Footer />
    </>
  );
};

export default Header;
