import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import { SidebarRow } from './SidebarRow';

export const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <img
        className='m-3 w-10 h-10'
        src='https://links.papareact.com/drq'
        alt='Twitter 2.0 logo'
      />

      <SidebarRow Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={HashtagIcon} title='Explore' />
      <SidebarRow Icon={BellIcon} title='Notification' />
      <SidebarRow Icon={MailIcon} title='Messages' />
      <SidebarRow Icon={BookmarkIcon} title='Bookmark' />
      <SidebarRow Icon={CollectionIcon} title='Lists' />
      <SidebarRow
        Icon={UserIcon}
        onClick={session ? signOut : signIn}
        title={session ? 'Sign Out' : 'Sign In'}
      />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title='More' />
    </div>
  );
};
