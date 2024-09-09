"use client";
import React from 'react';
import { TextGenerateEffect } from "@/app/components/utils/TextGenerateEffect";
import { useInView } from 'react-intersection-observer';

function Quote(component: any) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quoteText = component?.quote?.quote;

  if (!quoteText) {
    return <p>No quote available.</p>;
  }

  return (
    <section ref={ref} className="container mx-auto pb-12 px-10 mt-2 md:px-0 md:pb-40 md:pt-6">
      <h2 className="font-bold text-center">
        {inView && <TextGenerateEffect duration={0.5} filter={false} words={quoteText} />}
      </h2>
    </section>
  );
}

export default Quote;