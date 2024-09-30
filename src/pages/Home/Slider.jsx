import React from 'react'
// import { cv, resume ,coverLetter } from '../../data/data'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css'
import { t } from 'i18next';
const Slider = ({templet}) => {
    const { i18n} = useTranslation();
    return (
        <Swiper
            modules={[ Autoplay,Pagination]}
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
            autoplay={{
                delay: 4000,
                reverseDirection: i18n.language ==="en"?false:true,
            }}
            navigation={true}
            className="mySwiper"
                >
        {
            templet.map((item,index)=>
                <SwiperSlide key={index}>
                    <div className="wraaper-slide">
                        <div className="container-slide">
                        <img  src={item.src} alt=""/>
                        <Link  to="" className=" startWith_btn hvr-sweep-to-right">{t('startwiththisTemplate')}</Link>
                        <h5 className="slide-title">{i18n.language ==="en"?item.title:item.title_ar}</h5>
                        </div>
                    </div>
                </SwiperSlide>
            )
        }
        </Swiper>
    )
}

export default Slider