import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export function PostCard({ post }) {
  return (
    <Link to={`/post/${post.slug}`}>
      <Card
        className="max-w-xs"
        renderImage={() => (
          <img width={500} height={500} src={post.image} alt="post image" />
        )}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
      </Card>
    </Link>
  );
}
