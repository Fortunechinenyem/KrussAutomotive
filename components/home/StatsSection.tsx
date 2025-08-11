const StatsSection = () => {
  return (
    <section className="bg-[#e6edf7] rounded-xl p-12 my-20 container mx-auto">
      <h2 className="text-3xl font-bold text-[#0c4187] mb-2 text-center">
        By The Numbers
      </h2>
      <div className="border-b-4 border-[#2cbbd4] w-20 mx-auto mb-12"></div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { value: "5000+", label: "Satisfied Customers" },
          { value: "10+", label: "Years Experience" },
          { value: "98%", label: "Customer Satisfaction" },
          { value: "24/7", label: "Support Available" },
        ].map((stat, index) => (
          <div key={index}>
            <div className="text-4xl font-bold text-[#0c4187] mb-2">
              {stat.value}
            </div>
            <div className="text-lg text-[#0c4187]/80">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
