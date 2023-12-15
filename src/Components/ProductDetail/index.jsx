import { XMarkIcon } from '@heroicons/react/24/solid'
import "./styles.css"

const ProductDetail = () => {
    return (
        <aside className="product-detail flex flex-col fixed right-0 bg-white border border-lime-500 rounded-lg">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-md">Detail</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-blue-500" />
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail