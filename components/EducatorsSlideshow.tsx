'use client'

import {
  CarouselProvider,
  Slider,
  Slide,
  Image as CarouselImage,
} from 'pure-react-carousel'

const images = [
  '/assets/educators/image1.jpg',
  '/assets/educators/image2.jpg',
  '/assets/educators/image3.jpg',
]

export default function EducatorsSlideshow() {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={60}
      totalSlides={images.length}
      interval={3000}
      isPlaying
    >
      <Slider>
        {images.map((image, index) => (
          <Slide key={index} index={index}>
            <CarouselImage src={image} alt="" hasMasterSpinner={false} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  )
}
