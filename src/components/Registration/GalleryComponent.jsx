import React from "react";
import {GalleryDiv} from "./GalleryComponent.styles";
import SwiperCore, {EffectCoverflow, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperConst = () => {
    return (
        <div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-1.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-2.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-3.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-4.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-5.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-6.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-7.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-8.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://swiperjs.com/demos/images/nature-9.jpg"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

function GalleryComponent() {
    return (
        <>
            <GalleryDiv>
                <SwiperConst />
            </GalleryDiv>
        </>
    );
}

export default GalleryComponent;
