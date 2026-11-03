import { useEffect, useRef } from 'react'

const STACK_VIDEO = '/videos/ymax-stack-anim.mp4'

/**
 * Exact Agoric ymax-stack-anim treatment:
 * parent: flex-1, max-h 500px, centered, page bg
 * video: w-full h-full object-contain mix-blend-lighten
 *        filter brightness(1.1) contrast(1.1)
 */
export function PortfolioStack() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.playsInline = true
    const tryPlay = () => {
      const p = video.play()
      if (p) p.catch(() => undefined)
    }
    tryPlay()
    video.addEventListener('canplay', tryPlay)
    return () => video.removeEventListener('canplay', tryPlay)
  }, [])

  return (
    <div className="agoric-video-slot" aria-hidden="true">
      <video
        ref={videoRef}
        className="agoric-stack-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={STACK_VIDEO} type="video/mp4" />
      </video>
    </div>
  )
}
