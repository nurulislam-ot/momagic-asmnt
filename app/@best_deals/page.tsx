import Image from "next/image"

import { cn } from "../utilities/cn"
import { shrinkString } from "../utilities/shrink_string"
import { ProductService } from "../services/product.service"

export default async function BestDeals() {
  const products = await ProductService.getProductsByCategory("electronics")
  return (
    <section>
      <div className='container mx-auto'>
        <h2 className='text-3xl'>
          <span className='text-primary'>Best</span> Deals
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 grid-rows-2'>
          {products.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                "border border-gray-300 p-6 grid grid-cols-2 gap-2",
                {
                  "row-span-2": index === 1,
                }
              )}
            >
              <div>
                <h2 className='text-lg font-semibold'>
                  {shrinkString(product.title, 25)}
                </h2>
                <p className='text-xl text-primary'>RS {product.price}</p>
                <p className='line-through text-gray-700'>
                  RS {product.price - 10}
                </p>
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
          ))}
        </div>
      </div>
    </section>
  )
}
