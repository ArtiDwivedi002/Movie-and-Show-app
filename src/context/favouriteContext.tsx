"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { IMovieShow } from "@/modules/IMovieModel/ImovieModel";
import { MovieEnums } from "@/constants/movieEnums";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
interface FavouriteContextType {
  movie: IMovieShow[];
  addFavourite: (movie: IMovieShow) => void;
  deleteFromFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
  favouriteToggle: (movie: IMovieShow) => void;
}
const FavouriteContext = createContext<FavouriteContextType | undefined>(
  undefined
);
export const FavouriteProvider = ({ children }: { children: ReactNode }) => {
  const favouriteTrans = useTranslations(TRANSLATIONCONSTANTSMOVIE.INFORAMTION);
  const [movie, setMovie] = useState<IMovieShow[]>([]);
  useEffect(() => {
    const storedFavorites = localStorage.getItem(MovieEnums.FAVOURITE);
    if (storedFavorites) {
      setMovie(JSON.parse(storedFavorites));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(MovieEnums.FAVOURITE, JSON.stringify(movie));
  }, [movie]);

  const addFavourite = (newMovie: IMovieShow) => {
    setMovie((prevMovies) => {
      const isAlreadyInFavourites = prevMovies.some(
        (existingMovie) => existingMovie.id === newMovie.id
      );
      if (isAlreadyInFavourites) {
        return prevMovies;
      }
      return [...prevMovies, newMovie];
    });

    toast.success(favouriteTrans(TRANSLATIONCONSTANTSMOVIE.FAVOURITEADDEDINFO));
  };

  const deleteFromFavourite = (id: string) => {
    setMovie((prev) => prev.filter((m) => m.id !== id));
    toast.info(favouriteTrans(TRANSLATIONCONSTANTSMOVIE.FAVOURITEDELETEINFO));
  };

  const isFavourite = (id: string) => {
    const data = movie.some((item) => item.id === id);
    return data;
  };
  const favouriteToggle = (movie: IMovieShow) => {
    if (isFavourite(movie.id)) {
      deleteFromFavourite(movie.id);
    } else {
      addFavourite(movie);
    }
  };

  return (
    <FavouriteContext.Provider
      value={{
        movie,
        addFavourite,
        deleteFromFavourite,
        isFavourite,
        favouriteToggle,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = () => {
  const context = useContext(FavouriteContext);
    const errortrans=useTranslations(TRANSLATIONCONSTANTSMOVIE.ERRORHANDLING);
  if (context === undefined) {
    throw new Error(errortrans(TRANSLATIONCONSTANTSMOVIE.CONTEXTERROR));
  }
  return context;
};
