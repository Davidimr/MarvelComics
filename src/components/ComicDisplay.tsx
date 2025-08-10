import { useEffect, useState } from "react";
import { ComicContainer } from "../styles/styles";
import { list } from "../services/comics.service";
import type { Comics } from "../interfaces/comics.interface";

import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from "swiper/modules";


export function Comics() {
  const [comics, setComics] = useState([]);
  

  

  useEffect(() => {
    getComics();
  }, []);

  const getComics = async () => {
    const params = {
      limit: 20,
      offset: 3,
    };

    const response = await list(params);

    setComics(response.data.data.results);
 
  };

  console.log(comics);

  const imageSize = "/portrait_uncanny.jpg";

  return (
    <ComicContainer>
      <Swiper
        className="mySwiper"
        loop={true}
        grabCursor
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        autoplay={true}
        initialSlide={3}
        centeredSlides={true}
        slideToClickedSlide
        breakpoints={{
          400: { spaceBetween: 20, slidesPerView: 2 },
          650: { spaceBetween: 30, slidesPerView: 3 },
          1000: { spaceBetween: 40, slidesPerView: 4 },
          1300: { spaceBetween: 50, slidesPerView: 5 },
        }}
      >
        {comics.map((item: Comics, index: number) => {
          return (
          <SwiperSlide className="slide-card" style={{backgroundImage: `url(${item.thumbnail.path + imageSize})`}} key={index}>
                <div className="information">
                {/* <img src={item.thumbnail.path + imageSize} /> */}
                  <span >{item.title}</span>
                  <p>R${item.prices[0].price}</p>
                </div>
            </SwiperSlide>
          );
        })}
      </Swiper>


        <div>
        <h1>
          Você tambem pode gostar:
          </h1>

        </div>
    </ComicContainer>
  );
}
