import dynamic from 'next/dynamic';
import React from 'react';
import Projects from '../components/Projects';
import EmailSection from '../components/EmailSection';
import Footer from '../components/Footer';

//Server: not found error handler
const HeroSection = dynamic(
  () => import('../components/HeroSection'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
        <main>
        <HeroSection />
        <Projects />
        <EmailSection />
        </main>
        <Footer />
    </div>
  );
}

