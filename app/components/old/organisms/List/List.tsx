"use client";

import React, { useRef, useState, createContext, useContext, useEffect } from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import { useOutsideClick } from "@/app/hooks/use/use-outside-click";

interface CardContent {
  __typename: string;
  title?: {
    title: string;
  };
  text?: {
    description: string;
  };
  image?: {
    alt: string;
    height: number;
    width: number;
    srcConnection: {
      edges: {
        node: {
          url: string;
        };
      }[];
    };
  };
}

interface Card {
  category: string;
  title: string;
  content: CardContent[];
  imageConnection: {
    edges: {
      node: {
        url: string;
      };
    }[];
  };
}

interface ListProps {
  list: {
    cards: { card: Card }[];
    header: string;
  };
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

const List: React.FC<ListProps> = ({ list }) => {
  const { cards = [], header } = list || {};
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { onCardClose } = useContext(CarouselContext);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useOutsideClick(carouselRef, () => onCardClose(currentIndex));

  const transformData = (data) => {
    return data.cards.map((cardWrapper) => {
      const card = cardWrapper.card;
      return {
        category: card.category,
        title: card.title,
        src: card.imageConnection?.edges[0]?.node.url,
        content: (
          <>
            {card.content.map((contentItem, index) => {
              switch (contentItem.__typename) {
                case "PagePageComponentsListBlockCardsCardBlockContentTitle":
                  return (
                    <p key={index} className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                      {contentItem.title?.title}
                    </p>
                  );
                case "PagePageComponentsListBlockCardsCardBlockContentText":
                  return (
                    <p key={index} className="text-base">
                      {contentItem.text?.description}
                    </p>
                  );
                case "PagePageComponentsListBlockCardsCardBlockContentImage":
                  return (
                    <Image
                      key={index}
                      src={contentItem.image?.srcConnection.edges[0].node.url}
                      alt={contentItem.image?.alt}
                      height={contentItem.image?.height}
                      width={contentItem.image?.width}
                      className="my-4"
                    />
                  );
                default:
                  return null;
              }
            })}
          </>
        ),
      };
    });
  };

  const transformedCards = transformData({ cards });

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 768 ? 230 : 384; // (md:w-96)
      const gap = window.innerWidth < 768 ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <section ref={ref} className={`container mx-auto h-full pt-12 pb-12 pl-8 opacity-0 md:pl-0 ${inView ? 'animate-fade':''}`} style={{ animationDelay: "500ms" }}>
        <div className="flex justify-between">
        <Title className="max-w-7xl pl-0 font-bold text-neutral-800 md:pl-4 dark:text-neutral-200 text-left color-enfold_red">
          {header}
        </Title>
        <div className="flex justify-end gap-2 mr-10">
            <button
              className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
              onClick={() => carouselRef.current.scrollBy({ left: -384, behavior: "smooth" })}
              disabled={currentIndex === 0}
            >
              <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
            </button>
            <button
              className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
              onClick={() => carouselRef.current.scrollBy({ left: 384, behavior: "smooth" })}
              disabled={currentIndex === transformedCards.length - 1}
            >
              <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>
        <div className="relative w-full">
          <div
            className="flex w-full overflow-x-scroll overscroll-x-auto py-4 md:py-12 scroll-smooth [scrollbar-width:none] snap-x snap-mandatory"
            ref={carouselRef}
            onScroll={() => {
              const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
              setCurrentIndex(scrollLeft > 0 ? 1 : 0);
            }}
          >
            <div className="absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"></div>
            <div className="flex flex-row justify-start gap-4 max-w-7xl">
              {transformedCards.map((card, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut" } }}
                  key={"card" + index}
                  className="last:pr-[5%] md:last:pr-[5%] rounded-3xl snap-always snap-center"
                >
                  <Card card={card} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </CarouselContext.Provider>
  );
};

const Card = ({ card, index }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
    const header = document.querySelector('header');
    if (header) {
      header.classList.add('modal-open'); // Add class to header to hide navbar
    }
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
    const header = document.querySelector('header');
    if (header) {
      header.classList.remove('modal-open'); // Remove class from header to show navbar
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed z-50 inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed z-[1000] inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className="max-w-5xl mx-auto mx-4 bg-white dark:bg-neutral-900 h-fit z-[1010] my-10 p-6 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <p className="text-base font-medium text-black">{card.category}</p>
              <p className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4">{card.title}</p>
              <div className="flex flex-col items-center bg-[#F5F5F7] mt-10 p-8 md:p-14 rounded-3xl mb-4">
              {card.content}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={handleOpen}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[30rem] w-72 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-8">
          <p className="text-white text-sm md:text-base font-medium font-sans text-left">{card.category}</p>
          <p className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
            {card.title}
          </p>
        </div>
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
    </>
  );
};

export default List;