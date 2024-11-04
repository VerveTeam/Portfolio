import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Footer } from "../ui/Footer";
import { Navbar } from "../ui/Navbar";
import { Separator } from "../ui/separator";
import LandingPageCost from "../../assets/LandingPage-Cost.png";
import AboutUsPageGetStarted from "../../assets/AboutUsPage-GetStarted.png";

export function AboutUsPage() {
  return (
    <>
      <Navbar />

      {/* About us section */}
      <div className="flex flex-col items-center justify-center mt-10 mb-10 md:mt-[100px]">
        <div className="about-us-header font-[500] text-2xl md:text-4xl mb-5">
          About us
        </div>
        <div className="about-us-subtitle w-[250px] text-[12px] md:w-[500px] md:text-[14px] mt-2 text-gray-600 text-center">
          At Lando, we are committed to providing excellent services to our
          customers and clients and to help them achieve the best outcomes. We
          believe that we can make a positive impact on our community, industry
          and the world. Our Lando team is dedicated to providing the best
          possible service and support, and we are always looking for ways to
          improve and innovate.
        </div>
      </div>

      <Separator className="my-4 bg-gray-300 w-1/2 mx-auto mt-5" />
      {/* About us section ends */}

      {/* Team section */}
      <div className="team container flex flex-col items-center mt-[100px]">
        <div className="team container flex flex-col items-center">
          <div className="team-container-header text-2xl md:text-4xl font-[500]">Team</div>
          <div className="team-container-subtitle text-gray-600 text-[12px] md:text-[14px] mt-5 mb-10">
            Meet the people behind our magical product
          </div>
          <div className="team photos-container md:flex justify-center gap-[100px]">
            {/* Each team member */}
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="photos-info flex flex-col items-center"
              >
                <div className="photos-avatar mb-2">
                  <Avatar className="w-25 h-25 md:w-[120px] h-[120px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="photos-designation text-center mb-10">
                  <div className="title font-semibold">John Doe</div>
                  <div className="subtitle text-sm text-gray-500">CEO</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team section ends */}

      <div className="get-started">
        <div className="flex items-center justify-center mt-10 mb-10">
          <div className="follow-up container mx-auto px-4 md:px-6 lg:px-8 mt-12 w-full">
            <div className="follow-up container content flex flex-col-reverse md:flex-row items-center bg-white rounded-[16px] w-3/4 mx-auto">
              <div className="follow-up-section flex flex-col max-w-2xl md:w-1/2 p-5">
                <div className="content-header text-left text-2xl md:text-[38px] font-[500] pb-5 leading-tight">
                  Get started with <br /> Verve today
                </div>
                <div className="content-subtitle md:text-[14px] text-gray-600 mb-5 text-left">
                  Start optimizing your processes today.
                </div>
                <div className="content-action-button flex flex-wrap">
                  <Button className="bg-[#3164f4] border-none hover:bg-[#2850c8] text-white">
                    Sign up now
                  </Button>
                </div>
              </div>
              <div className="hero-image md:flex md:w-1/2 justify-end">
                <img
                  src={AboutUsPageGetStarted}
                  alt="Landing Page Robot"
                  className="w-full max-w-md object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-4 bg-gray-300" />
      <Footer />
    </>
  );
}
