import { atom } from "recoil";
import { MODAL_STATE, MODAL_TYPE_STATE } from "../utils/constants";

export const modalState = atom({
  key: MODAL_STATE,
  default: false,
});

export const modalTypeState = atom({
  key: MODAL_TYPE_STATE,
  default: "dropIn",
});
