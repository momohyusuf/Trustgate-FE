import { ExternalLink, Send } from "lucide-react";

interface ITutorial {
  title: string;
  description: string;
  link: string;
}
const HelpAndTutorialContent = () => {
  return (
    <section>
      <h1 className="text-xl lg:text-3xl text-grey-600 font-lora font-semibold mb-8">
        Help and Tutorials
      </h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-[690px]">
        {[
          {
            title: "User dashboard guide",
            description: "A Quick Guide to Navigating and Using It Effectively",
            link: "#",
          },
          {
            title: "Sms verification",
            description: "How to use our sms verification services effectively",
            link: "#",
          },
          {
            title: "Top up your wallet",
            description: "Learn how to top up your wallet",
            link: "#",
          },
        ].map((tutorial) => (
          <TutorialCard key={tutorial.title} {...tutorial} />
        ))}
      </div>

      <div>
        <p className="text-grey-600 mt-8 max-w-[800px]">
          For questions or more info, feel free to reach out! Our unbeatable
          support team is just a click away—contact us on Telegram using the
          button below.
        </p>
      </div>

      <button type="button" className="mt-4" title="Chat with us via Telegram">
        <a
          href="#"
          className="flex items-center mt-4 gap-6 bg-primary-200 p-2 lg:p-3 rounded-lg text-grey-600 justify-center"
        >
          <span> Chat with us via Telegram</span> <Send size={32} />
        </a>
      </button>
    </section>
  );
};

export default HelpAndTutorialContent;

function TutorialCard({ title, description, link }: ITutorial) {
  return (
    <div className="border bg-white p-4 rounded-lg text-grey-600">
      <h3 className=" text-lg lg:text-xl font-medium">{title}</h3>
      <p>{description}</p>
      <a
        className="flex items-center mt-8 gap-6 bg-tertiary-100 p-2 lg:p-3 rounded-lg text-grey-600 justify-center"
        href={link}
        target="_blank"
      >
        <span> Watch Tutorial</span> <ExternalLink size={24} />
      </a>
    </div>
  );
}
