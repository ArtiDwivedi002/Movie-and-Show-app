"use client";
import { ConfigMovie } from "@/config/configMovie";
import { ApiKeyUrl,SearchMovieUrl} from "@/constants/apiEndpointsConstants";
import { ApiKeys } from "@/constants/apikeyConstants";
import { TRANSLATIONCONSTANTSMOVIE } from "@/constants/translationConstants";
import { IMovieShow } from "@/modules/IMovieModel/ImovieModel";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export const useSearchState = () => {
  const [searchMovie, setSearchMovie] = useState<IMovieShow[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const params = useParams();
  const queryParam = params.text as string;
  const [isLoading, setIsLoading] = useState(true);
  const searchTrans = useTranslations(TRANSLATIONCONSTANTSMOVIE.SEARCHPAGE);
  const erroetrans = useTranslations(TRANSLATIONCONSTANTSMOVIE.ERRORHANDLING);
  useEffect(() => {
    async function fetchSearchMovie() {
      if (!queryParam) {
        setIsLoading(false);
        setSearchMovie([]);
        return;
      }
      setIsLoading(true);
      const fetchUrl = `${ConfigMovie.movie_url}${SearchMovieUrl.searchMoviesUrl}${ApiKeyUrl.api_keys}${ApiKeys.apikeyValue}${SearchMovieUrl.query}${queryParam}`;
      try {
        const fetchResponse = await fetch(fetchUrl);
        if (!fetchResponse.ok) {
          throw new Error(erroetrans(TRANSLATIONCONSTANTSMOVIE.NETWORKERROR));
        }
        const data = await fetchResponse.json();
        setSearchMovie(data.results || []);
      } catch (error) {
        setSearchMovie([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSearchMovie();
  }, [queryParam]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return {
    handleSearchChange,
    searchTerm,
    searchTrans,
    isLoading,
    searchMovie,
  };
};
