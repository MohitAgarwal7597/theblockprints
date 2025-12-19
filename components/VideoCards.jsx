'use client'

const VideoCards = () => {
  const videos = [
    {
      id: 1,
      src: '/videos/saree.mp4',
      title: 'Handblock Printing Process',
      poster: '/video-poster/saree.png',
    },
    {
      id: 2,
      src:'/videos/dupatta.mp4',
      title: 'Silk Saree Collection',
      poster: '/video-poster/dupatta.png',
    },
    {
      id: 3,
      src: '/videos/plain_fabric.mp4',
      title: 'Custom Printing Demo',
      poster: '/video-poster/greige.png',
    },
    {
      id: 4,
      src: '/videos/suits.mp4',
      title: 'Fabric Quality Showcase',
      poster: '/video-poster/suit.png',
    },
    {
      id: 5,
      src: '/videos/video.mp4',
      title: 'Behind the Scenes',
      poster:'/video-poster/saree.png',
    },
  ]

  return (
    <section className="section-padding bg-light">
      <div className="container-custom">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-philosopher mb-4">
            See Our Craft in Motion
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how we create beautiful textiles with traditional techniques and modern designs
          </p>
        </div>

        <div className="video-cards-container">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`video-card animate-on-scroll stagger-${(index % 5) + 1}`}
            >
              <video
                src={video.src}
                poster={video.poster}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-philosopher text-xl">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoCards
