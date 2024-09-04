import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-100 flex p-20 justify-between bg-hero bg-cover bg-center bg-no-repeat'>
        <div>
            <Image src='./logo.svg' alt='logo' width='80' height='80'></Image>
            <h2 className='text-5xl font-bold text-white'>
                 Explore the <span className='text-red-600 block'>Diverse Realm</span> of Anime Magic
            </h2>
        </div>
        <div>
        <Image src='/anime.png' alt='logo' width='400' height='400'></Image>

        </div>
    </div>
  )
}

export default Header