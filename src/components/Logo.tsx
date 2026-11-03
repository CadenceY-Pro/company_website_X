import { Link } from 'react-router-dom'

export function BrandMark({ className = 'logo-mark' }: { className?: string }) {
  return (
    <img
      className={className}
      src="/brand/cadencey-mark.svg"
      alt=""
      width={28}
      height={28}
      decoding="async"
    />
  )
}

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="CadenceY home">
      <BrandMark />
      CadenceY
    </Link>
  )
}
