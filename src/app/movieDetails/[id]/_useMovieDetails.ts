"use client";
import { ConfigMovie } from "@/config/configMovie";
import { ApiKeyUrl, DetailsMoviesApiUrl } from "@/constants/apiEndpointsConstants";
import { ApiKeys } from "@/constants/apikeyConstants";
import { ImagesConstants } from "@/constants/imagesConstants";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
import { useFavourite } from "@/context/favouriteContext";
import { IMovieShow } from "@/modules/IMovieModel/ImovieModel";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export  const useMovieDetails=()=>{
       const {addFavourite}=useFavourite();
        const [movieDetails, setMovieDetails] = useState<IMovieShow | null>(null);
        const params = useParams();
        const movieId = params.id; 
        const movieTrans=useTranslations(TRANSLATIONCONSTANTSMOVIE.PAGEHEADING);
        const addTrans=useTranslations(TRANSLATIONCONSTANTSMOVIE.INFORAMTION);
         const imageUrl = movieDetails?.poster_path 
                                  ? `${ConfigMovie.image_url}/w500/${movieDetails?.poster_path}` 
                                  : ImagesConstants.defaultImages; 
        useEffect(() => {
            async function fetchmovieDetails() {
                const res = await fetch(`${ConfigMovie.movie_url}${DetailsMoviesApiUrl.detailsMoviesUrl}${movieId}${ApiKeyUrl.api_keys}${ApiKeys.apikeyValue}`);
                const movieData: IMovieShow = await res.json(); 
                setMovieDetails(movieData); 
            }
            if (movieId) {
                fetchmovieDetails();
            }
        }, [movieId]);  

     return {
        addFavourite,
        movieDetails,
        movieId,
        movieTrans,
        addTrans,
        imageUrl

     }

}