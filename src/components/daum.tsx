import { useRef } from 'react'

export const DaumSearch = ({ search = '' }) => {
  const ref = useRef<HTMLIFrameElement>(null)

  return (
    <iframe
      src={`/proxy/daum/search?q=${encodeURIComponent(search)}`}
      ref={ref}
      width="50%"
      height="600"
    />
  )
}
