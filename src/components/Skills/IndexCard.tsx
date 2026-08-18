const IndexCard = ({ index }) => {
  return (
    <span
      className="absolute right-5 top-4
          text-sm font-medium text-white/20
          transition-colors duration-300
          group-hover:text-cyan-300/60"
    >
      0{index + 1}
    </span>
  );
};

export default IndexCard;
