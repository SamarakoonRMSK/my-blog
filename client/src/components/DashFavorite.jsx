import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DashFavorite() {
  const { currentUser } = useSelector((state) => state.userSlice);
  const [favoritePosts, setFavoritePosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`api/post/favorite/${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setFavoritePosts(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [currentUser._id]);

  const handleRemoveFavorite = async (postId) => {
    const res = await fetch(`/api/post/removefavorite/${postId}`, {
      method: "PUT",
    });
    if (res.ok) {
      const data = await res.json();
      setFavoritePosts(favoritePosts.filter((post) => post._id !== data._id));
    }
  };

  return (
    <div className="table-auto overflow-x-scroll md:w-full md:mx-auto p-3 ">
      {currentUser && favoritePosts.length > 0 ? (
        <>
          <Table hoverable className="shadow-md ">
            <Table.Head>
              <Table.HeadCell>Date updated</Table.HeadCell>
              <Table.HeadCell>Poat image</Table.HeadCell>
              <Table.HeadCell>Post title</Table.HeadCell>
              <Table.HeadCell>Author</Table.HeadCell>
              <Table.HeadCell>Favorite</Table.HeadCell>
            </Table.Head>
            {favoritePosts.map((post) => (
              <Table.Body key={post._id} className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link
                      className="font-medium text-gray-900 dark:text-white"
                      to={`/post/${post.slug}`}
                    >
                      {post.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{post.favorite ?? "0".length}</Table.Cell>
                  <Table.Cell>
                    <span
                      onClick={() => handleRemoveFavorite(post._id)}
                      className="font-medium text-red-500 hover:underline cursor-pointer"
                    >
                      Remove
                    </span>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </>
      ) : (
        <p>You have no favorite posts</p>
      )}
    </div>
  );
}
