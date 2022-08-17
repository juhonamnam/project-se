import { useRef } from 'react'

export const NaverSearch = ({ search = '' }) => {
  const ref = useRef<HTMLIFrameElement>(null)

  return (
    <iframe
      src={`/proxy/naver/search.naver?query=${encodeURIComponent(search)}`}
      ref={ref}
      width="50%"
      height="600"
    />
  )
}
