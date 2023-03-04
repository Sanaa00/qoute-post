import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: 1,
    qoute: "The purpose of our lives is to be happy",
    name: "Dalai Lama",
    date: sub(new Date(), { minutes: 10 }),
  },
  {
    id: 2,
    qoute:
      "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
    name: " Henry Ford",
    date: sub(new Date(), { minutes: 20 }),
  },
];
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, qoute) {
        return {
          payload: {
            id: nanoid(),
            name,
            qoute,

            date: new Date().toDateString(),
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
