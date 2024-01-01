import { Sora } from 'next/font/google'

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sore',
})

import Nav from './Nav';
import Header from './Header';
import TopLeftImg from './TopLeftImg';

const Layout = ({children }: { children: React.ReactNode }) => {
  return <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
    <TopLeftImg />
    <Nav />
    <Header />
    {children}
  </div>;
};

export default Layout;
