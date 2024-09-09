import React from 'react';
import './SplashScreen.css';
import Logo from '@/app/assets/logo/Enfold-logo-white.png';
import Image from 'next/image';

const SplashScreen = () => {
  return (
    <div className="splash-screen h-[100dvh] flex items-center justify-center bg-enfold_red lg:bg-enfold_blue-dark">
      <div className="text-6xl font-bold text-center text-white opacity-0 animate-fade" style={{ animationDelay: '500ms' }}>
        <Image src={Logo} width="300" alt="Enfold logo in splashscreen" />
      </div>
    </div>
  );
};

export default SplashScreen;