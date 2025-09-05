import { useState, useEffect } from "react";
import { Testimonial } from "@/types";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa6";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      quote:
        "Kruss Automotive transformed our fleet operations with their CNG conversion services. The fuel savings have been incredible!",
      author: "Rahul Sharma, Taxi Fleet Owner",
      rating: 5,
    },
    {
      quote:
        "The team at Kruss is professional and knowledgeable. They explained everything about my car service in simple terms.",
      author: "Priya Patel, Individual Customer",
      rating: 5,
    },
    {
      quote:
        "Their preventive maintenance program has saved us thousands in unexpected repairs. Highly recommended!",
      author: "Vikram Singh, Business Owner",
      rating: 4,
    },
    {
      quote:
        "Excellent service and quick turnaround time. My car has never run better after their comprehensive check-up.",
      author: "Anjali Mehta, Regular Customer",
      rating: 5,
    },
    {
      quote:
        "The CNG conversion was seamless and the after-service support has been exceptional. Truly a customer-centric company.",
      author: "Sanjay Verma, Transport Business",
      rating: 5,
    },
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0c4187] mb-4">
            Voices of Satisfaction
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why our customers trust Kruss Automotive for their vehicle
            needs
          </p>
          <div className="border-b-4 border-[#2cbbd4] w-20 mx-auto mt-6"></div>
        </div>

        {/* Desktop grid view */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 left-6 bg-[#0c4187] text-white text-sm font-semibold px-4 py-1 rounded-full">
                {index + 1}/{testimonials.length}
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-5xl text-[#2cbbd4] opacity-20 mb-2">
                <FaQuoteLeft />
              </div>
              <div className="text-[#0c4187] mb-6 text-lg leading-relaxed">
                {testimonial.quote}
              </div>
              <div className="border-t border-gray-100 pt-4">
                <div className="text-[#2cbbd4] font-semibold">
                  {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel view */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-5xl text-[#2cbbd4] opacity-20 mb-2">
                      <FaQuoteLeft />
                    </div>
                    <div className="text-[#0c4187] mb-6 text-lg leading-relaxed">
                      {testimonial.quote}
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <div className="text-[#2cbbd4] font-semibold">
                        {testimonial.author}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-[#0c4187] hover:text-white transition-colors"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-[#0c4187] hover:text-white transition-colors"
          >
            <FaChevronRight />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-[#2cbbd4]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Join hundreds of satisfied customers
          </p>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0c4187]">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0c4187]">100 +</div>
              <div className="text-gray-600">Vehicles Serviced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0c4187]">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
