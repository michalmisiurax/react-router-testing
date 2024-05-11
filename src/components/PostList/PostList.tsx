import { useEffect, useState } from "react";

type PostType = {
  id: number;
  title: string;
};

export const Post = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const getPosts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) throw new Error("Cannot fetch posts!");

      const { posts } = await response.json();
      if (posts) setPosts(posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return posts.length === 0 ? (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Post key={post.id} {...post} />
        </li>
      ))}
    </ul>
  ) : (
    "Brak informacji o postach"
  );
};
