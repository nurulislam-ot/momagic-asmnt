import Image from "next/image"

import { shrinkString } from "@/app/utilities/shrink_string"
import { ProductService } from "@/app/services/product.service"

export default async function RecentProducts() {
  const products = await ProductService.getProducts()
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 container mx-auto py-10'>
      {products.map((product) => (
        <div
          key={product.id}
          className='flex flex-col border border-gray-300 p-4 gap-3'
        >
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
      ))}
    </div>
  )
}
