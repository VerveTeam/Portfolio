import { Navbar } from "../ui/Navbar";

export function ProductPage(){
    return (
        <>
        <Navbar/>
        {/* Product section */}
      <div className="flex flex-col items-center justify-center mt-10 mb-10 md:mt-[100px]">
        <div className="about-us-header font-[500] text-2xl md:text-4xl mb-5">
          Our Products
        </div>
        <div className="about-us-subtitle w-[250px] text-[12px] md:w-[500px] md:text-[14px] mt-2 text-gray-600 text-center">
        Our pricing is not expensive, but it's not cheap either, <br/> it's exactly what it should be
        </div>
      </div>
        </>
    )
}