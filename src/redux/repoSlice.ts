import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RepoState {
  repos: any[];
}

const initialState: RepoState = {
  repos: [],
};

const repoSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setRepos(state, action: PayloadAction<any[]>) {
      state.repos = action.payload;
    },
  },
});

export const { setRepos } = repoSlice.actions;
export default repoSlice.reducer;
