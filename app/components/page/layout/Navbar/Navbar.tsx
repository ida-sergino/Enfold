"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import DesktopLogo from '@/app/assets/logo/Enfold-logo-blue.png';
import MobileLogo from '@/app/assets/logo/Enfold-logo-white.png';
import { Bars3Icon } from '@heroicons/react/24/outline';
import MobileMenu from './MobileMenu/MobileMenu';
import useNavItems from '@/app/hooks/use/useNavItems';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [textColor, setTextColor] = useState("text-enfold_blue_dark");
  const [backgroundColor, setBackgroundColor] = useState("bg-white");
  const [logo, setLogo] = useState(DesktopLogo);
  const currentUrl = usePathname();
  const homepage = currentUrl === "/";
  const navigation = useNavItems();

  useEffect(() => {
    const handleResize = () => {
      const mobileViewport = window.innerWidth < 1024;
      setTextColor(mobileViewport ? "text-white" : "text-enfold_blue_dark");
      setBackgroundColor(mobileViewport ? "bg-enfold_red" : "bg-white");
      setLogo(mobileViewport ? MobileLogo : DesktopLogo);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the state based on the initial window size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    navigationWrapper: `w-full ${backgroundColor} ${textColor}`,
    container: `container mx-auto flex items-center justify-between p-4 md:px-0 ${homepage ? "opacity-0 animate-fade" : ""}`,
    flexContainer: `flex lg:flex-1 ${homepage ? "opacity-0 animate-fade" : ""}`,
    srOnly: "sr-only",
    navigationStyles: `hidden lg:flex lg:space-x-16 font-medium text-enfold_blue_dark opacity-0 animate-fade`,
    lgHidden: "lg:hidden",
    button: "bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 opacity-0 animate-fade",
    icon: "h-6 w-6 text-bg_enfold_dark_blue",
  };

  return (
    <header>
      <nav aria-label="Global" className={styles.navigationWrapper}>
        <div className={styles.container} style={{ animationDelay: "2820ms" }}>
          <div className={styles.flexContainer}>
            <a href="/">
              <Image src={logo} alt="Enfold Logo" width="150" className={styles.logo} />
            </a>
          </div>
          <div className={styles.navigationStyles}>
            {navigation.map((item, index) => (
              <a key={index} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
          <div className={styles.lgHidden}>
            <button
              type="button"
              className={styles.button}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Bars3Icon className={styles.icon} />
            </button>
          </div>
          {mobileMenuOpen && <MobileMenu open={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;