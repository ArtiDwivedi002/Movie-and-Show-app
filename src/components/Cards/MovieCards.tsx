"use client";
import { IMovieShow } from "@/modules/IMovieModel/ImovieModel";
import style from "@/components/Cards/movieCards.module.scss";
import { ConfigMovie } from "@/config/configMovie";
import { FcLike } from "react-icons/fc";
import { IoHeartOutline } from "react-icons/io5";
import { Fragment } from "react";
import Image from "next/image";
import { useFavourite } from "@/context/favouriteContext";
interface MovieCardsProps {
  movieList: IMovieShow[];
  title: string;
  onCardClick: (id: string) => void;
}
export default function MovieCards({
  movieList,
  title,
  onCardClick,
}: MovieCardsProps) {
  const { isFavourite, favouriteToggle } = useFavourite();
  return (
    <Fragment>
      <div className={style["container"]}>
        <h2 className={style["container__heading"]}> {title}</h2>
      </div>
      <div className={style["movie-container"]}>
        {movieList.map((list) => (
          <div className={style["movie"]} key={list.id}>
            <Image
              onClick={() => onCardClick(list.id)}
              className={style["movie__images"]}
              src={`${ConfigMovie.image_url}/w500/${list.poster_path}`}
              alt="images"
              width={300}
              height={300}
              unoptimized
            />
            <div className={style["container-progress"]}>
              <span
                className={style["progress-label"]}
                style={
                  { "--progress": `${list.popularity}%` } as React.CSSProperties
                }
              >
                {Math.round(list.popularity)}%
              </span>
              <div
                onClick={() => favouriteToggle(list)}
                className={style["favorite-button"]}
              >
                {isFavourite(list.id) ? (
                  <FcLike size={35} />
                ) : (
                  <IoHeartOutline size={35} color="#ccc" />
                )}
              </div>
            </div>
            <h1 className={style["movie__title"]}>{list.title}</h1>
            <h2 className={style["movie__original-title"]}>
              {list.original_title}
            </h2>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
