import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const CTAButton = ({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors duration-200";

  const variantClasses = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    secondary: "bg-white hover:bg-gray-100 text-orange-500",
    outline:
      "border border-white hover:bg-white hover:text-orange-500 text-white",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
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
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
};

export default CTAButton;
