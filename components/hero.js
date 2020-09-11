const { default: Container } = require("./container");

const Hero = () => (
    <div className={'bg-black flex flex-col content-left py-12 -mt-12 mb-12'}>
        <Container>
            <h1 className='hero-text w-full md:w-3/4 text-2xl md:text-5xl mb-12 font-bold'>
                <span className={'hero-text'}>We help experienced and aspiring entrepreneurs</span> alike
                achieve the freedom, independence, and ability to do what they love
                to make the world a better place.
            </h1>
        </Container>
        <Container fullWidthOnMobile={true}>
            <div className='hero-image relative'>
                <img className='block' src='assets/john-banner.jpg'/>
            </div>
        </Container>

    </div>
)

export default Hero