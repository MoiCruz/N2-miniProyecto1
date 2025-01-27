import { Buttons } from "./Buttons";

export function Modal() {
    return (
        <>

            <div className='content-between md:flex md:justify-between md:py-16 px-7 h-96 md:h-44 w-full md:mx-16'>
                <h6 className="sm:hidden font-black text-sm">Edit your search</h6>

                <div className='md:flex w-full me-20 mt-8'>
                    <div className='md:w-4/5 mx-1 md:rounded-2xl'>
                        <h4 className='text-xs mx-2 mt-1 font-bold position: absolute ps-2'>LOCATION</h4>
                        <input className='pt-2 w-full h-12 sm:rounded-t-lg md:mx-2 md:rounded-2xl border active:border-neutral-900 px-2 border-slate-200' type='text' placeholder='Add location' />


                    </div>
                    <div className='md:w-4/5 mx-1 md:rounded-2xl'>
                        <h4 className='text-xs px-2 mx-2 mt-1 font-bold position: absolute'>GUESTS</h4>
                        <div className='w-full h-12 sm:rounded-b-lg md:mx-2 md:rounded-2xl border active:border-neutral-900 pt-4 px-2 cursor: cursor-pointer border-slate-200' placeholder='' type="onclick">Add guest</div>

                    </div>
                </div>
                <div className="flex justify-center mt-44 md:mt-8">
                    <button className='w-36 h-11 md:w-36 md:h-12 bg-red-500 hover:bg-red-600 rounded-2xl md:rounded-2xl md:me-72 flex flex-row-reverse justify-center items-center text-lg text-white' type="onClick" >search
                        <img src="../public/icons/search2.png" alt="search" className="size-5 md:size-5 m-1" />
                    </button>
                </div>

            </div>
            <Buttons />


        </>

    )
}
