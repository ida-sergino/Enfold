import React, { useEffect, useState } from "react";
import Title from "@/app/components/new-components/atoms/Title/Title";
import Text from "@/app/components/new-components/atoms/Text/Text";
import desktopImage from "@/app/assets/banner/desktop.png";
import mobileImage from "@/app/assets/banner/mobile.png";
import tabletImage from "@/app/assets/banner/tablet.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

type BannerProps = {
  hero_banner: {
    banner_title?: string;
    banner_description?: string;
    backgroundImage?: string;
    call_to_action?: {
      title?: string;
      href?: string;
    };
  };
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "image";
};

const Banner: React.FC<BannerProps> = ({
  hero_banner,
  variant = "primary",
}) => {
  const variantClasses = {
    primary:
      "w-full min-h-[70dvh] flex flex-col pl-6 pr-28 pt-8 pb-24 text-white opacity-0 md:justify-start md:text-center; md:w-[60%] md:min-h-[40dvh] md:pt-16 md:pb-24 md:pl-16 md:pr-4 lg:min-h-[60dvh] lg:w-[60%] lg:container lg:pt-20 lg:pr-20 lg:pb-40 lg:pl-32 xl:w-2/4 xl:pt-20 xl:pr-20 xl:pb-40 xl:pl-20",
    secondary: "bg-gray-600 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-400 text-black",
    info: "bg-teal-500 text-white",
    light: "bg-gray-100 text-black",
    dark: "bg-gray-800 text-white",
    image: "text-white",
  };

  const [backgroundImage, setBackgroundImage] = useState<string>(
    desktopImage.src
  );

  useEffect(() => {
    // Update background image
    const updateBackgroundImage = () => {
      if (window.innerWidth >= 1024) {
        setBackgroundImage(desktopImage.src);
      } else if (window.innerWidth >= 768) {
        setBackgroundImage(tabletImage.src);
      } else {
        setBackgroundImage(mobileImage.src);
      }
    };

    // Initial check
    updateBackgroundImage();

    // Add event listener
    window.addEventListener("resize", updateBackgroundImage);



  }, []);

  const bannerStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }
    : {};

    const currentUrl = usePathname();
    const homepage = currentUrl === '/';

      // Function to scroll to a section
      function scrollToSection(id: string): void {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

  return (
    <>
    <section className="w-full">
      <div className="banner bg-enfold_orange px-2 opacity-0 animate-fade" style={bannerStyle}>
        <div className={`container ${variantClasses[variant]} animate-fade`} style={{ animationDelay: "1000ms" }}>
          <Title element="h1">{hero_banner.banner_title}</Title>
          {hero_banner.banner_description && <Text className="text-l mt-2 hidden md:block md:text-2xl md:leading-relaxed">{hero_banner.banner_description}</Text>}
          {hero_banner.call_to_action?.title && (
            <button
              // href={hero_banner.call_to_action?.href}
              onClick={(e: any) => { 
                e.preventDefault(); 
                scrollToSection("section-6");
              }}
              className="transition ease-in-out delay-150 bg-primary text-black hover:scale-105 rounded-xl h-10 px-4 py-2 w-full max-w-[200px] flex justify-around font-medium mt-auto md:mt-12"
            >
              {hero_banner.call_to_action?.title}{" "}
              <span className="w-[24px] h-[24px]">
                <ArrowRightIcon />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Banner;
