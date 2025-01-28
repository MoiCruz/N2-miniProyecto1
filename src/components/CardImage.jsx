

import React, { useState, useEffect } from 'react';

export function CardImage() {

  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const answer = await fetch('/stay.json')
        const data = await answer.json()
        console.log(data);
        setCategories(data)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setError(error)
        setLoading(false)
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return;
  }

  if (error) {
    return;
  }
  if (categories.length === 0) {
    return
  }

  return (

    <div className="">
      <div className="flex mx-4 justify-between md:mx-80">
        <h1 className="text-2xl font-black">Stays in {categories[0]?.country}</h1>
        <p className="font-bold">{categories.length}+ stays</p>
      </div>

      {categories.map((category, index) => {

        const { city, country, superHost, title, rating, type, photo } = category;

        return (
          <div className=''>
          <div key={index} className='mb-10'>

            <div className="justify-items-center mt-7">
              <img src={photo} alt="" className="h-64 w-96 rounded-3xl" />
              <div className="flex gap-32 mt-3">
                <div className="flex gap-2 text-center items-center">
                  <span className="font-black text-sm content-center border border-slate-900 rounded-xl h-7 w-24">{superHost ? "SUPERHOST" : "HOST"}</span>
                  <p className="">{type}</p>
                </div>
                <span className="flex gap-3 items-center">
                  <img src="../icons/star.png" alt="" className="size-4" />
                  <p className="">{rating}</p>
                </span>
              </div>
              <div className="mt-2 font-bold">{title}</div>
            </div>
          </div>
          </div>
        )
      })}

    </div>


  )
}
