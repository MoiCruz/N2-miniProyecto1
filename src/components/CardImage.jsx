

import React, { useState, useEffect } from 'react';

export function CardImage() {

  const [categorys, setCategorys] = useState(true)

  useEffect(() => {
    fetch('/public/stay.json')
      .then((answer) => answer.json())
      .then((data) => setCategorys(data))
      .catch((error) => console.error(error));
  }, []);


  const { city, country, superHost, title, rating, type, photo } = categorys

  return (
    <div className="">
      <div className="flex mx-4 justify-between md:mx-80">
        <h1 className="text-2xl font-black">Stays in {country}</h1>
        <p className="font-bold">12+ stays</p>
      </div>
      <div className="justify-items-center mt-7">
        <img src={photo} alt="" className=" bg-orange-700 h-64 w-96 rounded-3xl" />
        <div className="flex gap-32 mt-3">
          <div className="flex gap-2 text-center items-center">
            <span className="font-black text-sm content-center border border-slate-900 rounded-xl h-7 w-24">{superHost? "SUPERHOST" : "HOST"}</span>
            <p className="">{type}</p>
          </div>
          <span className="flex gap-3 items-center">
            <img src="../icons/star.png" alt="" className="size-4" />
            <p className="">{rating}</p>
          </span>
        </div>
        <div className="mt-2 font-bold me-24">{title}</div>
      </div>

    </div>
  )
}
