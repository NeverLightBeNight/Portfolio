import { Link } from "react-router-dom";
import { ArhitecturedBigReactApp, skills, strongPlus } from "../ts/skills";
import PreTitleSkills from "../components/Skills/preTitleSkills";
import SkillsTitle from "../components/Skills/SkillsTitle/SkillsTitle";
import SkillsTitleInfo from "../components/Skills/SkillsTitleInfo";
import IndexCard from "../components/Skills/IndexCard";
import TextCard from "../components/Skills/TextCard";

const SkillsPage = () => {
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <PreTitleSkills />
            <SkillsTitle />
            <SkillsTitleInfo />
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-3xl
      border border-white/10
      bg-white/6 p-px
      shadow-2xl shadow-black/20
      transition-all duration-500
      hover:-translate-y-2
      hover:border-cyan-300/40
      hover:shadow-cyan-500/20"
              >
                <div
                  className="relative flex min-h-37.5 flex-col
        items-center justify-center
        rounded-[23px]
        bg-slate-950/80
        px-6 py-8
        backdrop-blur-xl
        transition-colors duration-500
        group-hover:bg-slate-900/80"
                >
                  <IndexCard index={index} />
                  <TextCard skillName={skill.name} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Сильные стороны</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {strongPlus.map((s, index) => (
                  <li key={index} className="whitespace-pre-line">
                    {s.s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Что улучшаю дальше</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {ArhitecturedBigReactApp.map((st, index) => (
                  <li key={index} className="whitespace-pre-line">
                    {st.st}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SkillsPage;
