import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';

export const TweetBox = () => {
  const [tweetInputValue, setTweetInputValue] = useState('');

  return (
    <div className='flex space-x-2 p-5'>
      <img
        className='h-14 w-14 object-cover rounded-full'
        src='https://links.papareact.com/gll'
        alt='User image'
      />

      <div className='flex flex-1 items-center pl-2'>
        <form className='flex flex-1 flex-col'>
          <input
            value={tweetInputValue}
            onChange={(e) => setTweetInputValue(e.currentTarget.value)}
            className='h-24 w-full text-xl outline-none placeholder:text-xl'
            type='text'
            placeholder="What's Happening?"
          />

          <div className='flex items-center '>
            <div className='flex flex-1 space-x-2 text-twitter'>
              <PhotographIcon className='w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
              <SearchCircleIcon className='w-5 h-5' />
              <EmojiHappyIcon className='w-5 h-5' />
              <CalendarIcon className='w-5 h-5' />
              <LocationMarkerIcon className='w-5 h-5' />
            </div>

            <button
              disabled={!tweetInputValue}
              className='bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40 transition-opacity'
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
