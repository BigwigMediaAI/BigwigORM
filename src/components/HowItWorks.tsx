import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faChartBar, faRobot } from "@fortawesome/free-solid-svg-icons"; // Updated icons

function HowItWorks() {
  const steps = [
    {
      title: "Streamline Engagement",
      description: "Easily interact with your audience across all platforms from one central dashboard.",
      icon: <FontAwesomeIcon icon={faComments} className="h-6 w-6 text-gray-700" />,
    },
    {
      title: "Data-Driven Insights",
      description: "Gain actionable insights with detailed analytics & sentiment reports to optimize performance.",
      icon: <FontAwesomeIcon icon={faChartBar} className="h-6 w-6 text-gray-700" />,
    },
    {
      title: "AI-Powered Creativity",
      description: "Leverage AI to generate captivating replies to each review tailored as per your brand voice.",
      icon: <FontAwesomeIcon icon={faRobot} className="h-6 w-6 text-gray-700" />,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-12">
          Simplify Review Management with AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative rounded-lg p-6">
              <div className="flex items-center space-x-4">
                {step.icon}
                <h3 className="text-xl md:text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-lg text-gray-600 font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
