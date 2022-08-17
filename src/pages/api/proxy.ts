import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = String(req.query['url'])

  if (!url) {
    res.status(400).json({ ok: false })

    return
  }

  const response = await fetch(url)
  res.setHeader('content-type', response.headers.get('content-type') || '')

  res.status(response.status).send(response.body)
}
