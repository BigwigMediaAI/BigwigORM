const pricingPlans = [
  {
    name: "Basic",
    price: "₹1,500/month",
    features: [
      "Monitor up to 5 review platforms",
      "Automated review notifications",
      "Basic sentiment analysis",
      "Monthly performance reports",
      "Email support",
    ],
    buttonText: "Start Free Trial",
    buttonLink: "#",
  },
  {
    name: "Pro",
    price: "₹5,000/month",
    features: [
      "Monitor up to 15 review platforms",
      "Respond to reviews directly",
      "Advanced sentiment and trend analysis",
      "Weekly performance reports",
      "Team collaboration tools",
      "Priority email & chat support",
    ],
    buttonText: "Get Started",
    buttonLink: "#",
  },
  {
    name: "Enterprise",
    price: "₹15,000/month",
    features: [
      "Monitor unlimited review platforms",
      "Custom review response strategy",
      "Real-time sentiment analysis & alerts",
      "Dedicated account manager",
      "Integration with CRMs & analytics tools",
      "24/7 premium support",
    ],
    buttonText: "Contact Us",
    buttonLink: "#",
  },
];

function PricingPlans() {
  return (
    <div id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
          Choose the Plan That Fits Your Business Needs
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Improve your online reputation with tailored plans for monitoring, analyzing, and responding to reviews across platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">
                {plan.name}
              </h3>
              <p className="text-center text-lg font-bold text-gray-700 mb-6">
                {plan.price}
              </p>
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <a
                  href={plan.buttonLink}
                  className="inline-block py-2 px-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;
