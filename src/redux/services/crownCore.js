import { createApi } from '@reduxjs/toolkit/query/react';
import { supabase } from '../../lib/supabaseClient'
const crownCoreApi = createApi({
  reducerPath: 'crownCoreApi',
  baseQuery: async (arg, api, { queryFn, json }) => {
    const { data, error } = await queryFn(api, arg);

    if (error) {
      throw error;
    }

    return json ? data : data?.data;
  },
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => supabase.from('top_charts').select(),
    }),

    getSongsByGenre: builder.query({
      query: (genre) =>
        supabase.from('songs').select().eq('genre', genre),
    }),

    getSongsByCountry: builder.query({
      query: (countryCode) =>
        supabase.from('songs').select().eq('country_code', countryCode),
    }),

    getSongsBySearch: builder.query({
      query: (searchTerm) =>
        supabase.from('songs').select().ilike('title', `%${searchTerm}%`),
    }),

    getArtistDetails: builder.query({
      query: (artistId) =>
        supabase.from('artists').select().eq('id', artistId),
    }),

    getSongDetails: builder.query({
      query: ({ songid }) =>
        supabase.from('songs').select().eq('id', songid),
    }),

    getSongRelated: builder.query({
      query: ({ songid }) =>
        supabase.from('related_songs').select().eq('song_id', songid),
    }),
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
} = crownCoreApi;

export { crownCoreApi };
