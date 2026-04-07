"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./Carousel"
import Autoplay from "embla-carousel-autoplay"

type MDXCarouselProps = {
  images: string[]
  alt?: string
}

export function MDXCarousel({ images, alt = "carousel image" }: any) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )
  const imageList = typeof images === "string" ? images.split(",").map(s => s.trim()) : (images || [])
  
  if (!imageList || imageList.length === 0) return null

  return (
    <div className="my-6">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[plugin.current]}
        className="w-full max-w-xl mx-auto">
        <CarouselContent>
          {imageList.map((src: string, index: number) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video overflow-hidden rounded-lg border">
                <Image
                  src={src}
                  alt={`${alt} ${index + 1}`}
                  fill
                  draggable={false}
                  className="object-cover selection:bg-transparent pointer-events-none"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
