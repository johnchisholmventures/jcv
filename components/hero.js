const { default: Container } = require("./container");

const Hero = () => (
    <div className={'bg-black flex flex-col content-left py-12 -mt-12 mb-12'}>
        <Container className='w-full'>
            
            <h1 className='block hero-text text-2xl w-full md:w-hero-text md:text-5xl mb-12 font-bold leading-tight'>
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