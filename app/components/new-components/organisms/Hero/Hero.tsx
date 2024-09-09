import React, { useEffect, useState } from "react";
import Title from "@/app/components/new-components/atoms/Title/Title";
import Text from "@/app/components/new-components/atoms/Text/Text";
import Button from "@/app/components/new-components/atoms/Button/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { HeroProps } from "./types/types";

const Hero: React.FC<HeroProps> = ({
  Hero, // Default to content from JSON
  variant = "primary",
}) => {
  const variantClasses = {
    primary:
      "w-full min-h-[80dvh] container mx-auto flex flex-col justify-end text-center items-center py-12 px-8 md:min-h-[70dvh] md:pb-32 md:justify-center md:text-left md:items-start md:pr-[40%] xl:pr-[50%]",
    secondary: "w-full min-h-[70dvh] container mx-auto flex flex-col justify-between py-12 px-8 md:p-8 xl:pr-[40%]",
  };

  const [backgroundClass, setBackgroundClass] = useState<string>(
    "bg-hero-banner-desktop"
  );

  useEffect(() => {
    // Update background image and color class
    const updateBackgroundClass = () => {
      if (window.innerWidth >= 1024) {
        setBackgroundClass("bg-hero-banner-desktop");
      } else if (window.innerWidth >= 768) {
        setBackgroundClass("bg-hero-banner-tablet");
      } else {
        setBackgroundClass("bg-hero-banner-mobile");
      }
    };

    // Initial check
    updateBackgroundClass();

    // Add event listener
    window.addEventListener("resize", updateBackgroundClass);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", updateBackgroundClass);
    };
  }, []);

  const styles = {
    container: `container ${variantClasses[variant]} opacity-0 animate-fade`,
    description: "text-l mt-2 hidden md:block md:text-2xl md:leading-relaxed",
    arrowIcon: "w-[18px] h-[18px]",
  };

  const currentUrl = usePathname();
 
  return (
    <section className={`w-full bg-contain bg-top bg-no-repeat text-white bg-enfold_red md:bg-center lg:bg-white lg:text-enfold_blue_dark xl:bg-right 2xl:bg-center  ${backgroundClass}`}>
      <div className={styles.container} style={{ animationDelay: "1000ms" }}>
        <Title element="h1">{Hero.banner_title}</Title>
        {Hero.banner_description && <Text className={styles.description}>{Hero.banner_description}</Text>}
        {Hero.call_to_action?.title && (
          <Button className="mt-10">
            {Hero.call_to_action?.title}{" "}
            <span className={styles.arrowIcon}>
              <ArrowRightIcon />
            </span>
          </Button>
        )}
      </div>
    </section>
  );
};

export default Hero;