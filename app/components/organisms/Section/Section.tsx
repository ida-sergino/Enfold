import React from 'react';
import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

interface SectionProps {
  section: {
    bg_color: string;
    modular_blocks: {
      title: any[];
      text: any[];
      button: any[];
    }[];
  };
}

function Section({ section }: SectionProps) {
  return (
    <section className="container mx-auto p-8" style={{ backgroundColor: section.bg_color }}>
      <div className='md:w-[60%]'> 
      {section.modular_blocks?.map((block: any, index: number) => {
        if (block.title) {
          return <Title key={index} element='h2'>{block.title.text}</Title>;
        } else if (block.text) {
          return <Text key={index} className='text-l leading-relaxed text-[#525252] text-[1.5rem] leading-[2.2rem]'>{block.text.text}</Text>;
        } else if (block.button) {
          return <Button key={index} {...block.button}> {block.button.title} </Button>;
        } else {
          return null;
        }
      })}
      </div>
    </section>
  );
}

export default Section;