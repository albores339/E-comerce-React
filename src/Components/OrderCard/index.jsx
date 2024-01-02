import { MinusCircleIcon } from "@heroicons/react/24/solid"


const OrderCard = props => {
    const { title, imageUrl, price, handleDelete, index } = props
    let renderMinusCircleIcon
        if (handleDelete){
            renderMinusCircleIcon =  <MinusCircleIcon onClick={() => handleDelete(index)} className="text-red-500 h-6 w-6 absolute right-1 top-1 cursor-pointer"/>
        }
    

    return (
        <div className="flex items-center p-4 m-3 shadow-lg rounded-lg relative">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20 m-2">
                    <img className="h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
            </div>
            <div className="flex p-1 gap-3">
                <p className="text-sm font-light">{title}</p>
                <p className="text-lg font-medium t">{price}</p>
            </div>
           {renderMinusCircleIcon}
        </div>
    )
} 

export default OrderCard