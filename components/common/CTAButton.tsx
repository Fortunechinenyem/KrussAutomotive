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

  const variantStyles = {
    primary: {
      backgroundColor: "#2cbbd4",
      color: "#ffffff",
      hover: "hover:bg-[#2395a9]",
    },
    secondary: {
      backgroundColor: "#7f870c",
      color: "#ffffff",
      hover: "hover:bg-[#666c0a]",
    },
    outline: {
      backgroundColor: "transparent",
      color: "#ffffff",
      border: "2px solid #ffffff",
      hover: "hover:bg-white hover:text-[#0c4187]",
    },
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantStyles[variant].hover} ${className}`}
      style={{
        backgroundColor: variantStyles[variant].backgroundColor,
        color: variantStyles[variant].color,
        ...(variant === "outline"
          ? { border: variantStyles[variant].border }
          : {}),
      }}
    >
      {children}
      <svg
        className="w-4 h-4 ml-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
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
