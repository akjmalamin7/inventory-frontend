import { createSlice } from "@reduxjs/toolkit";
interface headerSliceProps {
  isSidebar: boolean;
  isDropdown: boolean;
}
const initialState: headerSliceProps = {
  isSidebar: false,
  isDropdown: false,
};
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebar = !state.isSidebar;
    },
    avatarDropdown: (state) => {
      state.isDropdown = !state.isDropdown;
    },
  },
});
export const { toggleSidebar, avatarDropdown } = headerSlice.actions;
export default headerSlice.reducer;
