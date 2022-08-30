import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY } from "../apis/tmdb";

export const moviesApi = createApi({
  reducerPath: moviesApi,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    popularMovie: builder.query({
      query: () => `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    }),
    weeklyTrendingMovies: builder.query({
      query: () => `/trending/movie/week?api_key=${API_KEY}`,
    }),
    weeklyTrendingSeries: builder.query({
      query: () => `/trending/tv/week?api_key=${API_KEY}`,
    }),
    movieDetail: builder.query({
      query: (id) => `/movie/${id}?api_key=${API_KEY}`,
    }),
    movieVideos: builder.query({
      query: (id) => `/movie/${id}/videos?api_key=${API_KEY}`,
    }),
    movieSimilar: builder.query({
      query: (id) => `/movie/${id}/similar?api_key=${API_KEY}`,
    }),
    movieRecommendations: builder.query({
      query: (id) => `/movie/${id}/recommendations?api_key=${API_KEY}`,
    }),
    seriesDetail: builder.query({
      query: (id) => `/tv/${id}?api_key=${API_KEY}`,
    }),
    seriesVideos: builder.query({
      query: (id) => `/tv/${id}/videos?api_key=${API_KEY}`,
    }),
    seriesSimilar: builder.query({
      query: (id) => `/tv/${id}/similar?api_key=${API_KEY}`,
    }),
    seriesRecommendations: builder.query({
      query: (id) => `/tv/${id}/recommendations?api_key=${API_KEY}`,
    }),
    searchMovies: builder.query({
      query: ({ query, page }) =>
        `/search/collection?api_key=${API_KEY}&query=${query}&page=${page}`,
    }),
  }),
});

export const {
  usePopularMovieQuery,
  useWeeklyTrendingMoviesQuery,
  useWeeklyTrendingSeriesQuery,
  useMovieDetailQuery,
  useMovieVideosQuery,
  useMovieSimilarQuery,
  useMovieRecommendationsQuery,
  useSeriesDetailQuery,
  useSeriesVideosQuery,
  useSeriesSimilarQuery,
  useSeriesRecommendationsQuery,
  useSearchMoviesQuery,
} = moviesApi;
