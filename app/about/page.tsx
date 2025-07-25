import Image from "next/image";
import StructuredData, {
  organizationSchema,
} from "@/components/common/StructuredData";
import { FaCheck, FaCar, FaUsers, FaAward, FaHandshake } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "About Kruss Automotive | Revolutionizing Vehicle Services",
  description:
    "Learn about Kruss Automotive - reinventing vehicle ownership, repair & maintenance through technology and exceptional service.",
  keywords:
    "automotive services, car maintenance, vehicle repair, CNG conversion, about Kruss Automotive",
};

const AboutPage = () => {
  const features = [
    {
      icon: FaCar,
      title: "Vehicle Expertise",
      description:
        "10+ years of experience servicing all vehicle makes and models",
    },
    {
      icon: FaUsers,
      title: "Customer Focus",
      description: "5000+ satisfied customers and growing",
    },
    {
      icon: FaAward,
      title: "Certified Technicians",
      description: "ASE-certified professionals handling your vehicle",
    },
    {
      icon: FaHandshake,
      title: "Trusted Partnerships",
      description: "Official partnerships with major automotive brands",
    },
  ];

  return (
    <div className="pt-32 pb-20 bg-white">
      <section className="container mx-auto px-4 mb-16 md:mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              About Our Company
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c4187] mb-4 md:mb-6 leading-tight">
              Revolutionizing <span className="text-[#2cbbd4]">Automotive</span>{" "}
              Services
            </h1>
            <p className="text-base md:text-lg text-[#0c4187]/90 mb-6 md:mb-8">
              At Kruss Automotive, we're transforming the vehicle ownership
              experience through innovative technology and unparalleled service.
              From pre-purchase inspections to after-sale maintenance, we
              provide comprehensive solutions that put you in control.
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {[
                "Founded in 2019 with a vision to modernize auto services",
                "Pioneers in CNG conversion technology",
                "First fully digital automotive service center in the region",
                "Award-winning customer service 3 years running",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <FaCheck className="text-[#7f870c] mt-1 mr-3 flex-shrink-0 min-w-5" />
                  <p className="text-[#0c4187] text-sm md:text-base">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about/more"
              className="inline-flex items-center px-6 py-2.5 bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium rounded-lg transition-colors duration-300 shadow-sm"
            >
              Learn More About Us
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero.jpg"
                alt="Kruss Automotive Service Center"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0c4187]/10 to-[#0c4187]/5"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#e6edf7] py-16">
        {" "}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0c4187] mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-[#0c4187]/90">
              To create a seamless, transparent, and stress-free automotive
              service experience by combining cutting-edge technology with
              old-fashioned craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#f5f7e6] p-4 rounded-full text-[#7f870c]">
                    {" "}
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#0c4187]">
                  {feature.title}
                </h3>
                <p className="text-[#0c4187]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0c4187] mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-[#0c4187]/90 max-w-2xl mx-auto">
            Our experienced team brings together decades of automotive expertise
            and technological innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Rahul Kruss",
              role: "Founder & CEO",
              bio: "Automotive industry veteran with 20+ years experience in vehicle service and technology integration.",
              image: "/images/team-1.jpg",
            },
            {
              name: "Priya Nair",
              role: "Chief Technology Officer",
              bio: "Leads our digital transformation initiatives to create seamless customer experiences.",
              image: "/images/team-2.jpg",
            },
            {
              name: "Vikram Joshi",
              role: "Head of Service Operations",
              bio: "Oversees all service operations with a focus on quality and efficiency.",
              image: "/images/team-3.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0c4187] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#2cbbd4] mb-4">{member.role}</p>{" "}
                <p className="text-[#0c4187]/80">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0c4187] text-white py-16">
        {" "}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-white/90">
              These principles guide every decision we make and every service we
              provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description:
                  "No hidden fees or surprise charges. We explain every service in clear terms.",
              },
              {
                title: "Innovation",
                description:
                  "Constantly evolving our methods and technology to serve you better.",
              },
              {
                title: "Integrity",
                description:
                  "We recommend only what your vehicle truly needs, nothing more.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-[#0c4187]/90 p-6 rounded-lg hover:bg-[#0c4187]/80 transition-colors"
              >
                {" "}
                <h3 className="text-xl font-semibold mb-3 text-[#2cbbd4]">
                  {" "}
                  {value.title}
                </h3>
                <p className="text-white/90">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#2cbbd4] text-white">
        {" "}
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience the Kruss Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your vehicle ownership experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="inline-block bg-white hover:bg-gray-100 text-[#0c4187] font-medium px-8 py-3 rounded-full transition-colors"
            >
              Book an Appointment
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white hover:bg-white hover:text-[#0c4187] font-medium px-8 py-3 rounded-full transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <StructuredData data={organizationSchema} />
    </div>
  );
};

export default AboutPage;
