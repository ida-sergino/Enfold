import React from 'react'
import './Case.css'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Text from '../../atoms/Text/Text'

const CaseStyle = "w-full aspect-square flex flex-col justify-between bg-enfold_red text-white p-6"

function Case() {
  return (
    <div className={`${CaseStyle}`}>
      <div className="w-fit text-enfold_orange py-3 pl-6 pr-7 font-semibold cut-corner"> / </div>
      <div className='w-full'>
          <Text>Description</Text>
        {/* <div className='w-fit px-4 py-1 text-enfold_orange float-right cut-corner'><ArrowRightIcon className='w-7' /></div> */}
      </div>
    </div>
  )
}

export default Case
