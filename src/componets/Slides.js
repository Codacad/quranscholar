import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Slider() {
  return (
      <Swiper navigation={true} modules={[Navigation]} className="slider">
        <SwiperSlide>
            <div className="slide slide-one">
                <div className="contents">
                    <div className="quran">
                        <h1>(القرآن) وَرَتِّلِ الْقُرْآنَ تَرْتِیْلاً</h1>
                        <h3>and recite the Qur’an slowly in stages.</h3>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide slide-two">
                <div className="contents">
                    <div className="quran">
                        <h1>(الحدیث) خَيْرُکُم مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</h1>
                        <h3>"The best among you (Muslims) are those who learn the Qur'an and teach it.</h3>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide slide-three">
                <div className="contents">
                    <div className="quran">
                        <h1>(القرآن) وَرَتِّلِ الْقُرْآنَ تَرْتِیْلاً</h1>
                        <h3>and recite the Qur’an slowly in stages.</h3>
                    </div>
                </div>
            </div>  
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide slide-four">
                <div className="contents">
                    <div className="quran">
                        <h1>(القرآن) وَرَتِّلِ الْقُرْآنَ تَرْتِیْلاً</h1>
                        <h3>and recite the Qur’an slowly in stages.</h3>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
  );
}
