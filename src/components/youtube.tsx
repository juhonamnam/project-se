import { useRef } from 'react'

export const YoutubeSearch = ({ search = '' }) => {
  const ref = useRef<HTMLIFrameElement>(null)

  return (
    <iframe
      src={`/proxy/youtube/results?search_query=${encodeURIComponent(search)}`}
      ref={ref}
      width="50%"
      height="600"
    />
  )
}
