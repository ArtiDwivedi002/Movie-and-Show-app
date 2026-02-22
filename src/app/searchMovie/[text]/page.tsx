"use client";
import { Fragment } from 'react';
import Image from "next/image";
import { ConfigMovie } from "@/config/configMovie";
import style from '@/app/searchMovie/searchMovieDetails.module.scss';
import { ImagesConstants } from "@/constants/imagesConstants";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
import { useSearchState } from '@/app/searchMovie/[text]/_useSearchState';
import { useRouter } from 'next/navigation';
import { RoutesConstants } from '@/constants/routesConstants';
export default function SearchDetailsPage() {
    const {searchTrans,isLoading,searchMovie}=useSearchState();
    const route=useRouter();
    return (
        <Fragment>
            <div className={style["container"]}>
                <h1 className={style["container__heading"]}>
                    {searchTrans(TRANSLATIONCONSTANTSMOVIE.SEARCHMOVIE)}
                </h1>
                <div 
                className={style["container-search"]}>
                    {isLoading ? (
                        <p className={style["loading"]}>{searchTrans(TRANSLATIONCONSTANTSMOVIE.SEARCHINGTEXT)}</p>
                    ) : searchMovie.length > 0 ? (
                        searchMovie.map((movie) => {  
                            const imageUrl = movie.poster_path 
                              ? `${ConfigMovie.image_url}/w500/${movie.poster_path}` 
                              : ImagesConstants.defaultImages; 
                            return ( 
                              <div onClick={()=>{route.push(`${RoutesConstants.movieDetails}/${movie.id}`)}}
                              className={style["movie"]} key={movie.id}> 
                                    <Image  
                                        className={style["movie__images"]}
                                        src={imageUrl} 
                                        width={300} 
                                        height={300} 
                                        unoptimized 
                                        alt={movie.title}
                                    />
                                    <h2 className={style["movie__title"]}>{movie.title}</h2>
                                    <h3 className={style["movie__original-title"]}>{movie.original_title}</h3>
                              </div>
                            );
                          })
                    ) : (
                        <p className={style["movie__searching"]}>
                            {searchTrans(TRANSLATIONCONSTANTSMOVIE.NOTFOUNDMOVIES)}
                        </p>
                    )}
                </div>
            </div>
        </Fragment>
    );
}
