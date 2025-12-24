import { Product } from "../types/product"

class ProductServiceClass {
  async getProducts() {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json() as Promise<Product[]>
  }
}

export const ProductService = new ProductServiceClass()
