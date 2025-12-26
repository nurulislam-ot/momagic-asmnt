import ProductBox from "./product-box"
import { Product } from "@/app/types/product"

type ProductsProps = {
  products: Product[]
}

export default function Products({ products }: ProductsProps) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 container mx-auto py-10'>
      {products.map((product) => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  )
}
