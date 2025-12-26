import Image from "next/image"
import { cn } from "@/app/utilities/cn"
import { type Product } from "@/app/types/product"
import { shrinkString } from "@/app/utilities/shrink_string"

export default function ProductBox({
  product,
  isFeatured,
}: {
  product: Product
  isFeatured: boolean
}) {
  return (
    <div
      className={cn("border border-gray-300 p-6 grid grid-cols-2 gap-2", {
        "row-span-2": isFeatured,
      })}
    >
      <div>
        <h2 className='text-lg font-semibold'>
          {shrinkString(product.title, 25)}
        </h2>
        <p className='text-xl text-primary'>RS {product.price}</p>
        <p className='line-through text-gray-700'>RS {product.price - 10}</p>
      </div>
      <p className='text-4xl justify-self-end'>
        <span className='text-primary'>Special</span>
        <br /> Offer
      </p>
      <div className='w-25 h-25 bg-linear-to-tl from-[#00C9FF] to-[#92FE9D] rounded-full flex items-center justify-center text-black '>
        <p className='text-2xl'>
          Save
          <br />
          10%
        </p>
      </div>
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
        className='w-full h-48 object-contain'
      />
    </div>
  )
}
