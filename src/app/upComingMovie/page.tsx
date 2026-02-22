"use client"
import { Fragment } from "react";
import { useUpComingState } from "./useUpComingState";
import MovieCards from "@/components/Cards/MovieCards";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
export default function UpComingMovie(){
    const {upComingMovie,handleUpComingCardClick,upComingTrans}=useUpComingState();
    return(
        <Fragment>
            <MovieCards 
            movieList={upComingMovie}
            onCardClick={handleUpComingCardClick}
            title={upComingTrans(TRANSLATIONCONSTANTSMOVIE.UPCOMINGMOVIEHEADING)}/>
        </Fragment>
    )
}