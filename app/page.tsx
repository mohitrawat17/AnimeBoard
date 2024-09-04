import Card from "@/components/card";
import { AnimeProp, data } from "@/assets/dummy";
import Loader from "@/components/loader";
import { fetchData } from "@/assets/getData";
import AllCards from "@/components/allCards";
export default async function Home() {
  const data=await fetchData(1)
  return (
    <main className="p-8">
     <h2 className="text-xl font-semibold text-white">Explore All Popular Anime</h2>
    <AllCards data={data}/>
     <Loader/>
    </main>
  );
}
