import { Navbar } from '../components/Navbar/Navbar';
import { Account } from '../components/Account/Account';
import { Main } from '../components/Main/Main';

export default function Home() {
  return (
    <div className='flex font-sans flex-col-reverse min-h-screen sm:flex-row overflow-x-hidden'>
      {/* navigation */}
      <Navbar />
      {/* main */}
      <Main />
      {/* account */}
      <Account />
    </div>
  );
}
