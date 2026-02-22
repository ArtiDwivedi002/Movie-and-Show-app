"use client";
import { RoutesConstants } from "@/constants/routesConstants"
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants"
import { useTranslations } from "next-intl"
import style from '@/components/Header/header.module.scss';
import Link from "next/link";
import Hamburger from 'hamburger-react'
import {Fragment, useState} from 'react';
import { ImagesConstants } from "@/constants/imagesConstants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchMovies from "@/components/Search/Search";

export default function Header(){

    const headerTranslations=useTranslations(TRANSLATIONCONSTANTSMOVIE.HEADER);
    const [isOpen, setOpen] = useState(false);
    const routes=useRouter();
    const pages=[
        {id:1,navbar:RoutesConstants.topRatedMovie,value:headerTranslations(TRANSLATIONCONSTANTSMOVIE.TOPRATEDMOVIE)},
        {id:2,navbar:RoutesConstants.upComingMovie,value:headerTranslations(TRANSLATIONCONSTANTSMOVIE.UPCOMINGMOVIE)},
        {id:3,navbar:RoutesConstants.trendingMovie,value:headerTranslations(TRANSLATIONCONSTANTSMOVIE.TRENDINGMOVIE)},
        {id:4,navbar:RoutesConstants.favouritelist,value:headerTranslations(TRANSLATIONCONSTANTSMOVIE.FAVOURITE)},
        
    ];
    
   
    const handleLinkClick = () => {
        setOpen(false);
    };

    return(

        <Fragment>      
            <div className={style["header-container"]}>
                <div className={style["hamburger-wrapper"]}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>

                <Image onClick={()=>routes.push(RoutesConstants.home)}className={style["header-container__logo"]}  src={ImagesConstants.headerlogo} width={170} height={170} unoptimized alt="headerImage"/>
                <SearchMovies/>
                  <div className={style["navbar-desktop"]}>
                    {pages.map((list)=>(
                        <div className={style["navbar-container"]}key={list.id}>
                                <Link className={style["navbar-container__links"]} href={list.navbar}>{list.value}</Link> 
                        </div>
                    ))}
                </div>
                
   
                {isOpen && (
                    <div className={style["navbar-mobile-menu"]}>
                        {pages.map((list) => (
                            <Link 
                                key={list.id} 
                                className={style["navbar-container__links__mobile"]} 
                                href={list.navbar}
                                onClick={handleLinkClick} 
                            >
                                {list.value}
                            </Link>
                        ))}
                    </div>
                )}
             
            </div>
        </Fragment>
    )
}
