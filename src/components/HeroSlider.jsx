import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Fade } from "react-awesome-reveal";

const HeroSlider = ({scrollToFeatured}) => {
    return (
        <div className ="">
        <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={50}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
    >
      <SwiperSlide>
        <div
          className="hero h-[500px] rounded-xl shadow-2xl"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/KzLZ1yv/image-2.jpg')",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-lg">
              <Fade cascade>
              <h1 className="mb-5 text-5xl font-bold text-black">
                Discover Your Path
              </h1>
              <p className="mb-5 text-black">
                Unlock your true potential with expert Query counseling.
                Explore personalized guidance, resources, and tools to navigate
                your professional journey with confidence.
              </p>
              </Fade>
              <Link to="/">
                <button onClick={scrollToFeatured} className="btn bg-success-dark hover:bg-success-primary-500 text-[#578FCA] border-none">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero h-[500px] rounded-xl shadow-2xl "
          style={{
            backgroundImage: "url('https://i.ibb.co.com/NVdnM9j/img-3.jpg')",
          }}
        >
          <div className=""></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-lg">
              <Fade cascade>
              <h1 className="mb-5 text-5xl font-bold text-black">
                Shape Your Future
              </h1>
              <p className="mb-5 text-black">
                Find clarity in your career decisions with tailored advice and
                insights. Your aspirations deserve the right direction—start
                building your dream future today.
              </p>
              </Fade>
              <Link to="/" >
                <button onClick={scrollToFeatured} className="btn text-[#578FCA] border-none">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="hero h-[500px] rounded-xl shadow-2xl"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/3S1g7xq/concept-recommendation-business-technology-internet-314054647.webp')",
          }}
        >
          <div className=""></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-lg">
              <Fade cascade>
              <h1 className="mb-5 text-5xl font-bold text-black">
                Empowering Career Choices
              </h1>
              <p className="mb-5 text-black ">
                Connect with career experts and access top-notch resources to
                make informed decisions. Your success starts with the right
                guidance—let’s take the first step together.
              </p>
              </Fade>
              <Link to="/" clas>
                <button onClick={scrollToFeatured} className="btn bg-success-dark hover:bg-success-primary-500 text-[#578FCA] border-none">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  );
}



export default HeroSlider;