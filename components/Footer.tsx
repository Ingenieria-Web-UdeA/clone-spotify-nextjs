import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <Link href='/daniel'>Ir a Daniel</Link>
        <span>Companies</span>
        <span>Communities</span>
        <span>Useful links</span>
      </div>
      <div>
        <span>IG</span>
        <span>TW</span>
        <span>FB</span>
      </div>
    </footer>
  );
};

export { Footer };
