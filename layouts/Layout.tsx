import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import React from 'react';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='contenedor-principal'>
      <Sidebar />
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export { Layout };
