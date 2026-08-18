import CircleEffect from "../components/Contacts/CircleEffect";
import IconContactCard from "../components/Contacts/IconContactCard";
import PreTitleContact from "../components/Contacts/PreTitleContact";
import TitleCallMe from "../components/Contacts/TitleCallMe";
import TitleContact from "../components/Contacts/TitleContact";
import { contacts } from "../ts/contact";

const ContactMePage = () => {
  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#06142f] px-6 py-24 h-screen"
      >
        <CircleEffect />

        <div className="relative mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <PreTitleContact />

            <TitleContact />

            <TitleCallMe />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="group relative overflow-hidden rounded-3xl
            border border-blue-300/10
            bg-blue-950/50
            p-6
            shadow-xl shadow-blue-950/30
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-2
            hover:border-sky-400/40
            hover:bg-blue-900/50
            hover:shadow-2xl hover:shadow-sky-900/30"
              >
                <CircleEffect />
                <div className="relative">
                  <IconContactCard contact={contact.icon} />

                  <p className="text-sm text-slate-400">{contact.title}</p>

                  <p className="mt-2 break-all font-medium text-slate-100 transition-colors group-hover:text-sky-300"></p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMePage;
