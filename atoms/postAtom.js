import { atom } from "recoil";
import {
  GET_POST_STATE,
  HANDLE_POST_STATE,
  USE_SSR_POSTS_STATE,
} from "../utils/constants";

export const handlePostState = atom({
  key: HANDLE_POST_STATE,
  default: false,
});

export const getPostState = atom({
  key: GET_POST_STATE,
  default: {},
});

export const useSSRPostsState = atom({
  key: USE_SSR_POSTS_STATE,
  default: true,
});
