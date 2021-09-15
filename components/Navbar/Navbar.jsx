import { HomeIcon } from '../../public/svg/HomeIcon';
import { Assets } from '../../public/svg/Assets';
import { LiveTrade } from '../../public/svg/LiveTrade';
import { Forum } from '../../public/svg/Forum';
import { Reports } from '../../public/svg/Reports';
import { Settings } from '../../public/svg/Settings';
import { logoHeader as LogoHeader } from '../UI/LogoHeader';
import { Button } from '../UI/Button';

export const Navbar = () => (
  <div className='bg-secondary fixed bottom-0 sm:left-0 sm:h-screen z-10 sm:bg-primary flex w-full sm:w-64 sm:flex-col py-2 px-4 sm:px-8 sm:py-10'>
    {/* logo */}
    <div className='hidden sm:flex'>
      <LogoHeader />
    </div>
    {/* nav links */}
    <ul className='list-none w-full flex justify-between sm:mt-12 sm:block'>
      <li className='my-4'>
        <a className='flex p-2 hover:bg-gray-50 rounded-lg' href='#'>
          <HomeIcon />
          <span className='ml-5 hidden sm:block font-bold'>Home</span>
        </a>
      </li>
      <li className='my-4'>
        <a className='flex p-2 hover:bg-gray-50 rounded-lg' href='#'>
          <Assets />
          <span className='ml-5 hidden sm:block text-light'>Assets</span>
        </a>
      </li>
      <li className='my-4'>
        <a className='flex p-2 hover:bg-gray-50 rounded-lg' href='#'>
          <Forum />
          <span className='ml-5 hidden sm:block text-light'>Live Trade</span>
        </a>
      </li>
      <li className='my-4'>
        <a className='flex p-2 hover:bg-gray-50 rounded-lg' href='#'>
          <LiveTrade />
          <span className='ml-5 hidden sm:block text-light'>Forum</span>
        </a>
      </li>
      <li className='my-4'>
        <a className='flex p-2 hover:bg-gray-50 rounded-lg' href='#'>
          <Settings />
          <span className='ml-5 hidden sm:block text-light'>Reports</span>
        </a>
      </li>
      <li className='my-4'>
        <a className='flex p-2 hover:bg-gray-50 rounded-lg' href='#'>
          <Reports />
          <span className='ml-5 hidden sm:block text-light'>Settings</span>
        </a>
      </li>
    </ul>
    {/* guide button */}
    <Button text='Guide' />
  </div>
);
