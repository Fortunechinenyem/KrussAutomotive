import CTAButton from "../common/CTAButton";

const HeroSection = () => {
  return (
    <section
      className="py-20 relative h-screen flex items-center justify-center bg-gradient-to-br from-black/70 to-transparent"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="inline-flex items-center bg-white/10 px-6 py-1 rounded-full mb-6">
          <span className="text-white text-sm md:text-base">
            Reinventing vehicle ownership & maintenance
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Seamless Automotive Services{" "}
          <span className="text-orange-400">From Start to Finish</span>
        </h1>

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
