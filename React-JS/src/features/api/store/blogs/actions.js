import {
  PENDING_POSTS,
  PENDING_USER,
  RESOLVED_POSTS,
  RESOLVED_USER,
  wait,
} from "./actionTypes";

export const fetchedPostsAndUsers = function () {
  return async (dispatch, getState) => {
    await dispatch(fetchedPosts());

    const userIds = getState()
      .blogs.data.map((post) => post.userId)
      .reduce((acc, cur) => {
        if (acc.includes(cur)) return acc;
        return [...acc, cur];
      }, []);

    console.log(userIds);

    userIds.forEach((id) => dispatch(fetchedUser(id)));
    console.log("hello");
  };
};

export const fetchedPosts = function () {
  return async (dispatch, getState) => {
    dispatch({ type: PENDING_POSTS });
    console.log(121212);

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    const posts = await response.json();

    await wait(3);

    dispatch({ type: RESOLVED_POSTS, payload: posts });
  };
};

export const fetchedUser = function (id) {
  return async (dispatch, getState) => {
    dispatch({ type: PENDING_USER });

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const user = await response.json();

    await wait(1);

    dispatch({ type: RESOLVED_USER, payload: user });
  };
};
