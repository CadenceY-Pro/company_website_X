import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="CadenceY home">
      <span className="logo-mark" aria-hidden="true">
        <span className="sq" />
        <span className="inner" />
        <span className="dot" />
      </span>
      CadenceY
    </Link>
  )
}
