import React from "react";
import ceo from "../assets/ceo.jpg";
import Nav2 from "../components/Nav2";
import Footer2 from "../components/Footer2";

const Team: React.FC = () => {
  // Sample data for team members

  return (
    <div className="text-white">
      <Nav2 />
      <section className=" bg-black container mx-auto mt-16 pt-10 px-4 lg:px-8">
        <div className="md:w-11/12 mx-auto gap-8">
          {/* CEO Section */}
          <div className=" bg-gray-100 p-6 rounded-lg shadow-lg">
            <img
              src={ceo} // Replace with your CEO image
              alt="CEO"
              className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-2xl text-black font-semibold text-center">
              Vipul Dutta
            </h3>
            <p className="text-black font-semibold text-center my-3">
              Founder & CEO
            </p>
            <p className="text-gray-600 md:text-center text-justify">
              Make way for Bigwig Media, the superhero of the digital marketing
              world with a black belt in AI tech! Our mission? To catapult
              businesses like yours straight into the glitzy realm of online
              success.
            </p>
            <h2 className="font-bold text-gray-700 mt-6 text-center text-2xl">
              About Bigwig Online Reputation Management
            </h2>
            <h2 className="text-gray-600 text-justify md:text-center mt-4">
              Protect and elevate your brand’s image effortlessly with Bigwig
              ORM, your AI-powered solution for mastering online reputation.
              Monitor, manage, and respond to what the world is saying about
              your business with unmatched speed and precision. Stay in control
              of your narrative and turn challenges into opportunities.
            </h2>
            <h2 className="text-gray-600 text-justify md:text-center mt-4">
              From tracking customer feedback to handling reviews and resolving
              complaints, Bigwig ORM ensures that your brand stays a step ahead.
              Our intelligent tools analyze sentiments, provide actionable
              insights, and help you craft responses that leave a lasting
              impression. Whether you're an individual influencer or a global
              enterprise, we’ve got you covered.
            </h2>
            <h2 className="text-gray-600 text-justify md:text-center mt-4">
              We’ve got your back! With a dedicated team of 40+ ORM experts
              working tirelessly to maintain your online presence, Bigwig ORM
              helps you build trust, enhance customer loyalty, and maintain a
              shining reputation across all platforms. Let us turn every online
              mention into an opportunity for growth.
            </h2>
            <h2 className="text-gray-600 text-center mt-4 font-bold">
              Bigwig ORM: Your trusted partner in protecting and amplifying your
              brand's online presence.
            </h2>
          </div>
        </div>
        <Footer2 />
      </section>
    </div>
  );
};

export default Team;
