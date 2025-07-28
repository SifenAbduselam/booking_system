import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Site Navigation/Header */}
      <Navigation />

      {/* Main content area grows to fill available vertical space */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
