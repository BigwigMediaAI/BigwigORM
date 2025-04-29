import alert from "../assets/Instant Review Alerts.jpg";
import anaylze from "../assets/Analyze Review Sentiment.png";
import craft from "../assets/Craft Ideal Review.png";
import streamline from "../assets/Bigwigmedia (5) (1).png";
import automate from "../assets/automate.png";
import track from "../assets/track.png";
import social1 from "../assets/social.png";
import language from "../assets/language.png";
import translate from "../assets/Translate Reviews and Replies Effortlessly.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Features() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const featureData = [
    {
      title: "Stay Updated with Instant Review Alerts",
      description:
        "Never miss an important review. Receive instant notifications for every new review and respond within seconds from your desktop or mobile app.",
      imageUrl: alert,
      id: "feature4",
    },
    {
      title: "Analyze Review Sentiment with AI",
      description:
        "Quickly grasp what's working and what needs improvement by summarizing the sentiment of numerous reviews in a single click. Generate location-specific reports and share them effortlessly.",
      imageUrl: anaylze,
      id: "feature1",
    },
    {
      title: "Craft Ideal Review Responses with AI",
      description:
        "Leverage AI to create personalized review replies at scale. Generate custom responses or rephrase existing ones to maintain a consistent, empathetic tone that aligns with your brand. Edit grammar, tone, and length seamlessly.",
      imageUrl: craft,
      id: "feature2",
    },
    {
      title: "Translate Reviews and Replies Effortlessly",
      description:
        "Break language barriers effortlessly. Translate reviews into English and craft responses that are automatically translated into your customer's language, eliminating the need for manual translation.",
      imageUrl: translate,
      id: "feature3",
    },
    {
      title: "Identify and Handle Fake Reviews",
      description:
        "Safeguard your reputation by detecting and flagging spam or fake reviews automatically. Let us take care of it, so you don’t have to.",
      imageUrl:
        "https://cdn2.birdeye.com/version2/v3/pages/2024/products/reviews/management/v1/spam-detection-v1.png",
      id: "feature5",
    },
    {
      title: "Streamline Responses with Pre-Written Templates",
      description:
        "Engage with customers efficiently using customizable review response templates. Save time while ensuring every customer feels heard.",
      imageUrl: streamline,
      id: "feature6",
    },
    {
      title: "Automate Your Review Responses",
      description:
        "Set up automated replies for specific review sources, star ratings, or locations. Keep your customers engaged effortlessly.",
      imageUrl: automate,
      id: "feature7",
    },
    {
      title: "Track and Analyze Reputation Trends",
      description:
        "Monitor review counts and reputation scores over time and across various locations. Share detailed, customized reports with your local teams.",
      imageUrl: track,
      id: "feature8",
    },
    {
      title: "Share & Publish 5* Reviews across all Social Media Channels",
      description:
        "Amplify your success stories effortlessly. Highlight your best reviews by sharing them directly on social media platforms. Let positive customer feedback build trust and drive engagement.",
      imageUrl: social1,
      id: "feature9",
    },
    {
      title: "Share & Publish 5* Reviews on your website as live testimonials",
      description:
        "Turn glowing reviews into real-time endorsements. Showcase 5-star feedback directly on your website as live testimonials, creating an authentic and persuasive customer experience.",
      imageUrl: social1,
      id: "feature10",
    },
    {
      title: "Read & Reply to your reviews in any language",
      description:
        "Effortlessly manage global reviews. View feedback in its original language and craft responses that resonate, translated accurately into your customer's preferred language.",
      imageUrl: language,
      id: "feature11",
    },
  ];

  return (
    <div id="features" className="py-16 px-8">
      <h2 className="text-5xl font-semibold text-white text-center mb-10 tracking-tight">
        Our Services
      </h2>
      <div className="overflow-x-hidden">
        {featureData.map((feature, index) => (
          <div
            key={index}
            id={feature.id}
            className={`md:w-11/12 mx-auto md:flex justify-between grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-${
              index === 0 ? 0 : 16
            }`}
          >
            {/* Text Section */}
            <div
              className={`col-span-1 md:w-1/2 ${
                index % 2 === 0 ? "" : "md:col-start-3 order-1 md:order-2"
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {feature.title}
              </h2>
              <p className="text-lg text-gray-300 mt-4">
                {feature.description}
              </p>
            </div>

            {/* Image Section */}
            <div
              className={`col-span-2 md:w-1/2 flex justify-center ${
                index % 2 === 0 ? "" : "md:col-start-1 order-2 md:order-1"
              }`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
