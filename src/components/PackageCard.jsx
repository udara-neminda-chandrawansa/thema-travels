import React from "react";
import { Link } from "wouter";

function PackageCard({ img, title, text, url, extraClasses }) {
  return (
    <div
      className={`relative optima aspect-square bg-[#700302] max-md:w-full cursor-pointer ${extraClasses}`}
    >
      <img
        src={img}
        alt="card-img"
        className="object-cover object-top w-full h-3/4"
      />
      <div className="flex flex-col gap-4 py-3 h-fit">
        <h1 className="p-2 bg-white text-[#700302] w-fit rounded-e-lg">
          {title}
        </h1>
        <p className="flex items-center justify-center px-6 text-center text-white sm:text-sm">
          {text}
        </p>
        <span className="flex justify-center">
          <Link href={`/packages/${url}`} className={"underline text-white"}>
            View All
          </Link>
        </span>
      </div>
    </div>
  );
}

export default PackageCard;
