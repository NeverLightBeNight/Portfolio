import { Link } from "react-router-dom";

const ButtonFindAoutAboutMe = () => {
  return (
    <>
      <Link
        to="/about"
        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
      >
        Узнать обо мне
      </Link>
    </>
  );
};

export default ButtonFindAoutAboutMe;