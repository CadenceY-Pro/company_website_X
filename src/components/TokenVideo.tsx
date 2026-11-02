import { useEffect, useRef } from 'react'

const TOKEN_VIDEO =
  'https://videos.ctfassets.net/wa8sbre9d8c7/1TMaWLOAIKDvvLstJnjDVZ/d56c1aa950f046b32aa74725c09d97d6/sponge.mp4'

/**
 * Exact Agoric sponge.mp4 treatment for token/economy section:
 * centered absolute wrap with mix-blend-lighten, video object-contain
 * filter brightness(1.1) contrast(1.1)
 */
export function TokenVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    const tryPlay = () => {
      const p = video.play()
      if (p) p.catch(() => undefined)
    }
    tryPlay()
    video.addEventListener('canplay', tryPlay)
    return () => video.removeEventListener('canplay', tryPlay)
  }, [])

  return (
    <div className="agoric-token-video-wrap" aria-hidden="true">
      <video
        ref={videoRef}
        className="agoric-token-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={TOKEN_VIDEO} type="video/mp4" />
      </video>
    </div>
  )
}
