import { Button } from "../ui/button";
import { Navbar } from "../ui/Navbar";
import LandingPageRobot from "../../assets/LandingPage-Robot.png";
import LandingPageRocket from "../../assets/LandingPage-Rocket.png";
import LandingPageCost from "../../assets/LandingPage-Cost.png";
import { Footer } from "../ui/Footer";
import { Separator } from "../ui/separator";
export function HomePage() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Hero component */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-[50px]">
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
              <Button className="bg-[#3164f4] border-none hover:bg-[#2850c8] text-white">
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
      {/* Hero Component ends */}

      {/* Follow up component */}
      <div className="flex items-center justify-center h-screen">
        <div className="follow-up container mx-auto px-4 md:px-6 lg:px-8 mt-12 w-full">
          <div className="follow-up container content flex flex-col-reverse md:flex-row items-center bg-white rounded-[16px] w-3/4 mx-auto">
            <div className="follow-up-section flex flex-col max-w-2xl md:w-1/2 p-5">
              <div className="content-header text-left text-4xl md:text-[48px] font-[500] pb-5 leading-tight">
                Introducing <br /> good solution
              </div>
              <div className="content-subtitle md:text-[18px] text-gray-600 mb-5 text-left">
                Join our community and experience <br/> the benefits today!
              </div>
              <div className="content-action-button flex flex-wrap">
                <Button className="bg-[#3164f4] border-none hover:bg-[#2850c8] text-white">
                  Try for free
                </Button>
              </div>
            </div>
            <div className="hero-image md:flex md:w-1/2 justify-end">
              <img
                src={LandingPageRocket}
                alt="Landing Page Robot"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Follow up component ends */}

      {/* Cost saving component */}
      <div className="flex items-center justify-center md:mb-[100px]">
        <div className="cost-saving container mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="cost-saving container content flex flex-col-reverse md:flex-row items-center rounded-[16px] w-3/4 mx-auto">
            <div className="cost-saving-section flex flex-col max-w-2xl md:w-1/2 p-5">
              <div className="content-header text-left text-3xl md:text-[40px] font-[500] pb-5 leading-tight">
                Cost saving in <br /> smart way
              </div>
              <div className="content-subtitle md:text-[16px] text-gray-600 mb-5 text-left">
              Powerful tool that helps you reduce costs and save money on your business operations. With advanced analytics and optimization algorithms, Costsaver analyzes your existing workflows and identifies areas for improvement.
              </div>
              <div className="content-action-button flex flex-wrap">
                <Button className="bg-transparent border-black text-black hover:bg-[#2850c8] hover:text-white" variant="ghost">
                  Try for free
                </Button>
              </div>
            </div>
            <div className="hero-image md:flex md:w-1/2 justify-end">
              <img
                src={LandingPageCost}
                alt="Landing Page Robot"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-4 bg-gray-300" />
      <Footer/>
    </>
  );
}
