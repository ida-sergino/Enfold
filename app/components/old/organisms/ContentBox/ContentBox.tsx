import React from 'react';
import './ContentBox.css';
import Title from '@/app/components/new-components/atoms/Title/Title';
import Text from '@/app/components/new-components/atoms/Text/Text';
import Link from "next/link";
import { useInView } from 'react-intersection-observer';

type AdditionalParam = {
  title: string;
  title_h2: string;
  title_h3: string;
  description: string;
  html_code: string;
  designation: string;
  name: string;
}

type SectionProps = {
  section: [
    {
      title_h2: string;
      description: string;
      call_to_action: {
        __typename: string;
        href: string;
        title: string;
      };
      imageConnection?: [{
        edges: [
          {
            node: {
              content_type: string;
              description: string;
              file_size: string;
              filename: string;
              metadata: string;
              permanent_url: string;
              title: string;
              unique_identifier: string;
              url: string;
            };
          }
        ];
      }];
      image_alignment: string;
      aspectRatio: string;
      $?: AdditionalParam;
    }
  ];
};



const Section: React.FC<SectionProps> = ({
  ContentBox,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const image = ContentBox.imageConnection?.edges[0]?.node;

  if (!ContentBox.title_h2 && !ContentBox.description && !ContentBox.call_to_action) {
    return null; // or provide a fallback UI
  }

  function contentSection(key: any) {
    return (
      <div className={`content-wrapper ${ContentBox.image_alignment == 'Left' ? 'text-right' : 'text-left'} md:w-2/4 md:pr-20`} key={key}>
        {ContentBox.title_h2 && <Title element="h2">{ ContentBox.title_h2}</Title>}
        {ContentBox.description && <Text>{ContentBox.description}</Text>}
        {ContentBox.call_to_action && (
          <Link href={ContentBox.call_to_action.href}>
            {ContentBox.call_to_action.title}
          </Link>
        )}
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
        className="aspect-[16/10] w-2/4 rounded-xl"
        style={{ objectFit: "cover" }}
        alt={image.filename}
        key={key}
      />
    );
  }

  return (
    <section className="container mx-auto py-24 md:py-8">
      <div ref={ref} className="content-box">
      {ContentBox.image_alignment === 'Left'
        ? [imageContent('key-image'), contentSection('key-contentsection')]
        : [contentSection('key-contentsection'), imageContent('key-image')]}
      </div>
    </section>
  );
}

export default Section;