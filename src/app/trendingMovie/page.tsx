"use client";
import { useTrendingState } from "./useTrendingState"; 
import { Fragment } from "react"
import MovieCards from "@/components/Cards/MovieCards"; 
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
export default function TrendingMovie(){
    const {trendingMovie,handleTrendingCardClick,trendingTrans} = useTrendingState();
    return (
        <Fragment>
            <MovieCards 
                movieList={trendingMovie} 
                title={trendingTrans(TRANSLATIONCONSTANTSMOVIE.TRENDINGMOVIEHEADING)}
                onCardClick={handleTrendingCardClick}
            />
        </Fragment>
    )
}
