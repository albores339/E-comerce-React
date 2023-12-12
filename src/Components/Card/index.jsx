const Card = () => {
    return (
        <div className="bg-lime-100 cursor-pointer w-56 h-69 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-5.5">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 bg-lime-500 text-white font-bold">+</div>
            </figure>
            <p className="flex justify-between px-3 py-3">
                <span className="text-sm font-light">Headphones</span>
                <span className="text-sm font-medium">$300</span>
            </p>
        </div>
    )
}

export default Card