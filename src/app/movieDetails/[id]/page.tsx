"use client";
import Image from "next/image";
import style from "@/app/movieDetails/movieDetails.module.scss";
import { Fragment } from "react";
import { useMovieDetails } from "@/app/movieDetails/[id]/_useMovieDetails";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
export default function MovieDetails() {
  const { movieDetails, addFavourite, movieTrans, addTrans, imageUrl } =
    useMovieDetails();

  if (!movieDetails) {
    return <div>{movieTrans(TRANSLATIONCONSTANTSMOVIE.LOADING)}</div>;
  }
  return(
    <Fragment>
      <div className={style["container"]}>
        <Image
          className={style["container__images"]}
          src={imageUrl}
          width={700}
          height={700}
          unoptimized
          alt={movieDetails.title}
        />
        <h1 className={style["container__title"]}>{movieDetails.title}</h1>
        <h2 className={style["container__original-title"]}>
          {movieDetails.original_title}
        </h2>
        <p className={style["container__overview"]}>
          {movieDetails.overview.substring(0, 180)}
        </p>
        <h3 className={style["container__count"]}>{movieDetails.vote_count}</h3>
        <h4 className={style["container__popular"]}>
          {movieDetails.popularity}
        </h4>
        <button
          className={style["container__addbtn"]}
          onClick={() => addFavourite(movieDetails)}
        >
          {addTrans(TRANSLATIONCONSTANTSMOVIE.ADDEDFAVOURITECARDS)}
        </button>
      </div>
    </Fragment>
  );
}
