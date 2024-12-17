import logo from "./../../public/favicon.png";
import banner from "./../assets/Landing/banner.png";

function Landing() {
  return (
    <div>
      {/*banner*/}
      <div
        className="flex flex-col items-center justify-center gap-3 bg-bottom bg-cover h-dvh"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="h-1/3 mt-[12dvh]">
          <img src={logo} className="scale-90 max-lg:scale-75" />
        </div>
        <div className="z-10 flex flex-col justify-center text-center text-white h-2/3">
          <p className="angelina text-[900%] max-md:text-[700%] max-sm:text-[600%]">
            Thema
          </p>
          <p className="tracking-widest uppercase text-8xl max-sm:text-5xl arapay">
            Travels
          </p>
          <p className="text-xl uppercase max-sm:text-lg">
            where tradition meets exploration
          </p>
        </div>
      </div>
      {/*welcome*/}
      <div className="relative px-12 py-6 max-md:px-6 h-[60dvh] flex flex-col items-center max-lg:h-fit">
        <div className="absolute flex justify-center w-5/6 h-full p-12 bg-white -top-10 rounded-2xl max-md:p-6 max-lg:flex-col max-lg:relative max-lg:top-0 max-lg:gap-6 max-lg:w-full max-lg:shadow-lg max-sm:shadow-none max-sm:rounded-none max-sm:p-0">
        {/*left side*/}
          <div className="flex flex-col justify-center w-1/3 gap-6 max-sm:gap-3 max-lg:w-full">
            <p className="text-xl arapay">A Warm</p>
            <p className="text-6xl text-[#700302] arapay">Welcome</p>
            <p className="text-xl arapay">To Thema Travels </p>
            <p className="text-6xl text-[#700302] arapay">SRI LANKA</p>
          </div>
          {/*right side*/}
          <div className="relative flex items-center justify-center w-2/3 px-12 py-6 max-lg:w-full max-md:px-6 max-sm:p-0">
            <p className="absolute poltawski-nowy top-3 left-2 text-[#700302] max-sm:hidden">“</p>
            <p className="h-fit max-md:px-6 max-sm:px-0">
              Dear Traveler's, On behalf of the entire team at Travels Sri
              Lanka, I would like to extend a warm welcome to you. It is with
              great pride and joy that we invite you to embark on an
              unforgettable journey through the enchanting landscapes of
              Sigiriya. At Travels Sri Lanka, we believe that every adventure is
              more than just an activity—it’s an opportunity to connect with
              nature, experience the rich culture of Sri Lanka, and create
              memories that will last a lifetime. Whether you are here to scale
              the ancient Sigiriya Rock, explore our local wildlife, or immerse
              yourself in the vibrant heritage of this magnificent region, we
              are committed to making your experience truly extraordinary. We
              are passionate about sharing the wonders of this beautiful land
              and providing personalized, enriching adventures. Our team is
              dedicated to ensuring your safety, comfort, and enjoyment every
              step of the way. Thank you for choosing Travels Sri Lanka. We look
              forward to being a part of your incredible journey. Warm regards,
            </p>
            <p className="absolute poltawski-nowy bottom-3 right-2 place-content-end text-[#700302] max-sm:hidden">”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
