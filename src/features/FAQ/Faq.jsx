import React from "react";
import FaqCard from "./card/FaqCard";

const faqData = [
  {
    question: "What is Jaano?",
    answer:
      "Jaano is an AI chatbot builder, it trains ChatGPT on your data and lets you add a chat widget to your website. Just upload a document or add a link to your website and get a chatbot that can answer any question about their content.",
  },
  {
    question: "What should my data look like?",
    answer:
      "Currently, you can upload one or multiple files (.pdf, .txt, .doc, .docx), paste text, or add a link to your website to be scraped.",
  },
  {
    question: "Can I give my chatbots instructions?",
    answer:
      "Yes, you can edit the base prompt and give your chatbot a name, personality traits and instructions on how to answer questions ex. (only answer in French).",
  },
  {
    question: "Where is my data stored?",
    answer:
      "The content of the document is hosted on secure GCP/AWS servers in us-east.",
  },
  {
    question: "Does it use ChatGPT or GPT-4?",
    answer: "By default your chatbot uses ChatGPT (gpt-3.5-turbo).",
  },
  {
    question: "How can I add my chatbot to my website?",
    answer:
      "You can embed an iframe or add a chat bubble to the bottom right of your website. To do that, create a chatbot and click 'Embed on website'. You can also use the API to communicate with your chatbot anywhere!",
  },
  {
    question: "Does it support other languages?",
    answer:
      "Yes, Jaano supports about 95 languages. You can have your sources in any language and ask it questions in any language.",
  },
  {
    question: "Can I share a chatbot I created?",
    answer:
      "Yes, by default any chatbot you create is private but you can change the setting to make it public and send it to anyone.",
  },
];

function Faq() {
  return (
    <section className="flex w-full m-y-10" id="faq">
      <div className="flex w-full sm:flex-row gap-2 items-center justify-center flex-col">
        <div className="flex flex-col flex-wrap items-center md:w-1/2 w-11/12">
          <h2 className="mt-5 text-xl text-slate-700 md:text-3xl">
            Frequenty asked questions
          </h2>
          <h6 className="mt-3 text-sm text-slate-700 md:text-lg">
            If you cant find your question, email{" "}
            <a className="font-semibold" href="mailto:support@jaano.ui">
              <strong>support@jaano.ui</strong>
            </a>
          </h6>
        </div>
        <div className="md:w-1/2 w-11/12 mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          {faqData.map((ele, index) => (
            <div key={index}>
              <FaqCard ele={ele} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
