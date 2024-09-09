import React from 'react';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import Title from '@/app/components/new-components/atoms/Title/Title';
import Text from '@/app/components/new-components/atoms/Text/Text';
import { ContentBoxProps } from './types/types';

const Section: React.FC<ContentBoxProps> = ({ ContentBox }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const image = ContentBox.imageConnection?.edges[0]?.node;

  if (!ContentBox.title_h2 && !ContentBox.description && !ContentBox.call_to_action) {
    return null; 
  }

  const contentBoxClass = `bg-contentbox bg-cover bg-no-repeat bg-left bg-center container mx-auto px-8 my-8 md:pl-0 md:my-24 flex flex-wrap justify-between md:flex-nowrap text-left ${
    ContentBox.image_alignment === 'Left' ? 'flex-row' : 'flex-row-reverse'
  }`;
  const contentWrapperClass = `md:mt-20 ${ContentBox.image_alignment === 'Left' ? 'md:pl-20 md:pr-12 md:max-w-[600px]' : 'md:pr-20 md:pl-12 lg:pl-20 md:max-w-[600px]'}`;


  function contentSection(key: any) {
    return (
      <div className={contentWrapperClass} key={key}>
        {ContentBox.title_h2 && <Title element="h2">{ContentBox.title_h2}</Title>}
        {ContentBox.description && <Text>{ContentBox.description}</Text>}
      </div>
    );
  }

  function imageContent(key: any) {
    if (!image) {
      return null; // Return null if image is undefined
    }
    return (
      <img
        {...(image.$?.url as {})}
        src={image.url}
        className="aspect-[1/1] md:mt-0 md:w-2/4 lg:max-w-[390px] xl:max-w-[500px] 2xl:max-w-[600px] rounded-xl"
        key={key}
      />
    );
  }

  return (
    <section>
        <div ref={ref} className={`w-full h-auto my-10 md:container md:mx-auto md:my-24 md:px-8`}>
      <div className={contentBoxClass} ref={ref}>
        {ContentBox.image_alignment === 'Left' ? (
          <>
            {imageContent(1)}
            {contentSection(2)}
          </>
        ) : (
          <>
            {contentSection(1)}
            {imageContent(2)}
          </>
        )}
      </div>
      </div>
    </section>
  );
};

export default Section;