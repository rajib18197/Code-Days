import { useDispatch, useSelector } from "react-redux";
import { useQueryDispatch } from "../hooks/useQuery";
import { fetchedUser } from "../store/blogs/actions";
import { memo } from "react";

function BlogAuthor({ userId }) {
  const { isLoading, data: users, error } = useSelector((state) => state.users);

  //   const dispatch = useDispatch();
  //   useQueryDispatch({
  //     actionCreator: () => fetchedUser(userId),
  //     dispatch,
  //     id: userId,
  //   });

  const user = users?.find((user) => user.id === userId);
  //  === UI Related Stuff ===

  if (isLoading) return <p>Loading Blogs Data...</p>;

  if (!isLoading && error) return <p>{error.message}</p>;

  if (!isLoading && !error && !user) return <p>Unknown Author!!!</p>;

  //   console.log(user.id);

  return (
    <div style={{ padding: "10px", border: "2px solid orangered" }}>
      <h3>
        <strong>
          {user.name} || {user.email}
        </strong>{" "}
      </h3>
    </div>
  );
}

export default BlogAuthor;
