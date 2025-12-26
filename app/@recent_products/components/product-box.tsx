import Image from "next/image"
import { Product } from "@/app/types/product"
import { shrinkString } from "@/app/utilities/shrink_string"

type ProductBoxProps = {
  product: Product
}

export default function ProductBox({ product }: ProductBoxProps) {
  return (
    <div className='flex flex-col border border-gray-300 p-4 gap-3'>
      <p className='text-sm'>Bin Bakar Electronics</p>
      <h2 className='text-[#034E53]'>{shrinkString(product.title, 18)}</h2>
      <Image
        alt={product.title}
        src={product.image}
        className='w-50 h-50 object-contain self-center'
        width={200}
        height={200}
      />
      <div>
        <p>RS {product.price}</p>
      </div>
      <button className='bg-primary text-white py-2'>Add to cart</button>
    </div>
  )
}
