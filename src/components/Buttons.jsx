import { useState } from 'react';

export function Buttons() {
    
     const [adults, setAdults] = useState(0);
        const [childs, setChilds] = useState(0);

        const moreAdults = (()=> setAdults(adults+1));
        const lessAdults = (()=> setAdults(adults > 0? adults -1:0));

        const moreChilds = (()=> setChilds(childs+1));
        const lessChilds = (()=> setChilds(childs > 0? childs -1:0));
    
    return (

       <div className='mx-3 gap-10 flex flex-col justify-normal md:place-items-center md:px-40 h-48 md:h-56 md:my-8 w-full'>
            <div className="w-56">
                <h4 className='font-bold'>Adults</h4>
                <p className='text-slate-400'>Ages 13 or above</p>
                <div className='flex gap-8 mt-2'>
                    <button className="bg-slate-200 size-6 rounded-md border border-slate-500 active:border-slate-950" onClick={lessAdults}>-</button>
                    <p className='font-bold'>{adults}</p>
                    <button className="bg-slate-200 size-6 rounded-md border border-slate-500 active:border-slate-950" onClick={moreAdults}>+</button>
                </div>
            </div>
            <div className="w-56">
                <h4 className='font-bold'>Children</h4>
                <p className='text-slate-400'>Ages 13 or above</p>
                <div className='flex gap-8 mt-2'>
                    <button className="bg-slate-200 size-6 rounded-md border border-slate-500 active:border-slate-950" onClick={lessChilds}>-</button>
                    <p className='font-bold'>{childs}</p>
                    <button className="bg-slate-200 size-6 rounded-md border border-slate-500 active:border-slate-950" onClick={moreChilds}>+</button>
                </div>
            </div>

        </div>

    )
}