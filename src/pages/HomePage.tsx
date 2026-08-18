import PreTitle from "../components/home/PreTitle";
import Title from "../components/home/HomeTitle/Title";
import HomeTitleInfo from "../components/home/HomeTitleInfo";
import ButtonCallMe from "../components/home/ButtonCallMe";
import ButtonFindAoutAboutMe from "../components/home/ButtonFindOutAboutMe";
import { cards } from "../components/home/cardHomePage/cardHomePage";

const About = () => {
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_30%)]" />
          <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <PreTitle />
              <Title />
              <HomeTitleInfo />
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonCallMe />
                <ButtonFindAoutAboutMe />
              </div>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-3">
              {cards.map((card) => (
                <div
                  key={card.preTitle}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <p className="text-sm text-slate-400">{card.preTitle}</p>
                  <h2 className="mt-2 text-xl font-semibold">{card.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {card.context}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
