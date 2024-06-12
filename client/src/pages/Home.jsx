import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/post/getPosts?limit=6");
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  return (
    <div className="flex min-h-screen max-w-7xl mx-auto  p-3 mt-20">
      {posts.length > 0 && (
        <>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex-1">
              <div className="flex flex-col gap-5">
                <div className="relative w-full ">
                  <Link to={`post/${posts[0].slug}`}>
                    <img
                      className="w-full h-80 object-cover rounded-xl border-2  drop-shadow-lg dark:border-none"
                      src={posts[0].image}
                    />
                  </Link>
                  <div className="absolute text-2xl top-5 left-5 text-black font-bold">
                    {posts[0].title}
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row gap-3">
                  <div className="flex-1">
                    <Link to={`post/${posts[1].slug}`}>
                      <img
                        className="md:h-60 w-full object-cover rounded-xl border-2 drop-shadow-lg dark:border-none"
                        src={posts[1].image}
                      />
                    </Link>
                    <div className="absolute text-2xl top-5 left-5 text-black font-bold">
                      {posts[1].title}
                    </div>
                  </div>
                  <div className="relative flex-1 h-md">
                    <Link to={`post/${posts[2].slug}`}>
                      <img
                        className="md:h-60 w-full object-cover rounded-xl border-2 drop-shadow-lg dark:border-none"
                        src={posts[2].image}
                      />
                    </Link>
                    <div className="absolute text-2xl top-5 left-5 text-black font-bold">
                      {posts[2].title}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-5">
                <div className=" flex flex-col md:flex-row gap-3">
                  <div className="relative flex-1">
                    <Link to={`post/${posts[4].slug}`}>
                      <img
                        className="md:h-60 w-full object-cover rounded-xl border-2 drop-shadow-lg dark:border-none"
                        src={posts[4].image}
                      />
                    </Link>

                    <div className=" absolute text-2xl top-5 left-5 text-black font-bold">
                      {posts[4].title}
                    </div>
                  </div>
                  <div className="relative flex-1 h-md">
                    <Link to={`post/${posts[5].slug}`}>
                      <img
                        className="md:h-60 w-full object-cover rounded-xl border-2 drop-shadow-lg dark:border-none"
                        src={posts[5].image}
                      />
                    </Link>
                    <div className="absolute text-2xl top-5 left-5 text-black font-bold">
                      {posts[5].title}
                    </div>
                  </div>
                </div>
                <div className="relative w-full max-h-xs">
                  <Link to={`post/${posts[3].slug}`}>
                    <img
                      className="w-full h-80 object-cover rounded-xl border-2 dark:border-none drop-shadow-lg"
                      src={posts[3].image}
                    />
                  </Link>

                  <div className="absolute text-2xl top-5 left-5 text-black font-bold">
                    {posts[3].title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
