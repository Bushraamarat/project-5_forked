import { configureStore } from "@reduxjs/toolkit";
// import the reducer
import index from "./reducer/auth/index";
export default configureStore({
  // the reducer object is empty for now but after creating reducers we add them to this object
  reducer: {
    auth:index,
   
  },
});