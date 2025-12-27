import Products from "./components/products"
import { ProductService } from "../services/product.service"

export default async function BestDeals() {
  const products = await ProductService.getProductsByCategory("electronics")
  return (
    <section className="py-10">
      <div className='container mx-auto'>
        <h2 className='text-2xl font-bold mb-6'>
          <span className='text-primary'>Best</span> Deals
        </h2>

        <Products products={products} />
      </div>
    </section>
  )
}
