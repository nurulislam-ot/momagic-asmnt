import { Product } from "../types/product"

class ProductServiceClass {
  async getProducts() {
    const response = await fetch(
      "https://momagic-backend-asmnt.vercel.app/products"
    )
    const data = (await response.json()) as Product[]
    return data.slice(0, 10)
  }

  async getProductsByCategory(category: string) {
    const response = await fetch(
      `https://momagic-backend-asmnt.vercel.app/products/category/${encodeURIComponent(
        category
      )}`
    )
    const data = (await response.json()) as Product[]
    return data.slice(0, 5)
  }

  async getProductById(id: string) {
    const response = await fetch(
      `https://momagic-backend-asmnt.vercel.app/products/${id}`
    )
    const data = (await response.json()) as Product
    return data
  }
}

export const ProductService = new ProductServiceClass()
