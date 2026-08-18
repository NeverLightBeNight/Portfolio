import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              About me
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Я создаю интерфейсы, которые
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                быстро работают и хорошо выглядят
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Я frontend-разработчик и UI/UX-ориентированный инженер. Работаю с
              React, TypeScript, Tailwind, React Router, Zustand и Axios, делая
              адаптивные, понятные и поддерживаемые интерфейсы.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Что делаю</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Верстаю сложные интерфейсы, собираю SPA, работаю со state
                management, формами, роутингом и API-интеграциями.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Как думаю</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Сначала структура и UX, потом компоненты и данные, потом
                оптимизация, переиспользование и удобство поддержки в команде.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">На чём фокус</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Чистая архитектура, предсказуемые рендеры, адаптивность,
                аккуратный код и нормальная работа в продуктовой разработке.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Мой подход к работе</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Я не делаю просто “красиво”. Для меня важны читаемость
                компонентов, повторное использование, контроль перерендеров и
                устойчивость интерфейса при росте проекта.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Что мне интересно</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Кроме frontend, мне интересны визуальная подача, минимализм,
                продуктовый дизайн и создание сильного личного бренда через
                сайт.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/skills"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
            >
              Смотреть навыки
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Связаться со мной
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
