export const PENDING_POSTS = "blogs/pendingPosts";
export const RESOLVED_POSTS = "blogs/resolvedPosts";
export const REJECTED_POSTS = "blogs/rejectedPosts";

export const PENDING_USER = "blogs/pendingUser";
export const RESOLVED_USER = "blogs/resolvedUser";
export const REJECTED_USER = "blogs/rejectedUser";

export const wait = function (s) {
  return new Promise((res) => {
    setTimeout(res, s * 1000);
  });
};
