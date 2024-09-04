import React from 'react'

const AllCards = ({data}:any) => {
  return (
    <section className="grid grid-cols-5 gap-4 mt-5">
    {
     data
    }
     
  </section>
  )
}

export default AllCards