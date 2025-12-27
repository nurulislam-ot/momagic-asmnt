"use client"

import ProductBox from "./product-box"
import { Product } from "@/app/types/product"
import { Swiper, SwiperSlide } from "swiper/react"

type ProductsProps = {
  products: Product[]
}

export default function Products({ products }: ProductsProps) {
  return (
    <Swiper slidesPerView={5} spaceBetween={32}>
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductBox product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
