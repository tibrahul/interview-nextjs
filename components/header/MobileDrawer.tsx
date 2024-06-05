import { AppImage } from '@/assets/images'
import Image from 'next/image'
import React from 'react';
import NavBarLogo from './NavBarLogo';

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`bg-black fixed z-10 top-0 right-0 h-full w-full text-black transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <NavBarLogo title='Menu' imageType='close' onClickHandler={onClose} />

      <ul className="flex flex-col justify-center items-center space-y-4">
        {/* <li className="text-3xl hover:text-blue-900 hover:font-semibold">
          <span>Home</span>
        </li> */}
      </ul>
    </div>
  );
}

export default MobileDrawer