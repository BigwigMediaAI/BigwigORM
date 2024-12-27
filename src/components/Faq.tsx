import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Import arrow icons

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
  

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='faq' className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <div
                className="flex justify-between items-center cursor-pointer px-4 py-3"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <FontAwesomeIcon
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                  className="text-gray-600"
                />
              </div>
              <div
                className={`px-4 pb-4 text-gray-600 transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
