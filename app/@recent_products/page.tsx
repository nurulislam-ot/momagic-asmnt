import Products from "./components/products"
import { ProductService } from "@/app/services/product.service"

export default async function RecentProducts() {
  const products = await ProductService.getProducts()
  return <Products products={products} />
}
