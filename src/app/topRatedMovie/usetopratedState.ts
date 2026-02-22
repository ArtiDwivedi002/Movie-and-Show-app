"use client";
import { ConfigMovie } from "@/config/configMovie";
import { ApiKeyUrl, ApiMoviesUrls } from "@/constants/apiEndpointsConstants";
import { ApiKeys } from "@/constants/apikeyConstants";
import { RoutesConstants } from "@/constants/routesConstants";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
import { IMovieShow } from "@/modules/IMovieModel/ImovieModel";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export const useTopRatedState=()=>{
   const [topMovie,setTopMovie]=useState<IMovieShow[]>([]);
   const toproutes=useRouter();
   const topRatedTrans=useTranslations(TRANSLATIONCONSTANTSMOVIE.PAGEHEADING);
       const handleCardClick = (id: string) => {
           toproutes.push(`${RoutesConstants.movieDetails}/${id}`);
       };
    useEffect(()=>{
        async function fetchtopRatedMovieUrl(){
            const fetchmovies=await fetch(`${ConfigMovie.movie_url}${ApiMoviesUrls.topRatedMovieUrl}${ApiKeyUrl.api_keys}${ApiKeys.apikeyValue}`);
            const response= await fetchmovies.json();
            setTopMovie(response.results);
        }
        fetchtopRatedMovieUrl();
    },[]);
    return {
        topMovie,
        handleCardClick,
        topRatedTrans
    }
}