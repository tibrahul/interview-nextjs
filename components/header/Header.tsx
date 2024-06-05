import { AppImage } from '@/assets/images'
import Image from 'next/image'
import React, { useState } from 'react'
import MobileDrawer from './MobileDrawer'
import NavBarLogo from './NavBarLogo'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <header className="bg-black border-gray-200">
      <NavBarLogo title='Lorem' imageType='menu' onClickHandler={() => setShowMobileMenu(true)} />
      <MobileDrawer isOpen={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
    </header>
  )
}

export default Header