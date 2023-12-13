const Card = ( data ) => {
    return (
        <div className="bg-teal-50 cursor-pointer w-56 h-69 rounded-lg m-3">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-5.5 font-light">{data.data.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.data.image} alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 bg-lime-500 text-white font-bold">+</div>
            </figure>
            <p className="flex justify-between px-3 py-3">
                <span className="text-sm font-light text-black">{data.data.title}</span>
                <span className="text-sm font-medium text-lime-500">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card