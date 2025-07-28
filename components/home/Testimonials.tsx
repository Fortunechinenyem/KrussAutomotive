import { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Taxi Fleet Owner",
    content:
      "Kruss Automotive transformed our fleet operations with their CNG conversion services. The fuel savings have been incredible and their maintenance packages keep our vehicles running smoothly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Individual Customer",
    content:
      "The team at Kruss is professional and knowledgeable. They explained everything about my car service in simple terms and delivered ahead of schedule. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Business Owner",
    content:
      "Their preventive maintenance program has saved us thousands in unexpected repairs. The digital service tracking is a game-changer for managing our company vehicles.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-[#0c4187] mb-2 text-center">
        What Our Customers Say
      </h2>
      <div className="border-b-4 border-[#2cbbd4] w-20 mx-auto mb-12"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            quote:
              "Kruss Automotive transformed our fleet operations with their CNG conversion services. The fuel savings have been incredible!",
            author: "Rahul Sharma, Taxi Fleet Owner",
          },
          {
            quote:
              "The team at Kruss is professional and knowledgeable. They explained everything about my car service in simple terms.",
            author: "Priya Patel, Individual Customer",
          },
          {
            quote:
              "Their preventive maintenance program has saved us thousands in unexpected repairs. Highly recommended!",
            author: "Vikram Singh, Business Owner",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="text-[#0c4187] mb-4 italic">
              "{testimonial.quote}"
            </div>
            <div className="text-[#2cbbd4] font-medium">
              — {testimonial.author}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
