interface USPItemProps {
  value: string;
  label: string;
  highlight?: boolean;
}

const USPItem = ({ value, label, highlight = false }: USPItemProps) => {
  return (
    <div
      className={`text-center p-4 ${highlight ? "bg-white/10 rounded-lg" : ""}`}
    >
      <h3
        className={`text-4xl md:text-5xl font-bold mb-2 ${
          highlight ? "text-orange-400" : "text-white"
        }`}
      >
        {value}
      </h3>
      <p className={highlight ? "text-white font-medium" : "text-white/80"}>
        {label}
      </p>
    </div>
  );
};

export default USPItem;
