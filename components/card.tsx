import { AnimeProp } from '@/assets/dummy';
import Image from 'next/image';
import React from 'react'
import { MotionDiv } from './MotionDiv'


interface Prop {
  data: AnimeProp;
  index:number
}


const Card = ({data,index}:Prop) => {




  return (
    <MotionDiv
    initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5,delay:index*0.25,ease:'easeOut' }}
    className='text-white'>
      <Image 
      src={`https://shikimori.one/${data?.image?.original}`} alt='thumbnail' width='150' height='150' className='w-full h-80 rounded-xl'></Image>
      <div className='p-2 flex justify-between'>
      <h4>{data?.name} ({data?.score})</h4>
      <h4 className='bg-red-600 p-1 max-h-8 items-center'>{data?.kind}</h4>
      </div>
      <h4></h4>
    </MotionDiv>
  )
}

export default Card