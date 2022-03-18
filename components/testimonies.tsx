import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "./css/Testimonies.module.css";

// import required modules
import { Navigation } from "swiper";
import { Typography } from "@mui/material";

export default function Testimonies() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiper_slide}>
          <p className={styles.testimony_text}>
            <strong>
              Nani is the worst photographer I ever met in my life. He does not
              know the spelling of photography. He is worst fellow andi. Happy
              Holi tammudu &#128516;
            </strong>
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
