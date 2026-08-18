interface ICard {
  preTitle: string;
  title: string;
  context: string;
}

export const cards: ICard [] = [
  {
    preTitle: "Фокус",
    title: "React и TypeScript",
    context: `Пишу поддерживаемый код с упором на архитектуру,
                  переиспользование и производительность.`,
  },
  {
    preTitle: "Подход",
    title: "UI, который продаёт",
    context: `Делаю интерфейсы, которые выглядят чисто, работают быстро и
                  хорошо выглядят на мобильных.`,
  },
  {
    preTitle: "Цель",
    title: "Middle+ уровень",
    context: `Развиваюсь в сторону сильной инженерии: оптимизация, качество
                  кода и командная разработка.`,
  },
];
