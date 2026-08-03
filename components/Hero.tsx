import Container from './Container'

export default function Hero() {
  return (
    <div className="bg-black flex flex-col py-12 -mt-12 mb-12">
      <Container className="w-full">
        <h1 className="block hero-text text-2xl w-full md:w-hero-text md:text-5xl mb-12 font-bold leading-tight">
          <span>We help experienced and aspiring entrepreneurs</span> alike
          achieve the freedom, independence, and ability to do what they love to
          make the world a better place.
        </h1>
      </Container>
      <Container fullWidthOnMobile>
        <div className="hero-image relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="block w-full"
            src="/assets/john-banner.jpg"
            alt="John Chisholm"
          />
        </div>
      </Container>
    </div>
  )
}
