import Image from "next/image"
import { ProductService } from "../services/product.service"

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = await ProductService.getProductById(id)

  return (
    <section>
      <div className='container mx-auto py-10 flex gap-10'>
        <Image
          src={product.image}
          alt={product.title}
          width={256}
          height={256}
          className='w-64 h-64'
        />
        <div>
          <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
          <p className='text-lg mb-2'>Price: ${product.price}</p>
          <p className='mb-6'>{product.description}</p>
        </div>
      </div>
    </section>
  )
}
