import {
  PENDING_POSTS,
  PENDING_USER,
  REJECTED_POSTS,
  REJECTED_USER,
  RESOLVED_POSTS,
  RESOLVED_USER,
} from "./actionTypes";

const initialState = {
  blogs: {
    data: [],
    isLoading: false,
    error: null,
  },

  users: {
    data: [],
    isLoading: false,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING_POSTS: {
      return {
        ...state,
        blogs: { ...state.blogs, isLoading: true, error: null },
      };
    }

    case RESOLVED_POSTS: {
      return {
        ...state,
        blogs: {
          ...state.blogs,
          data: action.payload,
          isLoading: false,
          error: null,
        },
      };
    }

    case REJECTED_POSTS: {
      return {
        ...state,
        blogs: {
          ...state.blogs,
          isLoading: false,
          error: action.payload,
        },
      };
    }

    // ========================

    case PENDING_USER: {
      return {
        ...state,
        users: {
          ...state.users,
          isLoading: true,
          error: null,
        },
      };
    }

    case RESOLVED_USER: {
      return {
        ...state,
        users: {
          ...state.users,
          data: [...state.users.data, action.payload],
          isLoading: false,
          error: null,
        },
      };
    }

    case REJECTED_USER: {
      return {
        ...state,
        users: {
          ...state.users,
          isLoading: false,
          error: action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
