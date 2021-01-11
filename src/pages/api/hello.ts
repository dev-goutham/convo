// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiResponse, NextApiHandler } from 'next'

const name: NextApiHandler = (_, res: NextApiResponse) => {
	res.statusCode = 200
	res.json({ name: 'John Doe' })
}

export default name
