import YouTube from 'react-youtube'

const FeaturedVideo = ({id}) =>  <YouTube containerClassName='featured-video-container' className='featured-video' videoId={id} />

export default FeaturedVideo