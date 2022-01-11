import { createSlice } from "@reduxjs/toolkit";

const todoListReducer = createSlice({
    name:'todoList',
    initialState:[
        {id: 1, name:"Learn Yoga", priority: "High", completed:false},
        {id: 2, name:"Learn React", priority: "Medium", completed:true},
        {id: 3, name:"Learn .Net Core", priority: "Low", completed:false}
    ],
    reducers:{
        addTodo: (state, action) =>{
            state.push(action.payload);
        },
        updateStatusTodo: (state, action) => {
            let todo = state.find(x => x.id === action.payload);
            todo.completed = !todo.completed;
        }
    }
});

export default todoListReducer;