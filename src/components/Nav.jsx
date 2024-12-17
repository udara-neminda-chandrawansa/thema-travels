import { Link } from "wouter";
import burger from "./../assets/burger.svg";
import logo from "/favicon.png";

function Nav({inLanding}) {
  return (
    <div className={`w-full h-fit flex justify-center items-center font-thin text-lg z-50 max-[940px]:justify-between ${inLanding ? " absolute top-0 bg-transparent" : " bg-black"}`}>
      {/*normal nav*/}
      <div className="flex justify-center w-full px-10 h-[10dvh] max-[940px]:hidden">
        <ul className="flex items-center justify-start h-full gap-6 w-fit">
          <Link href="/" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Home
            </li>
          </Link>
          <Link href="/about" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              About Us
            </li>
          </Link>
          <Link href="/services" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Our Services
            </li>
          </Link>
          <Link href="/packages" className="text-white no-underline">
            <li className="flex items-center justify-center  text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Our Packages
            </li>
          </Link>
          <Link href="/contact" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Contact Us
            </li>
          </Link>
          <Link href="/privacy" className="text-white no-underline">
            <li className="flex items-center justify-center text-nowrap px-3 cursor-pointer max-lg:text-sm max-[972px]:text-xs">
              Privacy Policy
            </li>
          </Link>
        </ul>
      </div>
      {/*burger button*/}
      <div
        className="hidden place-items-center h-[10dvh] px-10 cursor-pointer place-content-center py-6 max-[940px]:grid text-black"
        data-coreui-toggle="modal"
        data-coreui-target="#staticBackdrop"
      >
        <img src={burger} alt="burger-icon" className="scale-150" />
      </div>
      {/*logo for small screen nav*/}
      <div className="hidden max-[940px]:block pr-6">
        <img src={logo} alt="logo-for-small-screen" className="h-[60px] scale-75" />
      </div>
      {/*Nav Modal for small screens*/}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-coreui-backdrop="false"
        data-coreui-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-coreui-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="flex flex-col items-center justify-start h-full gap-6 font-medium">
                <Link href="/" className="w-full text-white no-underline">
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/about" className="w-full text-white no-underline">
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    About Us
                  </li>
                </Link>
                <Link
                  href="/services"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Our Services
                  </li>
                </Link>
                <Link
                  href="/packages"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Our Packages
                  </li>
                </Link>
                <Link
                  href="/contact"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Contact Us
                  </li>
                </Link>
                <Link
                  href="/privacy"
                  className="w-full text-white no-underline"
                >
                  <li
                    className="flex items-center justify-center w-full text-black cursor-pointer text-nowrap max-lg:text-sm"
                    data-coreui-dismiss="modal"
                  >
                    Privacy Policy
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
