const StatsSection = () => {
  const stats = [
    { value: "100%", label: "Customer Satisfaction" },
    { value: "200+", label: "Vehicles Serviced Monthly" },
    { value: "24/7", label: "Roadside Assistance" },
    { value: "10+", label: "Years of Experience" },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-[#2395a9] mb-2">
                {stat.value}
              </h3>
              <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
