import { CategoryService } from "../services/category.service"

export default async function Categories() {
  const categories = await CategoryService.getCategories()
  return (
    <div>
      {categories.map((category) => (
        <div key={category}>{category}</div>
      ))}
    </div>
  )
}
