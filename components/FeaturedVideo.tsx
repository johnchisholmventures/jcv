'use client'

import YouTube from 'react-youtube'

export default function FeaturedVideo({ id }: { id: string }) {
  return (
    <div className="featured-video-container">
      <YouTube
        videoId={id}
        className="featured-video"
        iframeClassName="featured-video"
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            rel: 0,
            modestbranding: 1,
          },
        }}
      />
    </div>
  )
}
