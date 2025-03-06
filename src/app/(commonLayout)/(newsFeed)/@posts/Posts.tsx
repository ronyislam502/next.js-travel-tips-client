"use client";

import PostCard from "@/src/components/ui/PostCard";
import { useAllPostsQuery } from "@/src/redux/features/post/postApi";
import { TPost } from "@/src/types";

const Posts = () => {
  const { data: posts, isLoading } = useAllPostsQuery("");

  console.log("data", posts);

  return (
    <div className="grid lg:grid-cols-1 gap-4">
      {posts?.data?.map((post: TPost) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
