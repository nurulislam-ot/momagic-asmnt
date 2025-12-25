class CategoryServiceClass {
  async getCategories() {
    const response = await fetch("https://momagic-backend-asmnt.vercel.app/categories")
    return response.json() as Promise<string[]>
  }
}

export const CategoryService = new CategoryServiceClass()
