import React from "react"

import { ChevronUpIcon, PhoneIcon } from "@heroicons/react/24/solid"

const Floating = () => {
        const handleScrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });}
      
    return(
        <div className="flex flex-col gap-2">
        <div className="fixed bottom-10 right-10 z-10">
            <button className="w-8px h-8px bg-sky-500 rounded-full p-3 text-white animate-bounce" onClick={handleScrollToTop}><ChevronUpIcon className="h-8 w-8" /></button>
        </div>
        </div>

    )
}

export default Floating