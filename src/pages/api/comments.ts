import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';
import { Comment } from '../../types/Comment';

type Data = Comment[];

const commentQuery = groq`
  *[_type == 'comment' && references(*[_type == 'tweet' && _id == $tweetId]._id)] {
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
      const { tweetId } = req.query;

      const comments: Comment[] = await sanityClient.fetch(commentQuery, {
        tweetId,
      });

      res.status(200).json({ comments });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: err });
    }
  }
}
