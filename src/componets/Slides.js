import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

export default function Slider() {
  return (
      <Swiper pagination={true} modules={[Autoplay, Pagination]} speed={1000} autoplay className="slider">
        <SwiperSlide>
            <div className="slide slide-one">
                <div className="contents">
                    <div className="quran">
                        <h1>(القرآن) وَرَتِّلِ الْقُرْآنَ تَرْتِیْلاً</h1>
                        <h3>and recite the Qur’an slowly in stages.</h3>
                        <Link to="#read-more" className="read-more">Read More</Link>
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
                        <Link to="#read-more" className="read-more">Read More</Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide slide-three">
                <div className="contents">
                    <div className="quran">
                        <h1>(الحدیث) مَنْ يُرِدِ اَللَّهُ تَعَالَى بِهِ خَيْراً يُفَقِّهْهُ فِي اَلدِّينِ</h1>
                        <h3>“When Allah wishes good for anyone, He bestows upon him the Fiqh (comprehension) of the religion.”</h3>
                        <Link to="#read-more" className="read-more">Read More</Link>
                    </div>
                </div>
            </div>  
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide slide-four">
                <div className="contents">
                    <div className="quran">
                        <h1>.(مقولۃ معروفۃ) النحو فی الکلام کالملح فی الطعام</h1>
                        <h3>Grammar in speech is like salt in food.</h3>
                        <Link to="#read-more" className="read-more">Read More</Link>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
  );
}
