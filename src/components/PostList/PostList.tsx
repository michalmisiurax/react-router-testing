import { useEffect, useState } from "react";
import { PostForm } from "../PostForm/PostForm";
import { Post } from "../Post/Post";

export type PostType = {
  id: number;
  title: string;
};

export const PostList = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");

      if (!res.ok) throw new Error("Cannot fetch posts!");

      const { posts } = await res.json();

      if (posts) setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  const addPost = (post: PostType) => setPosts((prev) => [...prev, post]);

  useEffect(() => {
    getPosts();
  }, []);

  return posts.length > 0 ? (
    <>
      <PostForm addPost={addPost} />
      <ul>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </>
  ) : (
    <h1>"Brak informacji o postach"</h1>
  );
};
