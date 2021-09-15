import Image from 'next/image';

export const Main = () => (
  <div className='bg-white px-4 mainWidth sm:px-0 sm:px-8 sm:py-10 sm:ml-64'>
    {/* Top */}
    <p className='w-full hidden sm:block text-light text-sm sm:mb-6'>
      Dashboard &gt; Home
    </p>
    {/* Card Container 1 */}
    <div className='hidden sm:flex justify-between align-bottom my-10'>
      <h1 className='text-2xl font-bold uppercase'>Assets</h1>
      <p className='text-md mt-2 font-medium'>More Assets &#8594;</p>
    </div>
    <div className='flex mt-4 sm:mt-0 overflow-x-scroll w-full no-scrollbar'>
      <div className='mr-12 mb-12'>
        <p className='font-medium text-lg'>Bitcoin</p>
        <hr className='w-4 border-2 rounded mt-1 border-secondary' />
        <div className='bg-gradient-to-br from-light to-secondary flex flex-col text-white w-72 h-44 p-4 rounded-lg mt-5 shadow-2xl'>
          <div className='flex justify-between align-bottom'>
            <div>
              <div className='text-2xl'>$</div>
              <p className='text-4xl font-medium'>1,820</p>
            </div>
            <div>
              <Image
                src='/graph.png'
                alt='graph'
                width='120'
                height='80'
                className='w-4 h-2'
              />
            </div>
          </div>
          <div className='flex justify-between mt-auto'>
            <div className='flex flex-col'>
              <span>Profit</span>
              <span className='text-red-400'>+ 2,87%</span>
            </div>
            <div className='flex flex-col'>
              <span>Loss</span>
              <span className='text-green-400'>- 0,17%</span>
            </div>
            <div className='flex flex-col'>
              <span>Neutral</span>
              <span className='text-gray-300'>2,70%</span>
            </div>
          </div>
        </div>
      </div>

      <div className='mr-12 mb-12'>
        <p className='font-medium text-lg'>Ethereum</p>
        <hr className='w-4 border-2 rounded mt-1 border-secondary' />
        <div className='bg-gradient-to-br from-light to-secondary flex flex-col text-white w-72 h-44 p-4 rounded-lg mt-5 shadow-2xl'>
          <div className='flex justify-between align-bottom'>
            <div>
              <div className='text-2xl'>$</div>
              <p className='text-4xl font-medium'>1,100</p>
            </div>
            <div>
              <Image
                src='/graph.png'
                alt='graph'
                width='120'
                height='80'
                className='w-4 h-2'
              />
            </div>
          </div>
          <div className='flex justify-between mt-auto'>
            <div className='flex flex-col'>
              <span>Profit</span>
              <span className='text-red-400'>+ 2,87%</span>
            </div>
            <div className='flex flex-col'>
              <span>Loss</span>
              <span className='text-green-400'>- 0,17%</span>
            </div>
            <div className='flex flex-col'>
              <span>Neutral</span>
              <span className='text-gray-300'>2,70%</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='border-4 border-gray-600 flex flex-col justify-center items-center text-white w-72 p-4 h-44 rounded-lg mt-14'>
          <div>
            <Image src='/plus.png' alt='icon' width='40' height='40' />
          </div>
          <p className='text-black text-xl font-medium'>New Assets</p>
        </div>
      </div>
    </div>

    {/* Table */}
    <div className='hidden sm:flex sm:justify-between sm:align-bottom mt-2 mb-10'>
      <h1 className='text-2xl font-bold uppercase'>Activity</h1>
      <p className='text-md mt-2 font-medium'>More Activity &#8594;</p>
    </div>
    <table className='w-full rounded-xl text-left sm:text-right text-white bg-gradient-to-br from-secondary to-secondary'>
      <thead className='border-b-2 border-white'>
        <th className='pb-4 pt-6 pl-4 sm:pl-6 w:4/12 sm:w-3/12 text-left'>
          Transactions
        </th>
        <th className='w:4/12 sm:w-2/12'>Amount</th>
        <th className='w:4/12 sm:w-2/12'>Total</th>
        <th className='hidden sm:table-cell sm:w-2/12'>Status</th>
        <th className='hidden sm:table-cell p-4 sm:w-3/12'>Date</th>
      </thead>
      <tr>
        <td className='text-left pt-4 pb-2 pl-4 pr-1 sm:pl-6 flex items-center'>
          <Image src='/eth.png' alt='ethereum img' width='40' height='40' />
          <p className='ml-4'>Ethereum Purchased</p>
        </td>
        <td className='p-1 sm:p-0'>0.0154 ETH</td>
        <td className='pr-2 sm:pr-0'>USD $10</td>
        <td className='hidden sm:table-cell'>Pending</td>
        <td className='hidden py-2 pr-6 sm:table-cell'>February 21, 2021</td>
      </tr>
      <tr>
        <td className='text-left py-2 pl-4 sm:pl-6 flex items-center'>
          <Image src='/bitcoin.png' alt='bitcoin img' width='40' height='40' />
          <p className='ml-4'>Bitcoin Purchased</p>
        </td>
        <td className='p-1 sm:p-0'>0.3 BTC</td>
        <td className='pr-2 sm:pr-0'>USD $140</td>
        <td className='hidden sm:table-cell'>Done</td>
        <td className='py-2 pr-6 hidden sm:table-cell'>February 14, 2021</td>
      </tr>
      <tr>
        <td className='text-left pt-2 pb-6 pl-4 sm:pl-6 flex items-center'>
          <Image src='/bitcoin.png' alt='bitcoin img' width='40' height='40' />
          <p className='ml-4'>Bitcoin Purchased</p>
        </td>
        <td className='p-1 sm:p-0'>0.0025 BTC</td>
        <td className='pr-2 sm:pr-0'>USD $56</td>
        <td className='hidden sm:table-cell'>Done</td>
        <td className='py-2 pr-6 hidden sm:table-cell'>January 14, 2021</td>
      </tr>
    </table>

    {/* Bottom Section */}
    <div className='flex justify-between mt-8 mx-4 mb-24 sm:mb-0'>
      <div>
        <p className='text-sm sm:text-lg font-bold mb-2'>Cryptocoin</p>
        <p className='text-xs'>Bitcoin (BTC)</p>
      </div>
      <div>
        <p className='text-sm sm:text-lg font-bold mb-2'>Updated</p>
        <p className='text-xs'>1 month ago</p>
      </div>
      <div>
        <p className='text-sm sm:text-lg font-bold mb-2'>Change</p>
        <p className='text-xs'>&darr; 2.64%</p>
      </div>
      <div>
        <p className='text-sm sm:text-lg font-bold mb-2'>Price</p>
        <p className='text-xs'>USD $12,718</p>
      </div>
    </div>
  </div>
);
