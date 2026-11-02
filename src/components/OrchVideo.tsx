import { useEffect, useRef } from 'react'

const ORCH_VIDEO =
  'https://videos.ctfassets.net/wa8sbre9d8c7/1MvRgKqKesbJFdERlsnJR0/ca7564e2539c14e6381dd4f9a21d632c/rotatingSquares.mp4'

/**
 * Exact Agoric rotatingSquares treatment:
 * same slot as stack — object-contain + mix-blend-lighten + brightness/contrast
 */
export function OrchVideo() {
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
        <source src={ORCH_VIDEO} type="video/mp4" />
      </video>
    </div>
  )
}
