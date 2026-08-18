const TextCard = ({ skillName }) => {
  return (
    <p
      className="text-center text-lg font-bold tracking-wide
          text-white
          transition-all duration-300
          group-hover:bg-linear-to-r
          group-hover:from-cyan-300
          group-hover:to-purple-300
          group-hover:bg-clip-text
          group-hover:text-transparent"
    >
      {skillName}
    </p>
  );
};

export default TextCard;
