import Image from "next/image";
import CTAButton from "../common/CTAButton";

const CTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-95"></div>

      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/pattern-grid.svg"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Vehicle Experience?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-lg">
              Join hundreds of satisfied customers who trust Kruss Automotive
              for their vehicle needs. From routine maintenance to CNG
              conversions, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CTAButton
                href="/book-appointment"
                variant="primary"
                className="px-8 py-4 text-lg"
              >
                Book Appointment Now
              </CTAButton>
              <CTAButton
                href="/contact"
                variant="outline"
                className="px-8 py-4 text-lg border-2"
              >
                Get a Quote
              </CTAButton>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/images/cta-illustration.png"
                alt="Happy customer with car"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/80 text-center mb-6">
            Trusted by leading brands and individuals
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[
              "/images/brands/brand-1.svg",
              "/images/brands/brand-2.svg",
              "/images/brands/brand-3.svg",
              "/images/brands/brand-4.svg",
            ].map((logo, index) => (
              <div
                key={index}
                className="relative h-8 w-24 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={logo}
                  alt="Trusted brand"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
