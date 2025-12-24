class CategoryServiceClass {
  async getCategories() {
    const response = await fetch("https://fakestoreapi.com/products/categories")
    return response.json() as Promise<string[]>
  }
}

export const CategoryService = new CategoryServiceClass()
