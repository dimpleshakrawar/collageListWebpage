import { createSlice } from "@reduxjs/toolkit";
import collageData from "../../collageData.json";

export const collageDataSlice = createSlice({
  name: "allCollageDetails",
  initialState: {
    searchData: [],
    listData: collageData,
    ascendingOrderState: true,
    currentPage: 1,
    itemsPerPage: 10,
    loading: false,
  },
  reducers: {
    handleSearchPrescription: (state, action) => {
      if (action.payload !== "") {
        const filterSearchData = state.listData.filter((data) =>
          data.collageDetails.name
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        );
        return {
          ...state,
          searchData: filterSearchData,
        };
      } else {
        return {
          ...state,
          searchData: [],
        };
      }
    },

    handleSortData: (state, { payload }) => {
      const allCollageData =
        state.searchData.length > 0 ? state.searchData : state.listData;
      // sorting by id
      if (payload === "id") {
        state.ascendingOrderState
          ? allCollageData.sort((a, b) => a.id - b.id)
          : allCollageData.sort((a, b) => b.id - a.id);
      }
      // sorting by fees
      else if (payload === "fees") {
        state.ascendingOrderState
          ? allCollageData.sort(
              (a, b) =>
                parseFloat(a.courseFees.fees.replace(/,/g, "")) -
                parseFloat(b.courseFees.fees.replace(/,/g, ""))
            )
          : allCollageData.sort(
              (a, b) =>
                parseFloat(b.courseFees.fees.replace(/,/g, "")) -
                parseFloat(a.courseFees.fees.replace(/,/g, ""))
            );
      }
      // sorting by review
      else {
        state.ascendingOrderState
          ? allCollageData.sort(
              (a, b) =>
                parseFloat(a.review.review) - parseFloat(b.review.review)
            )
          : allCollageData.sort(
              (a, b) =>
                parseFloat(b.review.review) - parseFloat(a.review.review)
            );
      }
      state.ascendingOrderState = !state.ascendingOrderState;
    },
    nextPage: (state) => {
      state.currentPage++;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  handleSearchPrescription,
  handleSortData,
  nextPage,
  setLoading,
} = collageDataSlice.actions;
export default collageDataSlice.reducer;
