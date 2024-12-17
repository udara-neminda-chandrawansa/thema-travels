import logo from "./../../public/favicon.png";
import banner from "./../assets/Landing/banner.png";
import mandala from "./../assets/Landing/mandala.png";
import flower from "./../assets/Landing/flower.png";
import ServiceCard from "../components/ServiceCard";
import Card_1 from "./../assets/Service/card-1.png";
import Card_2 from "./../assets/Service/card-2.png";
import Card_3 from "./../assets/Service/card-3.png";
import Card_4 from "./../assets/Service/card-4.png";
import mission_banner from "./../assets/Landing/mission_banner.png";

import { Link } from "wouter";

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
      <div className="relative px-12 py-6 max-md:px-6 h-[60dvh] flex flex-col items-center max-xl:h-fit">
        <div className="absolute flex justify-center w-5/6 h-full p-12 bg-white -top-10 rounded-2xl max-md:p-6 max-xl:flex-col max-xl:relative max-xl:top-0 max-xl:gap-6 max-xl:w-full max-xl:shadow-lg max-sm:shadow-none max-sm:rounded-none max-sm:p-0">
          {/*mandala - top right*/}
          <div
            className="sm:rounded-tr-2xl absolute bg-center top-0 right-0 bg-no-repeat h-[500px] max-md:h-[300px] max-sm:h-[200px] aspect-square"
            style={{ backgroundImage: `url(${mandala})` }}
          ></div>
          {/*mandala - bottom left*/}
          <div
            className="sm:rounded-tr-2xl absolute bg-center bottom-0 left-0 bg-no-repeat h-[500px] max-md:h-[300px] max-sm:h-[200px] aspect-square rotate-180"
            style={{ backgroundImage: `url(${mandala})` }}
          ></div>

          {/*left side*/}
          <div className="flex flex-col justify-center w-1/3 gap-6 max-sm:gap-3 max-xl:w-full">
            <p className="text-xl arapay">A Warm</p>
            <p className="text-6xl text-[#700302] arapay">Welcome</p>
            <p className="text-xl arapay">To Thema Travels </p>
            <p className="text-6xl text-[#700302] arapay">SRI LANKA</p>
          </div>
          {/*right side*/}
          <div className="relative flex flex-col items-center justify-center w-2/3 gap-3 px-12 py-6 max-xl:w-full max-xl:p-0">
            {/*text content (quote)*/}
            <div>
              <p className="absolute poltawski-nowy top-3 left-2 text-[#700302] max-xl:hidden">
                “
              </p>
              <p className="h-full text-justify max-sm:px-0">
                Dear Traveler's, <br />
                On behalf of the entire team at Travels Sri Lanka, I would like
                to extend a warm welcome to you. It is with great pride and joy
                that we invite you to embark on an unforgettable journey through
                the enchanting landscapes of Sigiriya. At Travels Sri Lanka, we
                believe that every adventure is more than just an activity—it’s
                an opportunity to connect with nature, experience the rich
                culture of Sri Lanka, and create memories that will last a
                lifetime. Whether you are here to scale the ancient Sigiriya
                Rock, explore our local wildlife, or immerse yourself in the
                vibrant heritage of this magnificent region, we are committed to
                making your experience truly extraordinary. We are passionate
                about sharing the wonders of this beautiful land and providing
                personalized, enriching adventures. Our team is dedicated to
                ensuring your safety, comfort, and enjoyment every step of the
                way. Thank you for choosing Travels Sri Lanka. We look forward
                to being a part of your incredible journey. Warm regards,
              </p>
              <p className="absolute poltawski-nowy bottom-3 right-2 place-content-end text-[#700302] max-xl:hidden">
                ”
              </p>
            </div>
            {/*author*/}
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-6">
                <img src={flower} alt="flower" className="h-5" />
                <div className="w-[100px] max-md:w-[75px] max-sm:hidden h-[1px] bg-black"></div>
              </div>
              <span className="text-center">
                <p>Maduranga Herath</p>
                <p>Founder & CEO, Thema Travels</p>
              </span>
              <div className="flex items-center gap-6">
                <div className="w-[100px] max-md:w-[75px] max-sm:hidden h-[1px] bg-black"></div>
                <img src={flower} alt="flower" className="h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Services*/}
      <div className="h-fit">
        {/*text*/}
        <div className="flex flex-col gap-6 p-12 max-md:p-6">
          <h1 className="text-[40px] text-[#700302] arapay text-center">
            Our Services and Offerings
          </h1>
          <p className="text-center line-height-abt 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            Where we specialize in crafting memorable and personalized travel
            experiences. We cater to a variety of preferences and needs,
            ensuring every journey is unique and enjoyable.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-6 p-12 w-fit max-sm:w-full place-items-center max-md:p-6 max-md:grid-cols-2 max-sm:grid-cols-1">
            <ServiceCard
              img={Card_1}
              text={"Hotel Facilities"}
              url={"hotel-facilities"}
            ></ServiceCard>
            <ServiceCard
              img={Card_2}
              text={"Discover Unique Experiences"}
              url={"unique-experiences"}
            ></ServiceCard>
            <ServiceCard
              img={Card_3}
              text={"Additional Services"}
              url={"additional-services"}
            ></ServiceCard>
            <ServiceCard
              img={Card_4}
              text={"Transportation Options"}
              url={"transportation-options"}
            ></ServiceCard>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/" className={"underline"}>
            View All
          </Link>
        </div>
      </div>
      {/*Mission*/}
      <div
        className="relative flex flex-col justify-center py-12 tracking-wider bg-fixed bg-center bg-no-repeat bg-cover h-fit optima"
        style={{ backgroundImage: `url(${mission_banner})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute bottom-0 h-full inset-0 bg-gradient-to-br from-[#4B4B4BB5] to-[#00000075]"></div>
        {/*text*/}
        <div className="z-10 flex flex-col w-3/4 gap-6 pl-12 text-justify text-white max-sm:p-6 max-sm:w-full line-height-abt max-md:pl-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] lg:text-[50px] xl:text-[70px] arapay">
              Our Vision
            </h1>
            <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            At Thema Travels, our vision is to be the premier travel partner for explorers seeking authentic and transformative experiences in Sri Lanka. We aim to connect travelers with the island’s rich heritage, stunning landscapes, and vibrant wildlife, fostering a deeper appreciation of its unique beauty. Through exceptional service, sustainable tourism practices, and personalized journeys, we aspire to create unforgettable moments that resonate with every visitor, ensuring Sri Lanka becomes a cherished destination for all.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] lg:text-[50px] xl:text-[70px] arapay">
              Our Mission
            </h1>
            <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            Our mission at Thema Travels is to provide personalized, immersive, and sustainable travel experiences across Sri Lanka. We are committed to showcasing the island’s natural wonders, cultural richness, and vibrant wildlife, while delivering unparalleled service through our expert guides and dedicated team. By crafting tailor-made tours that cater to the unique preferences of individuals, families, and groups, we aim to create memorable journeys that inspire a deep connection with Sri Lanka, promoting responsible tourism and leaving a positive impact on both travelers and local communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
