import TitleSpan from "./TitleSpan";

const Title = () => {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
      Привет, я
      <TitleSpan />
    </h1>
  );
};

export default Title;