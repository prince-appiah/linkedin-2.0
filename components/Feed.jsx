import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
import Input from "./Input";
import Post from "./Post";

const Feed = ({ posts }) => {
  const [feed, setFeed] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setFeed(data);
      setHandlePost(false);
      setUseSSRPosts(false);
    };

    fetchPosts();
  }, [handlePost]);

  return (
    <main className="max-w-lg pb-24 space-y-6">
      <Input />
      {/* Posts */}
      {!useSSRPosts
        ? feed?.map((post) => <Post key={post._id} post={post} />)
        : posts?.map((post) => <Post key={post._id} post={post} />)}
    </main>
  );
};

export default Feed;
