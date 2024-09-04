import { AnimeProp } from '@/assets/dummy'
import React from 'react'
import Card from './card'

const AllCards = ({data}:any) => {
  return (
    <section className="grid grid-cols-5 gap-4 mt-5">
    {
     data.map((item:AnimeProp)=>(
       <Card key={item.id} data={item}/>
     ))
    }
     
  </section>
  )
}

export default AllCards