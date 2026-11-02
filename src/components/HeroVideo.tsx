import { useEffect, useRef } from 'react'

const HERO_VIDEO =
  'https://videos.ctfassets.net/wa8sbre9d8c7/2vvs5WjtZVrCCg9rLxjSM1/f142204051d5bb85c59bc8c424f0acaf/hero_anim_final.mp4'

/**
 * Exact Agoric hero_anim_final treatment:
 * absolute inset-0, object-cover, mix-blend-screen, pointer-events-none
 */
export function HeroVideo() {
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
    <div className="agoric-hero-video-wrap" aria-hidden="true">
      <video
        ref={videoRef}
        className="agoric-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
    </div>
  )
}
