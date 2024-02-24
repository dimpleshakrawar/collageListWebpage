import { configureStore } from "@reduxjs/toolkit";
import collageDataSliceReducer from "./collageDataSlice";

export default configureStore({
  reducer: {
    allCollageDetails: collageDataSliceReducer,
  },
});
