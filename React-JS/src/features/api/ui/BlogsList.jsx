import { useSelector, useDispatch } from "react-redux";
import { useQueryDispatch } from "../hooks/useQuery";
import {
  fetchedPosts,
  fetchedPostsAndUsers,
  fetchedUser,
} from "../store/blogs/actions";
import BlogAuthor from "./BlogAuthor";

export default function BlogsList() {
  const { isLoading, data, error } = useSelector((state) => state.blogs);
  const { data: users } = useSelector((state) => state.users);
  const blogs = data.reduce((acc, cur) => {
    const ids = acc.map((el) => el.userId);

    if (ids.includes(cur.userId)) return acc;
    return [...acc, cur];
  }, []);

  const dispatch = useDispatch();
  //   console.log(blogs);

  //   useQueryDispatch({ actionCreator: fetchedPosts, dispatch });
  useQueryDispatch({ actionCreator: fetchedPostsAndUsers, dispatch });

  //  === UI Related Stuff ===

  if (isLoading) {
    console.log(212121);
    return <p>Loading Blogs Data...</p>;
  }

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
