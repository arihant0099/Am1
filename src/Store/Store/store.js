import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice.jsx";
import mainCategorySlice from "../reducers/MainCategorySlice.jsx";
import cartSlice from "../reducers/cartSlice.jsx";
import headerSlice from "../reducers/headerLoginSlice.jsx";
import selectAddressSlice from "../reducers/selectAddressSlice.jsx";
import addressSlice from "../reducers/addressSlice.jsx";
import searchParamSlice from "../reducers/searchParamSlice.jsx";

const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    mainCategorySlice: mainCategorySlice.reducer,
    cartSlice: cartSlice.reducer,
    headerSlice: headerSlice.reducer,
    selectAddressSlice: selectAddressSlice.reducer,
    addressSlice: addressSlice.reducer,
    searchParamSlice: searchParamSlice.reducer
  },
});

export default store;