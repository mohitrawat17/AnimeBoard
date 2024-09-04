'use server'

export const fetchData=async(page:number)=>{
   const res=await fetch(`https://shikimori.one/api/animes?page=${page}&limit=10&orderby=popularity`)
   const data=await res.json()
   console.log(data);
   return data
   
}