import React from "react"

import { ChevronUpIcon, PhoneIcon } from "@heroicons/react/24/solid"

const Floating = () => {
        const handleScrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });}
      
    return(
        <div className="flex flex-col gap-2">
        <div className="fixed bottom-10 right-10 z-10">
            <button className="w-10px h-10px bg-sky-500 rounded-full p-4 text-white animate-bounce" onClick={handleScrollToTop}><ChevronUpIcon className="h-10 w-10" /></button>
        </div>
        </div>

    )
}

export default Floating