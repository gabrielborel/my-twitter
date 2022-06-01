import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { Feed } from '../components/Feed';
import { Sidebar } from '../components/Sidebar';
import { Widgets } from '../components/Widgets';
import { api } from '../services/api';
import { Tweet } from '../types/Tweet';

interface HomeProps {
  tweets: Tweet[];
}

export default function Home({ tweets }: HomeProps) {
  return (
    <div className='lg:max-w-6xl mx-auto max-h-screen overflow-hidden'>
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <Toaster />

      <main className='grid grid-cols-9'>
        <Sidebar />

        <Feed tweetsProp={tweets} />

        <Widgets />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await api.get('/tweets');
  const tweets: Tweet[] = res.data.tweets;

  return {
    props: {
      tweets,
    },
  };
};
