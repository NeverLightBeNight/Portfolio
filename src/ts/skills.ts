interface ISkills {
  name: string;
}

export const skills: ISkills[] = [
  { name: "JS" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "React Router" },
  { name: "Zustand" },
  { name: "Axios" },
  { name: "Git" },
  { name: "HTML/CSS" },
  { name: "Responsive Design" },
  { name: "UI/UX" },
];

interface IStrongPlus {
  s: string;
}

export const strongPlus: IStrongPlus[] = [
  {
    s: `• Адаптивная вёрстка и аккуратная структура UI.
        • Разделение логики на компоненты и хуки.
        • Понимание производительности и лишних ререндеров.
        • Работа с данными, формами и API-интеграциями.
    `,
  },
];

interface IArhitecturedBigReactApp {
  st: string;
}

export const ArhitecturedBigReactApp: IArhitecturedBigReactApp[] = [
  {
    st: ` • Архитектура больших React-приложений.
          • Оптимизация рендеров и производительности.
          • Тестирование компонентов и бизнес-логики.
          • Более глубокая работа с TypeScript и паттернами.`,
  },
];
