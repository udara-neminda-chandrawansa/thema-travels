import logo from "/favicon.png";
import footer_bg from "./../assets/footer_bg.png";
import { Link } from "wouter";
import email from "./../assets/Footer/email.png";
import location from "./../assets/Footer/location.png";
import call from "./../assets/Footer/call.png";

function Footer() {
  return (
    <footer
      className="relative h-fit py-6 flex flex-col gap-6 border-t-[1px] bg-no-repeat bg-center font-normal bg-cover px-12 max-md:px-6 max-sm:px-3 text-lg max-lg:text-base max-sm:pt-3 max-md:text-sm text-white"
      style={{ backgroundImage: `url(${footer_bg})` }}
    >
      {/*Top layer (backdrop)*/}
      <div className="absolute bottom-0 h-full inset-0 bg-[#000000B8]"></div>
      
      <div className="z-10 flex items-center justify-center gap-6 max-md:h-fit max-md:flex-col">
        <img src={logo} alt="logo" className="w-1/4 max-md:w-[100px] max-md:h-[100px]" />
        <p className="w-3/4 text-justify max-md:w-full">
          Hey there! Welcome to Sri Lanka! We’re super excited to have you with
          us at Ceylon Tours. Get ready for an amazing adventure filled with
          stunning sights, rich culture, and friendly faces. Our team is here to
          make sure you have a fantastic time, customized just for you. If you
          have any questions or need anything at all, don’t hesitate to ask. We
          can’t wait to help you create some unforgettable memories here in Sri
          Lanka!
        </p>
      </div>

      <div className="z-10 flex items-center max-sm:h-fit max-sm:py-3">
        <ul className="flex w-full justify-evenly h-fit max-sm:flex-col max-sm:gap-3">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li className="">
            <Link href="/about">About Us</Link>
          </li>
          <li className="">
            <Link href="/services">Our Services</Link>
          </li>
          <li className="">
            <Link href="/packages">Our Packages</Link>
          </li>
          <li className="">
            <Link href="/contact">Contact Us</Link>
          </li>
          <li className="">
            <Link href="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className="z-10 flex items-center">
        <ul className="flex justify-center w-full gap-6 max-sm:justify-center max-sm:gap-3 max-xl:flex-col">
          <li className="flex items-center gap-6 transition-all">
            <a href="https://www.facebook.com/" className="flex items-center gap-3">
              <img src={email} alt="fb-icon" />
              <p>hello@travelssrilanka.com</p>
            </a>
          </li>
          <li className="flex items-center gap-6 transition-all">
            <a href="https://www.tiktok.com/" className="flex items-center gap-3">
              <img src={location} alt="tk-icon" />
              <p>198 4th Mile Post, Ehalagala, Sigiriya, Sri lanka, 21120</p>
            </a>
          </li>
          <li className="flex items-center gap-6 transition-all">
            <a href="https://www.whatsapp.com/" className="flex items-center gap-3">
              <img src={call} alt="fb-icon" />
              <p>+(94) 70 444 3343</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="z-10 flex items-center">
        <div className="flex items-center justify-center w-full tracking-widest text-center border-t-2 h-1/4 optima border-t-white">
          <p className="pt-6">
            2024 © All Rights Reserved | Thema Travels | Designed & Developed by
            Silicon Radon Networks (Pvt) Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
