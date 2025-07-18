import CTAButton from "../common/CTAButton";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center py-20 mt-9"
      style={{
        backgroundImage:
          "linear-gradient(rgba(12, 65, 135, 0.9), rgba(12, 65, 135, 0.7)), url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0c4187]/30"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div
          className="inline-flex items-center px-6 py-1 rounded-full mb-6"
          style={{
            backgroundColor: "rgba(44, 187, 212, 0.2)",
            border: "1px solid rgba(44, 187, 212, 0.3)",
          }}
        >
          <span className="text-[#2cbbd4] text-sm md:text-base">
            Reinventing vehicle ownership & maintenance
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Seamless Automotive Services{" "}
          <span style={{ color: "#2cbbd4" }}>From Start to Finish</span>
        </h1>

        {/* Description */}
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          We combine expertise, technology, and care to revolutionize your
          vehicle ownership experience. From pre-purchase inspections to
          after-sale services, we've got you covered.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/services" variant="primary">
            Explore Services
          </CTAButton>
          <CTAButton href="/book-appointment" variant="secondary">
            Book Appointment
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
