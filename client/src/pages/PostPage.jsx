import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { useSelector } from "react-redux";
import { Spinner } from "flowbite-react";
import CommentSection from "../components/CommentSection";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const { currentUser } = useSelector((state) => state.userSlice);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();

        if (!res.ok) {
          setLoading(false);
          return;
        } else {
          setPost(data.posts[0]);
          setIsFavorite(data.posts[0].favorite.includes(currentUser._id));
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  const handleFavorite = async () => {
    if (post.favorite.includes(currentUser._id)) {
      if (post.favorite.length == 1) {
        post.favorite = [];
        setIsFavorite(false);
      } else {
        const index = post.favorite.indexOf(currentUser._id);
        post.favorite.splice(index, currentUser._id);
        setIsFavorite(false);
      }
    } else {
      post.favorite.push(currentUser._id);
      setIsFavorite(true);
    }

    try {
      const res = await fetch(`/api/post/likepost/${post._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ favorite: post.favorite }),
      });
      const data = await res.json();
      if (!data) {
        console.log("server error");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="p-3 flex flex-col  max-w-4xl mx-auto min-h-screen">
      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-10 p-3 max-h-[400px] w-full object-cover"
      />
      <h1 className="text-5xl mt-3 p-3  font-medium max-w-4xl  lg:text-6xl">
        {post && post.title}
      </h1>

      <div className="flex justify-between p-3  w-full max-w-4xl text-md">
        <span>
          {post && new Date(post.createdAt).toLocaleDateString()} by{" "}
          <span className="text-red-400 font-semibold">Saman K Rathnayaka</span>
        </span>
        <span className="italic ">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      {post && (
        <div className="p-3  w-full max-w-4xl">
          <MdFavorite
            onClick={handleFavorite}
            className="w-6 h-6 cursor-pointer "
            color={isFavorite ? "#0099ff" : "gray"}
          />
        </div>
      )}

      <div
        className="p-3 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto w-full"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>
      <CommentSection postId={post._id} />
    </main>
  );
}
