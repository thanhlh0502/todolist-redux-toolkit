import {configureStore} from '@reduxjs/toolkit';
import filtersReducer from '../components/Filters/reducer';
import todoListReducer from '../components/TodoList/reducer';

const store = configureStore({
    reducer:{
        todoList: todoListReducer.reducer,
        filters: filtersReducer.reducer
    }
})

export default store;