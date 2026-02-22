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
export const useUpComingState=()=>{
      const [upComingMovie,setUpComingMovie]=useState<IMovieShow[]>([]);
      const upComingTrans=useTranslations(TRANSLATIONCONSTANTSMOVIE.PAGEHEADING);
      const upComeRoutes=useRouter();
              const handleUpComingCardClick = (id: string) => {
                  upComeRoutes.push(`${RoutesConstants.movieDetails}/${id}`);
              };
        useEffect(()=>{
            async function fetchUpComingMovie() {
                const fetchNewMovie=await fetch(`${ConfigMovie.movie_url}${ApiMoviesUrls.upComingMovieUrl}${ApiKeyUrl.api_keys}${ApiKeys.apikeyValue}`);
                const response= await fetchNewMovie.json();
                setUpComingMovie(response.results);
                console.log(response.results);
            }
            fetchUpComingMovie();
        },[]);
         return{
            upComingMovie,
            handleUpComingCardClick,
            upComeRoutes,
            upComingTrans
         }
}