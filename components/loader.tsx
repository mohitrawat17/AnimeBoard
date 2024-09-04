"use client";
import { AnimeProp } from "@/assets/dummy";
import { fetchData } from "@/assets/getData";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AllCards from "./allCards";
export type AnimeElement=JSX.Element


let page =2
const Loader = () => {
  const { ref, inView } = useInView();
  const [animeData, setAnimeData] = useState<AnimeElement[]>([]);

  const getData = async () => {
    const res = await fetchData(page);
    setAnimeData((prev) => [...prev, ...res]);
    page++
  };

  useEffect(() => {
    if (inView) {
      getData();
    }
  }, [inView]);
  return (
    <>
      <AllCards data={animeData} />

      <div ref={ref} className="flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-4 border-gray-200 border-t-red-600 rounded-full animate-spin"></div>
      </div>
    </>
  );
};

export default Loader;
