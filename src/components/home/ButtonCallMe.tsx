import { Link } from "react-router-dom";

const ButtonCallMe = () => {
  return (
    <>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
      >
        Связаться со мной
      </Link>
    </>
  );
};

export default ButtonCallMe;
