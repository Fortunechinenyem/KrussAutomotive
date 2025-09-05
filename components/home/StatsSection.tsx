import { FaUsers, FaClock, FaStar, FaHeadset } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      value: "100+",
      label: "Satisfied Customers",
      icon: <FaUsers className="text-2xl md:text-3xl" />,
      delay: 100,
    },
    {
      value: "7+",
      label: "Years Experience",
      icon: <FaClock className="text-2xl md:text-3xl" />,
      delay: 200,
    },
    {
      value: "98%",
      label: "Customer Satisfaction",
      icon: <FaStar className="text-2xl md:text-3xl" />,
      delay: 300,
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <FaHeadset className="text-2xl md:text-3xl" />,
      delay: 400,
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#2cbbd4] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0c4187] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.jpg')] opacity-[0.02]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#2cbbd4]/10 border border-[#2cbbd4]/20 mb-6">
            <span className="text-[#2cbbd4] text-sm font-medium uppercase tracking-wider">
              Our Achievements
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0c4187] mb-4">
            Excellence By The Numbers
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] mx-auto mb-6"></div>
          <p className="text-lg text-[#0c4187]/70 max-w-2xl mx-auto">
            Our commitment to quality service and customer satisfaction is
            reflected in these numbers
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0c4187] to-[#2cbbd4] opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Icon container */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e6edf7] to-white shadow-inner group-hover:from-[#2cbbd4]/10 group-hover:to-[#0c4187]/10 transition-all duration-500">
                  <div className="text-[#2cbbd4] group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                </div>
              </div>

              {/* Stat value */}
              <div className="relative mb-2">
                <span className="text-4xl md:text-5xl font-bold text-[#0c4187] group-hover:text-[#0c4187] transition-colors duration-500">
                  {stat.value}
                </span>
              </div>

              {/* Stat label */}
              <div className="relative">
                <p className="text-lg text-[#0c4187]/70 group-hover:text-[#0c4187]/90 transition-colors duration-500 font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="text-center mt-16 pt-8 border-t border-[#0c4187]/10">
          <p className="text-lg text-[#0c4187]/60 italic max-w-3xl mx-auto">
            "These numbers represent our commitment to excellence and the trust
            our customers place in us every day."
          </p>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-count-up {
          animation: countUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
