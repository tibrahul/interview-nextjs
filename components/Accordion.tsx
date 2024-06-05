import { AppImage } from '@/assets/images'
import Image from 'next/image'
import React, { useState } from 'react'

const Accordion = () => {
  const [selected, setSelected] = useState<number>(0);
  return (
    [1, 2, 3, 4, 5].map((_, index) => (
      <section key={index} onClick={() => setSelected(index)}>
        <article className="rounded p-2 pb-2 ">
          <div className="relative h-[45px] cursor-pointer" >
            {selected === index && <Image src={AppImage.bg} alt="background-image" layout="fill" />}
            <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
              <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem] font-medium">
                Lorem ipsum dolor sit amet
              </p>
              <button className="text-left text-white font-semibold focus:outline-none">
                <span className='text-2xl'>{selected === index ? " - " : "+"}</span>
                {/* <Image alt="plus-icon" src={tab === index ? Icon.plus : Icon.minus} /> */}
              </button>
            </div>
          </div>

          {selected === index && <p className="container mx-auto max-w-[1237px] px-5  leading-7 mt-5 text-[#a1a1a1]">
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          </p>}
        </article>
      </section>))
  )
}

export default Accordion