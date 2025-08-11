import Image from "next/image";
import StructuredData, {
  organizationSchema,
} from "@/components/common/StructuredData";
import {
  FaCheck,
  FaCar,
  FaUsers,
  FaAward,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
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

  const leadership = [
    {
      name: "Joshua Ayodeji Aribido",
      role: "Founder & CEO",
      bio: "Automotive industry veteran with 7+ years experience in vehicle service and technology integration.",
      image: "/images/team-1.jpg",
    },
    {
      name: "Fortune Chinenyem-Aribido",
      role: "Chief Technology Officer",
      bio: "Leads our digital transformation initiatives to create seamless customer experiences.",
      image: "/images/team-2.jpg",
    },
    {
      name: "The Trinity",
      role: "Head of Service Operations",
      bio: "Oversees all service operations with a focus on quality and efficiency.",
      image: "/images/team-3.jpg",
    },
  ];

  const coreValues = [
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
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0c4187] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Kruss Automotive
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Revolutionizing vehicle services through technology and exceptional
            craftsmanship
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero.jpg"
                alt="Kruss Automotive Service Center"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#0c4187] mb-6">
              Our Story
            </h2>
            <p className="text-lg text-[#0c4187]/90 mb-6">
              Founded in 2019, Kruss Automotive was born from a vision to
              modernize the automotive service industry. We combine cutting-edge
              technology with old-fashioned craftsmanship to deliver exceptional
              service.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Pioneers in CNG conversion technology",
                "First fully digital automotive service center in the region",
                "Award-winning customer service 3 years running",
                "5000+ satisfied customers and counting",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <FaCheck className="text-[#7f870c] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#0c4187]">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-[#2cbbd4] hover:bg-[#2395a9] text-white font-medium rounded-lg transition-colors"
            >
              Explore Our Services <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#e6edf7] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0c4187] mb-4">
              Our Mission
            </h2>
            <div className="border-b-4 border-[#2cbbd4] w-20 mx-auto mb-6"></div>
            <p className="text-xl text-[#0c4187]/90 max-w-4xl mx-auto">
              To create a seamless, transparent, and stress-free automotive
              service experience by combining cutting-edge technology with
              old-fashioned craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-[#f5f7e6] p-4 rounded-full inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-[#7f870c]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0c4187] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#0c4187]/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#0c4187] mb-4">
            Meet Our Leadership
          </h2>
          <div className="border-b-4 border-[#2cbbd4] w-20 mx-auto mb-6"></div>
          <p className="text-[#0c4187]/90 max-w-2xl mx-auto">
            Our experienced team brings together decades of automotive expertise
            and technological innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((member, index) => (
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
                <p className="text-[#2cbbd4] mb-3">{member.role}</p>
                <p className="text-[#0c4187]/80">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#0c4187] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <div className="border-b-4 border-[#2cbbd4] w-20 mx-auto mb-6"></div>
            <p className="text-white/90 max-w-3xl mx-auto">
              These principles guide every decision we make and every service we
              provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#2cbbd4]">
                  {value.title}
                </h3>
                <p className="text-white/90">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2cbbd4] text-white py-16">
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
