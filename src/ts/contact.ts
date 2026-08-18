interface IContacts {
  title: string;
  value: string;
  href: string;
  icon: string;
}

export const contacts: IContacts [] = [
  {
    title: "Email",
    value: "selinmedkid@gmail.com",
    href: `mailto:selinmedkid@gmail.com`,
    icon: "✉",
  },
  {
    title: "Telegram",
    value: "@ZaingV",
    href: "https://t.me/ZaingV",
    icon: "➤",
  },
  {
    title: "GitHub",
    value: "github.com/NeverLightBeNight",
    href: "https://github.com/NeverLightBeNight",
    icon: "⌘",
  },
];
