"use client";
import { ConfigMovie } from "@/config/configMovie";
import { useFavourite } from "@/context/favouriteContext";
import Image from "next/image";
import style from "@/app/favouriteList/favouriteList.module.scss";
import {Fragment} from 'react';
import { useTranslations } from "next-intl";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
export default function Favourite(){
  const {movie,deleteFromFavourite}=useFavourite();
  const infoTrans=useTranslations(TRANSLATIONCONSTANTSMOVIE.INFORAMTION);
    return (
        <Fragment>
            <h2 className={style["heading2"]}>{infoTrans(TRANSLATIONCONSTANTSMOVIE.FAVOURITEMOVIEHEADING)}</h2>
        <div className={style["main-container"]}>
            {movie.length === 0 ? (
                <h1 className={style["main-container__heading"]}>{infoTrans(TRANSLATIONCONSTANTSMOVIE.FAVOUTIEEMPTYINFO)}</h1>
            ):
        movie.map((list,index)=>(
            <div className={style["container"]} key={index} >
                  <Image className={style["container__images"]} src={`${ConfigMovie.image_url}/w500/${list.poster_path}`} alt="images" width={300} height={300} unoptimized/>
                <h1 className={style["container__title"]}>{list.title}</h1>
                <h2 className={style["container__original"]}>{list.original_title}</h2>
                <button className={style["container__delbtn"]}onClick={()=>deleteFromFavourite(list.id)}>{infoTrans(TRANSLATIONCONSTANTSMOVIE.DELETEFAVOURITECARDS)}</button>
                </div>
        ))
       }
        </div>
        </Fragment>

    )
}