import { SVGProps } from 'react';

interface SidebarRowProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick?: () => void;
}

export const SidebarRow = ({ Icon, title, onClick }: SidebarRowProps) => {
  return (
    <div
      onClick={() => onClick?.()}
      className='max-w-fit flex items-center rounded-full space-x-2 px-4 py-3 cursor-pointer transition-all duration-200 hover:bg-gray-100 group'
    >
      <Icon className='w-6 h-6' />
      <p className='group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl'>
        {title}
      </p>
    </div>
  );
};
