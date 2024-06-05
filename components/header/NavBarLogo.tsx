import { AppImage } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

type NavBarLogoProps = {
  title: string;
  imageType: 'close' | 'menu';
  onClickHandler: () => void
}

const NavBarLogo: React.FC<NavBarLogoProps> = ({
  title,
  imageType,
  onClickHandler
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src={AppImage.logo} className="h-8" alt="menu" width={30} height={18} />
        <span className="px-2 text-[1rem] text-white font-semibold">{title}</span>
      </a>
      <button className="inline-flex bg-transparent items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" onClick={onClickHandler}>
        <Image src={imageType === "close" ? AppImage.closeIcon : AppImage.menu} alt="menu" width={30} height={18} />
      </button>
    </div>
  )
}

export default NavBarLogo