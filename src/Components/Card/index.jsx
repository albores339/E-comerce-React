const Card = ( data ) => {
    return (
        <div className="shadow-xl bg-gradient-to-r from-cyan-100 to-lime-100 cursor-pointer w-60 h-80 rounded-lg m-4 justify-center">
            <figure className="relative mb-2 w-full h-4/5 bg-white">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-5.5 font-light">{data.data.category}</span>
                <img className=" h-full object-cover rounded-lg" src={data.data.image} alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 bg-lime-500 bg-gradient-to-r from-lime-400 to-lime-500 hover:from-pink-400 hover:to-orange-500 text-white font-bold">+</div>
            </figure>
            <p className="flex justify-between px-2 py-2">
                <span className="text-sm font-light text-black">{data.data.title}</span>
                <span className="text-sm font-bold text-lime-500">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card