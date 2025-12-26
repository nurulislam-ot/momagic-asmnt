import ProductBox from "./product-box"
import { type Product } from "@/app/types/product"

type ProductsProps = {
  products: Product[]
}
export default function Products({ products }: ProductsProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 grid-rows-2'>
      {products.map((product, index) => (
        <ProductBox
          key={product.id}
          isFeatured={index === 1}
          product={product}
        />
      ))}
    </div>
  )
}
