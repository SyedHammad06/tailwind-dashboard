import Image from 'next/image';
import { Reports } from '../../public/svg/Reports';
import { Button } from '../UI/Button';
import { logoHeader as LogoHeader } from '../UI/LogoHeader';

export const Account = () => (
  <div className='border-b sm:fixed sm:right-0 sm:h-screen flex flex-col bg-primary sm:bg-white items-center sm:border-l w-full sm:w-60 md:w-64 sm:px-8 sm:py-10'>
    {/* profile */}
    <div className='sm:hidden absolute top-8 left-4'>
      <Reports dark={true} large={true} />
    </div>
    <div className='flex sm:hidden absolute top-8 left-1/2 transform -translate-x-1/2'>
      <LogoHeader />
    </div>
    <div className='flex flex-col items-center self-end sm:self-center'>
      <h2 className='text-xl font-bold mb-4 hidden sm:block'>Trader Profile</h2>
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
      <p className='text-base hidden sm:block font-medium my-2'>Edit Profile</p>
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
      <p className='mt-4 mb-6 font-semibold'>More Assets ...</p>
      <Button text='Trade Now' />
    </div>
  </div>
);
