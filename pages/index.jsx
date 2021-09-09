import { Logo } from '../public/svg/logo';
import { HomeIcon } from '../public/svg/HomeIcon';
import { Assets } from '../public/svg/Assets';
import { LiveTrade } from '../public/svg/LiveTrade';
import { Forum } from '../public/svg/Forum';
import { Reports } from '../public/svg/Reports';
import { Settings } from '../public/svg/Settings';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex font-sans flex-col-reverse min-h-screen sm:flex-row'>
      {/* navigation */}
      <div className='bg-secondary fixed bottom-0 sm:static sm:bg-primary flex w-full sm:w-64 sm:flex-col py-2 px-4 sm:px-8 sm:py-10'>
        {/* logo */}
        <div className='hidden sm:flex'>
          <Logo />
          <h1 className='ml-4 text-lg'>
            Crypto<strong>Board</strong>
          </h1>
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
              <span className='ml-5 hidden sm:block text-light'>
                Live Trade
              </span>
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
        <button className='hidden sm:block w-full mt-auto py-3 bg-secondary text-white rounded-lg'>
          Guide
        </button>
      </div>
      {/* main */}
      <div className='bg-white flex-grow sm:px-8 sm:py-10'>main</div>
      {/* account */}
      <div className='border-b flex flex-col bg-primary sm:bg-white items-center sm:border-l w-full sm:w-64 sm:px-8 sm:py-10'>
        {/* profile */}
        <div className='sm:hidden absolute top-8 left-4'>
          <Reports dark={true} large={true} />
        </div>
        <div className='flex sm:hidden absolute top-8 left-1/2 transform -translate-x-1/2'>
          <Logo />
          <h1 className='ml-2 text-lg'>
            Crypto<strong>Board</strong>
          </h1>
        </div>
        <div className='flex flex-col items-center self-end sm:self-center'>
          <h2 className='text-xl font-bold mb-4 hidden sm:block'>
            Trader Profile
          </h2>
          <div className='w-12 mr-4 my-5 mt sm:w-36 h-auto self-end sm:mb-4'>
            <Image
              src='/man-avatar.png'
              alt='profile image'
              width='120'
              height='120'
              layout='responsive'
            />
          </div>
          <h3 className='font-bold hidden sm:block text-lg'>Kevin Richard</h3>
          <p className='text-base hidden sm:block font-medium my-2'>
            Edit Profile
          </p>
        </div>
        {/* stats */}
        <div className='w-full border-b px-4 sm:px-0'>
          <h3 className='font-bold sm:text-xl text-lg my-1 sm:my-4'>Account</h3>
          <div className='flex text-sm sm:text-base justify-between sm:my-1 my-2 text-dark font-semibold'>
            Joined <p className='font-normal'>June 22, 2021</p>
          </div>
          <div className='flex text-sm sm:text-base justify-between mt-1 sm:mt-2 mb-7 sm:mb-8 text-dark font-semibold'>
            Assets Total <p className='font-normal'>$ 1,312,900</p>
          </div>
        </div>
        {/* assets info */}
        <div className='w-full hidden sm:block'>
          <h3 className='font-bold text-xl mb-4 mt-8'>Assets</h3>
          <ul>
            <li className='flex justify-between my-2'>
              <p className='text-light'>Bitcoin</p>
              <p className='text-dark font-semibold'>
                23.5 <span className='font-semibold text-light'>BTC</span>
              </p>
            </li>
            <li className='flex justify-between my-2'>
              <p className='text-light'>Ethereum</p>
              <p className='text-dark font-semibold'>
                190.45 <span className='font-semibold text-light'>ETH</span>
              </p>
            </li>
            <li className='flex justify-between my-2'>
              <p className='text-light'>Doge</p>
              <p className='text-dark font-semibold'>
                293,500 <span className='font-semibold text-light'>DOGE</span>
              </p>
            </li>
            <li className='flex justify-between my-2'>
              <p className='text-light'>Ripple</p>
              <p className='text-dark font-semibold'>
                65,100 <span className='font-semibold text-light'>XRP</span>
              </p>
            </li>
          </ul>
          <p className='my-4 font-semibold'>More Assets ...</p>
        </div>
      </div>
    </div>
  );
}
