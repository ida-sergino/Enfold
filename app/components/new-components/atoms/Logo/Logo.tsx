import React from 'react'
import logoImage from '@/app/assets/logo/Enfold-logo-white.png';
import Image from 'next/image';

function logo(className: string) {
  return (
  <div role="img" aria-label="Enfold logo">
    <span className="sr-only">Enfold</span>
    <Image className={className} src={logoImage} alt="Enfold logo" />
  </div>
  )
}

export default logo
