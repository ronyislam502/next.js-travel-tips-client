import { baseApi } from "../../api/baseApi";

const postApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allPosts: builder.query({
      query: () => ({
        url: "/posts",
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    createPost: builder.mutation({
      query: (userInfo) => ({
        url: "/posts/create-post",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useAllPostsQuery, useCreatePostMutation } = postApi;
