const IconContactCard = ({ contact }) => {
  return (
    <div
      className="mb-5 flex h-12 w-12 items-center justify-center
                rounded-2xl
                border border-sky-400/20
                bg-sky-400/10
                text-xl text-sky-300
                transition-all duration-300
                group-hover:scale-110
                group-hover:bg-sky-400/20"
    >
      {contact}
    </div>
  );
};

export default IconContactCard;
