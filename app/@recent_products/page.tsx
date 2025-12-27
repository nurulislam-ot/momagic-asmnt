import Products from "./components/products"
import { ProductService } from "@/app/services/product.service"

export default async function RecentProducts() {
  const products = await ProductService.getProducts()

  return (
    <section>
      <div className='container mx-auto py-10'>
        <h2 className='text-2xl font-bold mb-6'>
          <span className='text-primary'>New</span> Arrivals
        </h2>
        <Products products={products} />
      </div>
    </section>
  )
}
