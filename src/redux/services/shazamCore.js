import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-api7.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '0b3f9a9d6amsh56370f2495f7aefp14913ajsn87b0ffbd5db0');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'charts/get-top-songs-in-world' }),
    getSongsByGenre: builder.query({ query: (genre) => `charts/get-top-songs-in_world_by_genre?genre_code=${genre}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `charts/get-top-songs-in-country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `search?term=${searchTerm}` }),
    getArtistDetails: builder.query({ query: (artistId) => `artists/get-details?id=${artistId}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `songs/get_details?id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `songs/list-recommendations?id=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useGetArtistDetailsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
// import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
export { shazamCoreApi }