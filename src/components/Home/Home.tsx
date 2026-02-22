"use client";
import style from "@/components/Home/home.module.scss";
import MovieCards from "@/components/Cards/MovieCards";
import { useTopRatedState } from "@/app/topRatedMovie/usetopratedState";
import { useTrendingState } from "@/app/trendingMovie/useTrendingState";
import { useUpComingState } from "@/app/upComingMovie/useUpComingState";
import { useTranslations } from "next-intl";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
export default function Home() {
  const infoTrans = useTranslations(TRANSLATIONCONSTANTSMOVIE.INFORAMTION);
  const { topMovie, handleCardClick, topRatedTrans } = useTopRatedState();
  const { trendingMovie, handleTrendingCardClick, trendingTrans } = useTrendingState();
  const { upComingMovie, handleUpComingCardClick, upComingTrans } =useUpComingState();
  return (
    <>
      <div className={style["container"]}>
        <h2 className={style["container__heading"]}>
          {infoTrans(TRANSLATIONCONSTANTSMOVIE.HOMEPAGEINFORM)}
        </h2>
      </div>
      <div>
        <MovieCards
          movieList={topMovie}
          title={topRatedTrans(
            TRANSLATIONCONSTANTSMOVIE.TOPRATINGMOVIESHEADING
          )}
          onCardClick={handleCardClick}
        />
      </div>
      <div>
        <MovieCards
          movieList={trendingMovie}
          title={trendingTrans(TRANSLATIONCONSTANTSMOVIE.TRENDINGMOVIEHEADING)}
          onCardClick={handleTrendingCardClick}
        />
      </div>
      <div>
        <MovieCards
          movieList={upComingMovie}
          title={upComingTrans(TRANSLATIONCONSTANTSMOVIE.UPCOMINGMOVIEHEADING)}
          onCardClick={handleUpComingCardClick}
        />
      </div>
    </>
  );
}
