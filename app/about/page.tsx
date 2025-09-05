"use client";
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
  FaTools,
  FaClock,
  FaShieldAlt,
  FaHeart,
  FaLightbulb,
  FaRocket,
  FaChartLine,
  FaCog,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Define types
interface AnimatedStatProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  index: number;
}

interface Problem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Solution {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  stat: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface CoreValue {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
}

// Animated Stat Component
const AnimatedStat = ({ number, label, icon, index }: AnimatedStatProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          // Animate number counting
          let start = 0;
          const end = parseInt(number.replace("+", "").replace("%", ""));
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [number, isVisible]);

  return (
    <div
      ref={statRef}
      className="text-center transform transition-all duration-1000"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#e6edf7] to-white shadow-lg mb-6">
        <div className="text-[#2cbbd4] text-2xl">{icon}</div>
        <div className="absolute -inset-4 bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] rounded-2xl opacity-0 hover:opacity-5 transition-opacity duration-500"></div>
      </div>
      <div className="text-4xl font-bold text-[#0c4187] mb-2">
        {number.includes("%") || number.includes("+")
          ? `${count}${number.replace(/[0-9]/g, "")}`
          : count}
      </div>
      <div className="text-sm text-[#0c4187]/70 font-medium">{label}</div>
    </div>
  );
};

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const problems: Problem[] = [
    {
      title: "Time-Consuming Processes",
      description:
        "Spending hours waiting at repair shops and dealing with paperwork",
      icon: <FaClock className="text-4xl text-[#2cbbd4]" />,
    },
    {
      title: "Lack of Transparency",
      description:
        "Hidden costs and unclear explanations about necessary repairs",
      icon: <FaShieldAlt className="text-4xl text-[#2cbbd4]" />,
    },
    {
      title: "Rising Fuel Costs",
      description: "Increasing expenses making vehicle ownership burdensome",
      icon: <FaChartLine className="text-4xl text-[#2cbbd4]" />,
    },
    {
      title: "Inconvenient Services",
      description: "Difficulty scheduling around work and personal commitments",
      icon: <FaCog className="text-4xl text-[#2cbbd4]" />,
    },
  ];

  const solutions: Solution[] = [
    {
      title: "Digital-First Approach",
      description:
        "Streamlined booking, transparent pricing, and real-time updates",
      icon: <FaRocket className="text-4xl text-[#2cbbd4]" />,
    },
    {
      title: "CNG Conversion Expertise",
      description:
        "Cut fuel costs by up to 60% with our certified conversion services",
      icon: <FaCar className="text-4xl text-[#2cbbd4]" />,
    },
    {
      title: "Mobile Services",
      description:
        "We come to you with our pickup and delivery service options",
      icon: <FaTools className="text-4xl text-[#2cbbd4]" />,
    },
    {
      title: "Auto-Errand Service",
      description: "We handle your vehicle-related paperwork and errands",
      icon: <FaCheck className="text-4xl text-[#2cbbd4]" />,
    },
  ];

  const features: Feature[] = [
    {
      icon: FaCar,
      title: "Vehicle Expertise",
      description:
        "10+ years of experience servicing all vehicle makes and models",
      stat: "100+",
    },
    {
      icon: FaUsers,
      title: "Customer Focus",
      description: "5000+ satisfied customers and growing",
      stat: "5000+",
    },
    {
      icon: FaAward,
      title: "Certified Technicians",
      description: "ASE-certified professionals handling your vehicle",
      stat: "98%",
    },
    {
      icon: FaHandshake,
      title: "Trusted Partnerships",
      description: "Official partnerships with major automotive brands",
      stat: "20+",
    },
  ];

  const leadership: TeamMember[] = [
    {
      name: "Joshua Ayodeji Aribido",
      role: "Founder & CEO",
      bio: "Automotive industry veteran with 7+ years experience in vehicle service and technology integration. Passionate about making vehicle ownership stress-free.",
      image: "/images/team-1.jpg",
    },
    {
      name: "Fortune Chinenyem-Aribido",
      role: "Chief Technology Officer",
      bio: "Leads our digital transformation initiatives to create seamless customer experiences. Believes technology should simplify, not complicate.",
      image: "/images/team-2.jpg",
    },
    {
      name: "The Trinity",
      role: "Head of Service Operations",
      bio: "Oversees all service operations with a focus on quality and efficiency. Ensures every customer receives exceptional service.",
      image: "/images/team-3.jpg",
    },
  ];

  const coreValues: CoreValue[] = [
    {
      title: "Transparency",
      description:
        "No hidden fees or surprise charges. We explain every service in clear terms.",
      icon: <FaLightbulb className="text-3xl text-[#2cbbd4]" />,
    },
    {
      title: "Innovation",
      description:
        "Constantly evolving our methods and technology to serve you better.",
      icon: <FaRocket className="text-3xl text-[#2cbbd4]" />,
    },
    {
      title: "Integrity",
      description:
        "We recommend only what your vehicle truly needs, nothing more.",
      icon: <FaHeart className="text-3xl text-[#2cbbd4]" />,
    },
  ];

  const stats: Stat[] = [
    { number: "5000+", label: "Happy Clients", icon: <FaUsers /> },
    { number: "98%", label: "Satisfaction Rate", icon: <FaAward /> },
    { number: "7+", label: "Years Experience", icon: <FaClock /> },
    { number: "60%", label: "Fuel Savings", icon: <FaChartLine /> },
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-white to-[#e6edf7]/10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0c4187] via-[#1a5bb8] to-[#2cbbd4] text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2cbbd4] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="text-white text-sm font-medium uppercase tracking-wider">
              Our Story
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Revolutionizing Vehicle{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-white to-[#2cbbd4] bg-clip-text text-transparent">
                Ownership
              </span>
              <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-xl -z-10"></div>
            </span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
            We're solving the real problems that make vehicle ownership
            stressful, expensive, and time-consuming for everyday Nigerians.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0c4187] mb-4">
              The Challenges We're Solving
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] mx-auto mb-6"></div>
            <p className="text-xl text-[#0c4187]/70 max-w-3xl mx-auto">
              We understand the frustrations that come with vehicle ownership in
              Nigeria. These are the problems that inspired us to create a
              better solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#e6edf7] to-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2cbbd4]/10 mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0c4187] mb-4">
                  {problem.title}
                </h3>
                <p className="text-[#0c4187]/70">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section
        ref={sectionRef}
        className="py-20 bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our Innovative Solutions
            </h2>
            <div className="w-20 h-1 bg-white/50 mx-auto mb-6"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We've built Kruss Automotive from the ground up to address these
              challenges with technology, expertise, and customer-centric
              approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero.jpg"
                    alt="Kruss Automotive Solutions"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#2cbbd4] rounded-full opacity-10 animate-float-reverse"></div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 transform delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="space-y-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-xl mr-6 flex-shrink-0">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        {solution.title}
                      </h3>
                      <p className="opacity-90">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <h4 className="text-lg font-bold mb-4">The Result?</h4>
                <p className="opacity-90 mb-4">
                  A seamless, stress-free experience that saves you time, money,
                  and headaches.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-white font-semibold hover:text-[#2cbbd4] transition-colors"
                >
                  Explore our solutions <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/k1.jpg"
                  alt="Kruss Automotive Journey"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#0c4187] mb-6">
                Our Journey
              </h2>

              <p className="text-lg text-[#0c4187]/90 mb-6 leading-relaxed">
                Founded in 2019, Kruss Automotive was born from personal
                frustration with the traditional automotive service industry.
                Our founder, Joshua, spent countless hours waiting at repair
                shops and dealing with unclear pricing.
              </p>

              <p className="text-lg text-[#0c4187]/90 mb-6 leading-relaxed">
                We started with a simple mission: to make vehicle ownership
                stress-free, affordable, and convenient for everyday Nigerians.
                What began as a small workshop has grown into a
                technology-driven automotive service center serving thousands of
                customers.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Pioneers in CNG conversion technology in Nigeria",
                  "First fully digital automotive service center in our region",
                  "Award-winning customer service 3 years running",
                  "5000+ satisfied customers and counting",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#2cbbd4] text-white rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <FaCheck className="w-3 h-3" />
                    </div>
                    <span className="text-[#0c4187]">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] text-white font-semibold rounded-xl hover:from-[#2395a9] hover:to-[#0a3266] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Explore Our Services <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-[#e6edf7] to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-[#0c4187] mb-6">
            By The Numbers
          </h2>
          <p className="text-xl text-[#0c4187]/70 mb-16 max-w-2xl mx-auto">
            Our impact speaks for itself. Here's what we've accomplished so far.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0c4187] mb-4">
              Meet Our Leadership
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2cbbd4] to-[#0c4187] mx-auto mb-6"></div>
            <p className="text-xl text-[#0c4187]/70 max-w-2xl mx-auto">
              Our experienced team brings together decades of automotive
              expertise and technological innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0c4187] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#2cbbd4] font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-[#0c4187]/80">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-r from-[#0c4187] to-[#2cbbd4] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-white/50 mx-auto mb-6"></div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              These principles guide every decision we make and every service we
              provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="opacity-90">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#2cbbd4] to-[#0c4187] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Story</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Experience the difference of working with a company that truly
            understands and solves your vehicle ownership challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book-appointment"
              className="inline-flex items-center px-8 py-4 bg-white text-[#0c4187] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl"
            >
              Book an Appointment
            </Link>

            <a
              href="https://wa.me/2349025301696"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#128C7E] transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-3xl"
            >
              <FaWhatsapp className="h-5 w-5 mr-2" />
              Chat on WhatsApp
            </a>

            <a
              href="tel:+2349025301696"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#0c4187] transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaPhoneAlt className="h-5 w-5 mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        @keyframes float-reverse {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(10px) rotate(-5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
      `}</style>

      <StructuredData data={organizationSchema} />
    </div>
  );
};

export default AboutPage;
