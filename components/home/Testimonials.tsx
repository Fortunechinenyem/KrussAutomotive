import { Testimonial } from "@/types";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0c4187] mb-4">
          What Our Customers Say
        </h2>
        <div className="border-b-4 border-[#2cbbd4] w-20 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4 text-[#FFD700]">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <FaQuoteLeft className="text-[#2cbbd4] text-xl mb-4" />
              <div className="text-[#0c4187] mb-6 italic text-lg">
                {testimonial.quote}
              </div>
              <div className="text-[#2cbbd4] font-medium">
                — {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
