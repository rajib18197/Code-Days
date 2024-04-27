import { useSelector, useDispatch } from "react-redux";
import { useQueryDispatch } from "../hooks/useQuery";
import { fetchedPosts, fetchedUser } from "../store/blogs/actions";
import BlogAuthor from "./BlogAuthor";

export default function BlogsList() {
  const { isLoading, data: blogs, error } = useSelector((state) => state.blogs);

  const dispatch = useDispatch();
  console.log(blogs);

  useQueryDispatch({ actionCreator: fetchedPosts, dispatch });

  //  === UI Related Stuff ===

  if (isLoading) return <p>Loading Blogs Data...</p>;

  if (!isLoading && error) return <p>{error.message}</p>;

  if (!isLoading && !error && (!blogs || !blogs?.length))
    return <p>No Blogs available now!!! Please try again later.</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {blogs.map((blog) => (
        <BlogRow key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

function BlogRow({ blog }) {
  return (
    <div style={{ background: "#101d28", color: "white", padding: "10px" }}>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <h3>UserId: {blog.userId}</h3>

      <BlogAuthor userId={blog.userId} />
    </div>
  );
}
