import { Gamepad } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-16">
      <div className="brick-block p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-8 text-white border-b-4 border-yellow-300 pb-2 inline-block mario-font">
          WORLD 1-1
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Text Section */}
          <div className="md:w-1/2">
            <p className="text-lg mb-4 text-white mario-font text-sm leading-6">
              Summer of Projects (SoP) is a 4-week intensive program organized by the Robotics and Automation Society (RAS) at BMSIT&M. It’s designed to help students learn, explore, and build through hands-on, project-based learning.
            </p>
            <p className="text-lg text-white mario-font text-sm leading-6">
              Each week focuses on teaching new skills and concepts — from bot design and mechanical builds to control systems and teamwork — gradually building up to the creation of a final robot.
              SoP is your chance to dive into robotics, work in teams, develop practical skills, and most importantly, have fun creating real, working machines!
            </p>
          </div>

          {/* Image Section - no block */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/Highlights/Screenshot4.png"
              alt="Screenshot 4"
              className="rounded-lg shadow-lg w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
