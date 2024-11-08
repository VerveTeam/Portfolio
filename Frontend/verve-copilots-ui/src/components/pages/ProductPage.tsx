import Autoplay from "embla-carousel-autoplay";
import { Navbar } from "../ui/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
export function ProductPage() {
  return (
    <>
      <Navbar />
      {/* Product section */}
      <div className="flex flex-col items-center justify-center mt-10 mb-10 md:mt-[50px]">
        <div className="about-us-header font-[500] text-2xl md:text-4xl mb-5">
          Our Products
        </div>
        <div className="about-us-subtitle w-[250px] text-[12px] md:w-[500px] md:text-[14px] mt-2 text-gray-600 text-center">
          Our pricing is not expensive, but it's not cheap either, <br /> it's
          exactly what it should be
        </div>
      </div>

      {/* Products Carousel */}
      <div className="max-w-sm md:max-w-md mx-auto p-10 md:p-1">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="p-1 flex items-center justify-center mt-[50px] md:mt-[30px]">
                <Card className="flex  w-[300px] md:w-[400px] items-center justify-center">
                  <CardContent className="flex flex-col h-[150px] md:h-[300px] items-center justify-center p-4">
                    <div className=" text-3xl font-semibold">RAG Copilot</div>
                    <div className=" text-sm font mt-2">For startups and growing businesses</div>
                    <Button size={"default"} className="bg-[#3164f4] border-none hover:bg-[#2850c8] text-white mt-5">
                  Try for free
                </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-1 flex items-center justify-center mt-[50px] md:mt-[30px]">
                <Card className="flex  w-[300px] md:w-[400px] items-center justify-center">
                  <CardContent className="flex flex-col h-[150px] md:h-[300px] items-center justify-center p-4">
                    <div className=" text-3xl font-semibold">Data Copilot</div>
                    <div className=" text-sm font mt-2">For startups and growing businesses</div>
                    <Button size={"default"} className="bg-[#3164f4] border-none hover:bg-[#2850c8] text-white mt-5">
                  Try for free
                </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
