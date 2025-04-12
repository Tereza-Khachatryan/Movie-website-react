import "../Styles/movieSwiper.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Autoplay, EffectCoverflow } from "swiper/modules"

function MovieSwiper ({ slides, slideChange }) {
    return (
       <div className="swiper-div">
             <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView='auto'
            spaceBetween={20}
            autoplay={{
                delay:2500, 
                disableOnInteraction:false
            }}
            coverflowEffect={{
                rotate:50, 
                stretch: 0, 
                depth: 100,
                modifier: 1,
                slideShadows: true
            }}
            loop={true}
            modules={[Autoplay, EffectCoverflow]}
            className="movieSwiper"
        >
            {
                slides.map((slide) =>  (
                        <SwiperSlide key={slide._id}>
                            <img 
                                onClick={() => {slideChange(slide._id)}}
                                className="slide-img" 
                                src={`../src${slide.previewImg}`} 
                                alt={slide.title}/>
                        </SwiperSlide>
                    )
                )
            }
        </Swiper>
       </div>
    )
}

export default MovieSwiper