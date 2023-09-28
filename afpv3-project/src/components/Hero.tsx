import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="/banner1.jpg"
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Import Product</p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              High quality product for Cat.
            </h2>
            {/* <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8">
              $18.36
            </div> */}
            {/* <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
              Shop Now <BsArrowRight />
            </div> */}
          </div>
        </div>
        <div className="relative">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="/banner2.png"
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Flash Sales</h2>
            <p className="text-gray-500 text-xl pt-4">Sale up to</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
              50%
            </div>
            <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="h-full w-full object-cover rounded-lg"
            src="/banner3.png"
            alt="hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold">Become our Member</h2>
            <p className="text-gray-500 text-xl pt-4">Extra member points.</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8">
              X2
            </div>
            <div className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer">
              SignUp Now <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
