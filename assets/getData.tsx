'use server'

import Card from "@/components/card"
import { AnimeProp } from "./dummy"

export const fetchData=async(page:number)=>{
   const res=await fetch(`https://shikimori.one/api/animes?page=${page}&limit=10&orderby=popularity`)
   const data=await res.json()
   return data.map((item:AnimeProp,index:number)=>(
      <Card key={item.id} data={item} index={index}/>
    ))
   
}