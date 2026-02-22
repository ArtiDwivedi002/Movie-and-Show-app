import { ConfigMovie } from "@/config/configMovie";
import { ApiKeyUrl, ApiMoviesUrls } from "@/constants/apiEndpointsConstants";
import { ApiKeys } from "@/constants/apikeyConstants";
import { RoutesConstants } from "@/constants/routesConstants";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
import { IMovieShow } from "@/modules/IMovieModel/ImovieModel";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export const useTrendingState=()=>{
    const [trendingMovie,setTrendingMovie]=useState<IMovieShow[]>([]);
    const trendingTrans=useTranslations(TRANSLATIONCONSTANTSMOVIE.PAGEHEADING);
    const routes=useRouter();
        const handleTrendingCardClick = (id: string) => {
            routes.push(`${RoutesConstants.movieDetails}/${id}`);
         };
        useEffect(()=>{
            async function fetchtrendingMovie() {
                const fetchTrending=await fetch(`${ConfigMovie.movie_url}${ApiMoviesUrls.trendingMovieUrl}${ApiKeyUrl.api_keys}${ApiKeys.apikeyValue}`);
                const response=await fetchTrending.json();
                setTrendingMovie(response.results);
            }
            fetchtrendingMovie();
        },[]);
         return {
            trendingMovie,
            handleTrendingCardClick,
            trendingTrans
         }
}