import { createSlice } from '@reduxjs/toolkit'

export const catSlice = createSlice({
  name: 'cat',
  initialState: {
    catImgArr: [],
    categoryList: [],
    tempId: ""
  },
  reducers: {
    setCatImgArr: (state, action) => {
      state.catImgArr = action.payload
    },
    setCategoryList: (state, action) => {
        state.categoryList = action.payload
    },
    setTempId: (state, action) => {
        state.tempId = action.payload
    },
  },
})

export const { setCatImgArr, setCategoryList, setTempId } = catSlice.actions

export default catSlice.reducer