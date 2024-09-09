"use client";

import useFooterNavItems from "@/app/hooks/use/useFooterNavItems";
import useNavItems from "@/app/hooks/use/useNavItems";
import Menu from "@/app/components/new-components/molecules/Menu/Menu";
import { SetStateAction } from "react";
import { usePathname } from "next/navigation";
import FooterLogo from '@/app/assets/logo/Enfold-logo-white.png';

function Footer() {
  const NavbarNavigation = useNavItems();
  const FooterNavigation = useFooterNavItems();
  const currentUrl = usePathname();
  const homepage = currentUrl === "/";

  const footerStyles =
  `w-full h-auto px-8 py-8 bg-white border-t border-[#e3e3e3] md:flex md:items-center md:justify-between ${homepage ? "opacity-0 animate-fade" : ""}`;
const spanStyles = "text-md text-gray-400 text-center dark:text-gray-400 text-white";
const linkStyles = "hover:underline";
const menuContainerStyles = "hidden sm:flex sm:text-md gap-6 font-medium";

  return (
    <footer>
        <div className="h-48 p-8 flex flex-col justify-between bg-enfold_blue-dark text-white md:h-80"> 
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <div>
          <img src={FooterLogo.src} width="150"/>
          <h4 className="pt-1 px-1"> Start your Headless CMS journey</h4>
          </div>
          <div className="hidden md:flex md:gap-10 justify-end">
          <Menu
              navigation={NavbarNavigation}
              open={false}
              setMobileMenuOpen={(value: SetStateAction<boolean>) => {}}
            />
          </div>
        </div>
        <div className="container mx-auto px-1 grid grid-cols-2">
          <div className="text-[12px]">
          <span>
            © Enfold 2024
          </span>
          </div>
          <div className="text-[12px] flex gap-4 justify-end">
          <Menu
              navigation={FooterNavigation}
              open={false}
              setMobileMenuOpen={(value: SetStateAction<boolean>) => {}}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;