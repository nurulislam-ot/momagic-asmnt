import { CategoryService } from "../services/category.service"

export default async function Categories() {
  const categories = await CategoryService.getCategories()

  return (
    <div className='container mx-auto flex gap-2'>
      {categories.map((category) => (
        <div className="text-lg border p-3 border-gray-400 rounded-2xl" key={category}>{category}</div>
      ))}
    </div>
  )
}
