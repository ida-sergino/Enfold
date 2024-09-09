import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { InquiryModal } from "../../molecules/Modal/Modal";
import BgElement from "./elements/BackgroundElement";

function CallToActionBanner(component: any) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [backgroundClass, setBackgroundClass] =
    useState<string>("");

  useEffect(() => {
    // Update background image and color class
    const updateBackgroundClass = () => {
      if (window.innerWidth >= 1024) {
        setBackgroundClass("");
      } else if (window.innerWidth >= 768) {
        setBackgroundClass("bg-cta-tablet");
      } else {
        setBackgroundClass("bg-cta-mobile");
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

  // Extract the items array from the data
  const callToActionBanner = component.call_to_action_banner;

  return (
    <section>
      <div
        ref={ref}
        className={`w-full h-auto my-10 md:container md:mx-auto md:my-24 md:px-8`}
      >
        <div
          className={`${backgroundClass} bg-cover h-screen bg-no-repeat md:h-auto text-white opacity-0  ${
            inView ? "animate-fadeUp" : ""
          }`}
          style={{ animationDelay: "500ms" }}
        >
          {inView && (
            <>
              <div className="z-20 relative call-to-action-banner h-full py-20 md:px-40 flex flex-col justify-center items-stretch text-center">
                <h2 className="text-4xl font-bold">
                  {callToActionBanner.title}
                </h2>
                <p className="my-16 mx-10 text-lg leading-snug md:text-2xl md:leading-loose">
                  {callToActionBanner.text}
                </p>
                <InquiryModal />
              </div>
              <div className="z-10 bg-enfold_red absolute w-full h-full top-0 overflow-hidden flex items-center justify-center transition-transform duration-300 group">
                <BgElement
                  fill="#6C231A"
                  className="absolute transition-transform duration-300 transform translate-x-[-50%] animate-bgElementLoad"
                  style={{ left: "50%" }}
                />
                <BgElement
                  fill="#6C231A"
                  className="absolute transition-transform duration-300 transform translate-x-[-50%] animate-bgElementLoad"
                  style={{ left: "50%" }}
                />
                <BgElement
                  fill="#6C231A"
                  className="absolute transition-transform duration-300 transform translate-x-[-50%] animate-bgElementLoad"
                  style={{ left: "50%" }}
                />
                <BgElement
                  fill="#6C231A"
                  className="absolute transition-transform duration-300 transform translate-x-[-50%] animate-bgElementLoad"
                  style={{ left: "50%" }}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default CallToActionBanner;
