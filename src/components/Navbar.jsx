
import { useState } from "react";
import { CardImage } from "./CardImage"
import { Modal } from "./Modal";

export function Navbar() {

  const [addModal, setAddModal] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  
  const openModal = () => {
    setAddModal(true)
    setIsModalOpen(true)}

  const closeModal = () => {
    setAddModal(false)
    setIsModalOpen(false)}
  return (
    <>

    <div className="md:flex justify-between items-center my-6 mx-10 md:mx-80" style={{display: isModalOpen ? 'none':'flex'}}>
      <div className="flex items-start">
        <img src="../public/icons/triangle.png" alt="" className="size-6" />
        <div className="w-15 h-6 text-md font-black text-red-500">windbnb</div>
        </div>
        <div className="flex">
            <button className="border border-slate-200 text-slate-400 mt-5 text-sm h-16 w-36 md:w-36 md:h-12 rounded-l-lg" onClick={openModal}>Add location</button>
            <button className="border border-slate-200 text-slate-400 mt-5 text-sm h-16 w-36 md:w-36 md:h-12" onClick={openModal}>3 guest</button>
            <button className="border border-slate-200 flex mt-5 text-sm h-16 w-20 md:w-16 md:h-12 rounded-r-lg items-center justify-center" onClick={openModal}>
              <img src="../icons/search1.png" alt="" className="size-5 " />
            </button>
        </div>
    </div>
    {addModal && <Modal closeModal={closeModal}/>}
    
    < CardImage />
    

    
   </>

  )
}

