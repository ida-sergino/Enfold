import React from 'react';
import './Case.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Text from '../../atoms/Text/Text';
import { CaseProps } from './types/types';

const CaseStyle = "w-full aspect-square flex flex-col justify-between bg-enfold_blue-dark text-white p-6";

const Case: React.FC<CaseProps> = ({ title, category, description, image }) => {
  console.log({ title, category, description, image }); // Log props to inspect them

  return (
    <div className={`${CaseStyle}`} style={{ backgroundImage: `url(${image})` }}>
      <div className="w-fit text-enfold_orange py-3 pl-10 pr-12 text-xs cut-corner">
       <span className='font-semibold'>{category}</span> /  <span className='font-medium'> {title}</span>
      </div>
      <div className="w-full">
        <Text>{description}</Text>
        <div className="w-fit px-4 py-1 text-enfold_orange float-right cut-corner">
          <ArrowRightIcon className="w-7" />
        </div>
      </div>
    </div>
  );
};

export default Case;