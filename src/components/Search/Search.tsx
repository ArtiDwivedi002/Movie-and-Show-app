"use client";
import style from '@/components/Search/searchMovie.module.scss';
import { useSearchState } from "@/app/searchMovie/[text]/_useSearchState"; 
import { Fragment } from 'react';
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
import { useRouter } from "next/navigation";
import { RoutesConstants } from "@/constants/routesConstants";
export default function SearchMovies() {
    const { searchTerm, handleSearchChange, searchTrans } = useSearchState();
    const router = useRouter();     
    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const query = searchTerm.trim();
        if (!query) {
            return;
        }
         router.push(`${RoutesConstants.movieSearch}/${(query)}`);
    };
    return (
        <Fragment>
            <div className={style["container"]}>
                <h1 className={style["container__heading"]}>{searchTrans(TRANSLATIONCONSTANTSMOVIE.SEARCHMOVIEHEADING)}</h1>
                <form 
                onSubmit={handleSearchSubmit}>
                    <input 
                        className={style["container__input"]}
                        type="text"
                        placeholder={searchTrans(TRANSLATIONCONSTANTSMOVIE.PLACEHOLDERSEARCH)}
                        value={searchTerm}
                        onChange={handleSearchChange}/>
                    <button type="submit" className={style["container__button"]}>
                        {searchTrans(TRANSLATIONCONSTANTSMOVIE.SEARCHBTN)}
                    </button>
                </form>
            </div>
        </Fragment>
    );
}
