import React from "react";

function TeamCard({ img, text1, text2, extraClasses }) {

  return (
    <div
      className={`relative optima aspect-square bg-[#700302] max-md:w-full cursor-pointer ${extraClasses}`}
    >
      <img src={img} alt="card-img" className="object-cover object-top w-full h-3/4" />
      <p className="flex items-center justify-center text-center text-white sm:text-sm h-1/6">
        {text1}
      </p>
      <p className="flex items-center justify-center py-1 text-xs text-center text-white">
        {text2}
      </p>
    </div>
  );
}

export default TeamCard;
