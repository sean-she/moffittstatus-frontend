import Link from 'next/link';
import React from 'react';

function NavBar() {


  return (
    <nav className='shadow-md p-8 flex justify-between items-center'>
      <div className='text-3xl font-bold'>
        <Link href={'/'}>MoffittStatus</Link>
      </div>

      <div className='space-x-4'>
        <Link href={'/status'}>Status</Link>
        <Link href={'/hours'}>Hours</Link>
      </div>
    </nav>
  );
}

export default NavBar;