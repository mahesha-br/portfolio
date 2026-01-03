import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./Carousel"
import Autoplay from "embla-carousel-autoplay"

type MDXCarouselProps = {
  images: string[]
  alt?: string
}

export function MDXCarousel({ images, alt = "carousel image" }: MDXCarouselProps) {
  if (!images || images.length === 0) return null

  return (
    <div className="my-6">
      <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
       className="w-full max-w-xl mx-auto">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative aspect-video overflow-hidden rounded-lg border">
                <Image
                  src={src}
                  alt={`${alt} ${index + 1}`}
                  fill
                  draggable={false}
                  className="object-cover selection:bg-transparent"
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
