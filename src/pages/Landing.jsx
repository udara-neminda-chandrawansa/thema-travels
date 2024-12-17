import logo from "/favicon.png";
import banner from "./../assets/Landing/banner.png";
import mandala from "./../assets/Landing/mandala.png";
import mandala_half from "./../assets/Landing/mandala_half.png";
import mandala_full from "./../assets/Landing/mandala_full.png";
import mandala_choose_1 from "./../assets/Landing/mandala_choose_1.png";
import mandala_choose_2 from "./../assets/Landing/mandala_choose_2.png";
import ayubowan_girl from "./../assets/Landing/ayubowan_girl.png";
import flower from "./../assets/Landing/flower.png";

import ServiceCard from "../components/ServiceCard";
import TeamCard from "../components/TeamCard";
import PackageCard from "../components/PackageCard";

import Card_1 from "./../assets/Service/card-1.png";
import Card_2 from "./../assets/Service/card-2.png";
import Card_3 from "./../assets/Service/card-3.png";
import Card_4 from "./../assets/Service/card-4.png";

import p_1 from "./../assets/Package/card_1.png";
import p_2 from "./../assets/Package/card_2.png";
import p_3 from "./../assets/Package/card_3.png";

import praneeth from "./../assets/Team/praneeth.png";
import harsha from "./../assets/Team/harsha.png";
import piyumi from "./../assets/Team/piyumi.png";
import milinda from "./../assets/Team/milinda.png";

import story_1 from "./../assets/Landing/story_1.png";
import story_2 from "./../assets/Landing/story_2.png";
import story_3 from "./../assets/Landing/story_3.png";
import story_4 from "./../assets/Landing/story_4.png";
import story_5 from "./../assets/Landing/story_5.png";

import email from "./../assets/Contact/email.png";
import location from "./../assets/Contact/location.png";
import call from "./../assets/Contact/call.png";

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
          <p className="text-center lh-lg 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
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
        <div className="flex justify-center pb-6">
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
        <div className="z-10 flex flex-col w-3/4 gap-6 pl-12 text-justify text-white max-sm:p-6 max-sm:w-full lh-lg max-md:pl-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] lg:text-[50px] xl:text-[70px] arapay">
              Our Vision
            </h1>
            <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
              At Thema Travels, our vision is to be the premier travel partner
              for explorers seeking authentic and transformative experiences in
              Sri Lanka. We aim to connect travelers with the island’s rich
              heritage, stunning landscapes, and vibrant wildlife, fostering a
              deeper appreciation of its unique beauty. Through exceptional
              service, sustainable tourism practices, and personalized journeys,
              we aspire to create unforgettable moments that resonate with every
              visitor, ensuring Sri Lanka becomes a cherished destination for
              all.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] lg:text-[50px] xl:text-[70px] arapay">
              Our Mission
            </h1>
            <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
              Our mission at Thema Travels is to provide personalized,
              immersive, and sustainable travel experiences across Sri Lanka. We
              are committed to showcasing the island’s natural wonders, cultural
              richness, and vibrant wildlife, while delivering unparalleled
              service through our expert guides and dedicated team. By crafting
              tailor-made tours that cater to the unique preferences of
              individuals, families, and groups, we aim to create memorable
              journeys that inspire a deep connection with Sri Lanka, promoting
              responsible tourism and leaving a positive impact on both
              travelers and local communities.
            </p>
          </div>
        </div>
      </div>
      {/*Team*/}
      <div className="px-12 py-6 max-md:px-6">
        {/*title*/}
        <div className="flex gap-6">
          <h1 className="text-[40px] text-[#700302] arapay">Our Team</h1>
          <img
            src={flower}
            alt="flower"
            className="w-[50px] aspect-square object-contain"
          />
        </div>
        {/*main content*/}
        <div className="border-b">
          <div className="flex items-center w-full gap-3 max-[450px]:flex-col max-md:items-start">
            <p className="text-[40px] abhaya max-[450px]:text-2xl">
              Hello and{" "}
            </p>
            <p className="abhaya text-[80px] max-md:text-[40px]">Ayubowan</p>
            <p className="text-[40px] abhaya max-[450px]:text-2xl">to</p>
          </div>
          <div className="flex h-[60dvh] max-xl:flex-col max-xl:h-fit">
            <div className="flex flex-col gap-6 xl:w-1/3">
              <h1 className="abhaya text-[60px] text-[#700302]">
                Thema Travels!
              </h1>
              <p className="text-justify">
                Hey there! Welcome to Sri Lanka! We’re super excited to have you
                with us at Thema Travels. Get ready for an amazing adventure
                filled with stunning sights, rich culture, and friendly faces.
                Our team is here to make sure you have a fantastic time,
                customized just for you. If you have any questions or need
                anything at all, don’t hesitate to ask. We can’t wait to help
                you create some unforgettable memories here in Sri Lanka!
              </p>
              <span className="flex items-center justify-end w-full gap-6">
                <div className="w-[50px] max-md:w-[35px] max-sm:hidden h-[1px] bg-black"></div>
                <p className="w-fit">Yeshi Fernando</p>
                <div className="w-[50px] max-md:w-[35px] max-sm:hidden h-[1px] bg-black"></div>
              </span>
            </div>
            <div className="relative xl:w-2/3">
              <div
                className="h-[50dvh] max-[445px]:h-[30dvh] aspect-square bg-cover xl:absolute right-0"
                style={{ backgroundImage: `url(${mandala_full})` }}
              ></div>
              <div
                className="h-[50dvh] aspect-square bg-cover absolute bottom-0 right-1/4 max-xl:right-0 max-[445px]:h-[30dvh]"
                style={{ backgroundImage: `url(${ayubowan_girl})` }}
              ></div>
            </div>
          </div>
        </div>
        {/*team cards*/}
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-6 p-12 w-fit max-sm:w-full place-items-center max-md:p-6 max-md:grid-cols-2 max-sm:grid-cols-1">
            <TeamCard
              img={praneeth}
              text1={"Praneeth Moremada"}
              text2={"Tour Consultant"}
              url={"praneeth-moremada"}
            ></TeamCard>
            <TeamCard
              img={harsha}
              text1={"Harsha Wijerathne"}
              text2={"Tour Coordinator"}
              url={"harsha-wijerathne"}
            ></TeamCard>
            <TeamCard
              img={milinda}
              text1={"Milinda Kenny"}
              text2={"Tour Consultant"}
              url={"milinda-kenny"}
            ></TeamCard>
            <TeamCard
              img={piyumi}
              text1={"Piyumi Mekala"}
              text2={"Social Media and Community Manger"}
              url={"piyumi-mekala"}
            ></TeamCard>
          </div>
        </div>
      </div>
      {/*Story*/}
      <div className="px-12 py-6 max-md:px-6">
        {/*title*/}
        <div className="flex flex-col gap-6">
          <h1 className="text-[40px] text-[#700302] arapay">Our Story</h1>
          <p className="text-xl font-semibold abhaya">
            Let me tell you about our story at Thema Travels,
          </p>
        </div>
        {/*text & images*/}
        <div className="relative flex h-full gap-1 max-lg:flex-col">
          <div className="h-full lg:w-1/2">
            <p className="text-lg text-justify abhaya">
              We’re really proud to be a standout in Sri Lankan travel
              experiences. It all started with Maduranga Herath, our founder,
              who had this amazing vision and a deep passion for showcasing the
              beauty and culture of our homeland. Thema Travels has come a long
              way from its humble beginnings.Now, we’re thriving as part of the
              ELVORA HOLDINGS BusinessGroup. What sets us apart is our
              commitment to personalized travel. We take the time to create
              custom itineraries that match the unique interests and preferences
              of our clients. Our team includes knowledgeable guides who speak
              multiple languages, making sure every traveler feels welcomed and
              understood as they explore the diverse landscapes and rich
              heritage of Sri Lanka. At Thema Travels, we’re all about
              delivering the highest standards of service and ensuring customer
              satisfaction. Our goal is to create memorable journeys that truly
              reflect the essence of Sri Lanka. So, if you’re looking to
              discover the magic of this beautiful island, come join us at Thema
              Travels! Your adventure is just around the corner.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center h-full gap-4 place-items-center lg:w-1/2">
            <img
              src={story_1}
              alt="st-1"
              className="object-contain h-[200px] max-w-full aspect-square"
            />
            <img
              src={story_2}
              alt="st-2"
              className="object-contain h-[150px] max-w-full aspect-square"
            />
            <img
              src={story_3}
              alt="st-3"
              className="object-contain h-[90px] max-w-full aspect-square"
            />
            <img
              src={story_4}
              alt="st-4"
              className="object-contain h-[180px] max-w-full aspect-square"
            />
            <img
              src={story_5}
              alt="st-5"
              className="object-contain h-[180px] max-w-full aspect-square"
            />
          </div>
          <div
            className="absolute bottom-0 w-full h-full bg-center bg-no-repeat max-lg:bg-cover lg:bg-contain"
            style={{ backgroundImage: `url(${mandala_half})` }}
          ></div>
        </div>
      </div>
      {/*Packages*/}
      <div className="h-fit">
        {/*text*/}
        <div className="flex flex-col gap-6 p-12 max-md:p-6">
          <h1 className="text-[40px] text-[#700302] arapay text-center">
            Our Packages
          </h1>
          <h3 className="font-semibold text-center lh-lg 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            Tailored Tour Packages for Every Traveler
          </h3>
          <p className="text-center lh-lg 2xl:text-xl xl:text-lg max-md:text-base max-sm:text-xs">
            Discover unforgettable experiences with our customizable tour
            packages, including wildlife safaris, cultural tours, beach escapes,
            and thrilling adventures. Relax on pristine beaches, enjoy sunset
            picnics, or take a coastal cruise. With comfortable accommodations,
            transportation, and exclusive activities included, we ensure a
            seamless and memorable journey. Let us plan your dream vacation!
          </p>
        </div>
        {/*cards*/}
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-6 p-12 w-fit max-sm:w-full place-items-center max-md:p-6 max-md:grid-cols-2 max-sm:grid-cols-1">
            <PackageCard
              img={p_1}
              title={"Beach and Chill"}
              text={
                "Perfect for relaxation. Enjoy pristinesandy beaches, soothing waves, and breathtaking sunsets. Engage inactivities like sunset picnics, beach yoga,and refreshing dips in crystal-clearwaters. For excitement, perience..."
              }
              url={"beach-chill"}
            ></PackageCard>
            <PackageCard
              img={p_2}
              title={"Hike, Bike, and Kayak"}
              text={
                "Experience the wonders of Sri Lanka up close with Thema Travels! We offer a range of outdoor adventures that allow you to  connect with the country’s natural beauty. Whether it’s a challenging hike, a relaxing bike ride,..."
              }
              url={"hike-bike-kayak"}
            ></PackageCard>
            <PackageCard
              img={p_3}
              title={"Holiday and Vacation"}
              text={
                "Thema Travels is your ultimate partner for all types of holidays and vacation tours in Sri Lanka. Our dedicated team specializes in designing customized itineraries tailored to your preferences and i..."
              }
              url={"holiday-vacation"}
            ></PackageCard>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-3">
          <Link href="/" className={"underline pb-3"}>
            View All
          </Link>
          <div className="w-[92%] border-b"></div>
        </div>
      </div>
      {/*Why choose us*/}
      <div className="h-[80dvh] max-lg:h-fit relative">
        {/*mandala - top right*/}
        <div
          className="absolute bg-right top-0 right-0 bg-no-repeat bg-contain h-[500px] max-md:h-[300px] max-sm:h-[200px] aspect-square"
          style={{ backgroundImage: `url(${mandala_choose_1})` }}
        ></div>
        {/*mandala - bottom left*/}
        <div
          className="absolute bg-left bottom-0 left-0 bg-no-repeat bg-contain h-[500px] max-md:h-[300px] max-sm:h-[200px] aspect-square"
          style={{ backgroundImage: `url(${mandala_choose_2})` }}
        ></div>
        <div className="h-full px-12 py-6 max-md:px-6">
          <div className="flex h-full max-lg:flex-col">
            <div className="flex items-center w-1/3 max-lg:w-full max-lg:h-1/3">
              <p className="w-full text-[80px] abhaya text-[#700302] max-md:text-[30px]">
                WHY CHOOSE US
              </p>
            </div>
            <div className="flex flex-col w-1/2 gap-3 max-lg:w-full max-lg:h-2/3">
              <p className="text-lg font-semibold max-md:text-sm lh-lg">
                A Better Way of Traveling and Exploring Sri Lanka
              </p>
              <p className="text-lg font-medium text-justify max-md:text-sm lh-lg">
                Thema Travels is your go-to travel booking portal, offering
                aseamless way to explore the beauty of Sri Lanka. Effortlessly
                bookmulti-day tours, group departures, holidays, and
                tailor-madevacation packages. Discover a world of travel
                experiences,designed to suit your preferences and provide
                unforgettablememories Today, booking the right tour or holiday
                package has become a time consuming and painful process. Which
                tour operator is qualified? What’s the right tour price?When you
                pay an upfront deposit to an unknown tour operator, is your
                money safe? Are the reviews seen on a local operators website
                genuine?
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*phrase*/}
      <div className="flex items-center justify-center text-2xl">
        <span className="inline text-[60px] max-md:text-2xl poltawski-nowy max-lg:text-3xl max-xl:text-5xl text-[#700302] max-sm:hidden">
          “
        </span>
        <h1 className="w-1/2 text-center max-sm:w-fit max-sm:py-3 abhaya">
          Sri Lanka is a dream of lush greenery and sapphire seas.
        </h1>
        <span className="inline text-[60px] max-md:text-2xl poltawski-nowy max-lg:text-3xl max-xl:text-5xl text-[#700302] max-sm:hidden">
          ”
        </span>
      </div>
      {/*contact us*/}
      <div className="flex flex-col gap-12 px-12 py-6 max-md:px-6">
        <h1 className="title text-[40px] text-center abhaya">Contact Us</h1>
        <div className="bg-[#00000008] py-6 px-12 max-md:px-6 flex justify-center gap-12 max-lg:flex-col text-center">
          <div className="flex flex-col items-center justify-center lg:w-1/3">
            <img src={email} alt="" />
            <p>hello@travelssrilanka.com</p>
          </div>
          <div className="flex flex-col items-center justify-center lg:w-1/3">
            <img src={location} alt="" />
            <p> 198 4th Mile Post, Ehalagala, Sigiriya, Sri lanka, 21120</p>
          </div>
          <div className="flex flex-col items-center justify-center lg:w-1/3">
            <img src={call} alt="" />
            <p>+(94) 70 444 3343</p>
          </div>
        </div>
        <span className="flex flex-col items-center justify-center gap-6">
          <p className="text-center md:w-2/3 lh-lg">
            We’d love to hear from you! Whether you have a question, need a
            consultation, or want to schedule a fitting, the team at Thema Travels is here to assist you.
          </p>
          <button className="rounded-lg bg-[#700302] px-6 py-3 text-white hover:scale-90 transition-all">
            Contact Us
          </button>
        </span>
      </div>
    </div>
  );
}

export default Landing;
