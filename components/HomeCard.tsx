import { CardDetails } from '@/types'
import Image from 'next/image'
import React from 'react'

type HomeCardProps = {
  content: CardDetails
}

const HomeCard: React.FC<HomeCardProps> = ({
  content
}) => {
  return <>
    {(content.title || content.image) &&
      <div className="md:my-0 mb-8 mt-15" >
        {content.image && (
          <Image
            alt="user-image"
            src={content.image}
            width="500"
            height="500"
            className=" mr-2 mb-10 mt-5"
          />
        )}
        <h1 className="font-bold text-[1.5rem] lg:leading-[0.75rem] text-white mb-3 uppercase mt-5">
          {content.title}
        </h1>
        <p className="leading-8 text-[#FFFFFF] opacity-70">{content.description}</p>
        <div className="mt-5">
          {content.icon && (
            <Image
              alt="server-icon"
              src={content.icon}
              width="20"
              height="20"
              className=" mr-2"
            />
          )}
        </div>
      </div>}
  </>

}

export default HomeCard