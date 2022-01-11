import { createSlice } from "@reduxjs/toolkit";

const filtersReducer = createSlice({
    name: 'filters',
    initialState:{
        search:'',
        status:'All',
        priorities:[]
    },
    reducers:{
        filterSearchText: (state, action) => {
            state.search = action.payload;
        },
        filterByStatus: (state, action) => {
            state.status = action.payload;
        },
        filterBypriorities: (state, action) => {
            state.priorities = action.payload;
        }
    }
});

export default filtersReducer;