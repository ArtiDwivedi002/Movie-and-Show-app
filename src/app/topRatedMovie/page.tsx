"use client";
import { useTopRatedState } from "@/app/topRatedMovie/usetopratedState"; 
import { Fragment } from 'react';
import MovieCards from "@/components/Cards/MovieCards"; 
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
export default function TopRatedMovie(){
   const {topMovie,handleCardClick,topRatedTrans} = useTopRatedState();
    return (
        <Fragment>
            <MovieCards 
                movieList={topMovie} 
                title={topRatedTrans(TRANSLATIONCONSTANTSMOVIE.TOPRATINGMOVIESHEADING)}
                onCardClick={handleCardClick}
            />
        </Fragment>
    )
}
