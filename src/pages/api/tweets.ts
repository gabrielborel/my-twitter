import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../../sanity';
import { Tweet } from '../../types/Tweet';
import { groq } from 'next-sanity';

type Data = {
  tweets: Tweet[];
};

const feedQuery = groq`
  *[_type == 'tweet' && !blockTweet] {
    _id,
    ...
  } | order(_createdAt desc)
`;

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<Data | unknown>
) {
  if (req.method === 'GET') {
    try {
      const tweets: Tweet[] = await sanityClient.fetch(feedQuery);

      console.log(tweets);

      res.status(200).json({ tweets });
    } catch (err) {
      console.log(err);

      res.status(400).json({ message: err });
    }
  }
}
