import { RefreshIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/api';
import { Tweet } from '../types/Tweet';
import { Tweet as TweetComponent } from './Tweet';
import { TweetBox } from './TweetBox';

interface FeedProps {
  tweetsProp: Tweet[];
}

export const Feed = ({ tweetsProp }: FeedProps) => {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);

  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreshing...');
    const res = await api.get('/tweets');
    const tweets = res.data.tweets;
    setTweets(tweets);

    toast.success('Feed Updated!', {
      id: refreshToast,
    });
  };

  return (
    <div className='col-span-7 lg:col-span-5 border-x border-gray-100'>
      <div className='flex item-center justify-between'>
        <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className='h-8 w-8 cursor-pointer text-twitter mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125'
        />
      </div>

      <div>
        <TweetBox />
      </div>

      <div className='overflow-y-scroll h-screen'>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};
