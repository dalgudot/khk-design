// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// https://nextjs.org/docs/basic-features/typescript

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
