import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const courseListApi = createApi({
  reducerPath: 'courseListApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://fitness-pro-courses-default-rtdb.europe-west1.firebasedatabase.app/',
  }),
  endpoints: builder => ({
    getCourseList: builder.query({
      query: () => ({
        url: '/courses.json',
      }),
    }),
  }),
})

export const { useGetCourseListQuery } = courseListApi
