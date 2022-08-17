import { useRef } from 'react'

export const GoogleSearch = ({ search = '' }) => {
  const ref = useRef<HTMLIFrameElement>(null)

  return (
    <iframe
      src={`/proxy/google/search?q=${encodeURIComponent(search)}`}
      ref={ref}
      width="50%"
      height="600"
    />
  )
}
