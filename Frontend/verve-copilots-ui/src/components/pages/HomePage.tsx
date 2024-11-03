import { Button } from "../ui/button";
import { Navbar } from "../ui/Navbar";
import LandingPageRobot from "../../assets/LandingPage-Robot.png";

export function HomePage() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero component */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-12">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="hero-section flex flex-col max-w-2xl md:w-1/2">
            <h1 className="text-5xl font-[500] leading-tight mb-4 text-left">
              The best way <br /> to showcase <br /> your project.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 text-left">
              Here you can put a short description about your project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#3164f4] hover:bg-[#2850c8] text-white">
                Try for free
              </Button>
              <Button
                className="bg-transparent border border-black text-black hover:bg-gray-100"
                variant="ghost"
              >
                See how it works
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="hero-image hidden md:flex md:w-1/2 justify-end">
            <img
              src={LandingPageRobot}
              alt="Landing Page Robot"
              className="w-full max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
