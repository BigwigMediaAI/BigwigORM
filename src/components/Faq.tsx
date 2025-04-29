import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faq_img from "../assets/faq-img.png";

const faqs = [
  {
    question: "How do I monitor my business reviews?",
    answer:
      "To monitor reviews, go to the 'Dashboard' and select the 'Review Feed' section. Here, you’ll see reviews from all connected platforms in one place.",
  },
  {
    question: "Can I respond to reviews directly from the platform?",
    answer:
      "Yes, you can respond to reviews directly. Navigate to the 'Review Feed', select a review, and type your response. Your reply will automatically post to the respective platform.",
  },
  {
    question: "How do I analyze my business reputation?",
    answer:
      "Our 'Analytics' section provides detailed insights on review trends, customer sentiment, and overall ratings. Use these metrics to track your online reputation over time.",
  },
  {
    question: "How can I collect more customer reviews?",
    answer:
      "You can send review requests via email or SMS using the 'Review Campaigns' tool. Customize your message to encourage customers to leave feedback.",
  },
  {
    question: "What platforms does BigwigORM support?",
    answer:
      "BigwigORM integrates with platforms like Google, Facebook, Yelp, and TripAdvisor. Visit the 'Integrations' section to see all supported platforms.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="text-white mb-10 py-4 px-10 md:px-20">
      <h2 className="text-5xl font-semibold text-center mb-2 text-white">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row justify-evenly  py-3 items-start ">
        <div className="md:flex items-start hidden  ">
          <img src={faq_img} alt="FAQ Illustration" className="w-60 max-w-sm" />
        </div>
        <div className="space-y-5 pt-10  ">
          {faqs.map((faq, index) => (
            <div key={index} className="relative">
              {/* FAQ Box */}
              <div className="bg-gray-50 border text-gray-900 border-gray-700 rounded-lg pl-12 pr-6 py-3 relative max-w-xl w-full">
                {/* Number Badge (half-overlapping from left) */}
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold border-2 border-orange-500">
                  {index + 1}
                </div>

                <button
                  className="w-full text-left flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="pt-2 text-gray-700 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
