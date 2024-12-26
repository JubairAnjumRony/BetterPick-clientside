import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Base Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Alice Johnson',
      image: 'https://i.ibb.co.com/BBTSqZr/face-1869641-640.jpg',
      rating: 5,
      comment: 'BetterPick helped me find the perfect laptop within minutes!',
    },
    {
      id: 2,
      name: 'Michael Smith',
      image: 'https://i.ibb.co.com/LzNpNY8/pexels-justin-shaifer-501272-1222271.jpg',
      rating: 4,
      comment: 'Amazing service! I love the recommendations.',
    },
    {
      id: 3,
      name: 'Sophia Williams',
      image: 'https://i.ibb.co.com/CBxVkMW/pexels-olly-774909.jpg',
      rating: 5,
      comment: 'Very accurate suggestions, saved me a lot of time.',
    },
  ];

  return (
    <section className="testimonials py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card bg-gray-50 rounded-lg shadow-md p-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-yellow-500 mt-2">
                  {'★'.repeat(testimonial.rating)}
                  {'☆'.repeat(5 - testimonial.rating)}
                </p>
                <p className="text-gray-600 mt-4">{testimonial.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Submit Your Story
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
