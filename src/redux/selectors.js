import { createSelector } from '@reduxjs/toolkit';

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;

export const todoRemainSelector = createSelector(
    todoListSelector, 
    searchTextSelector,
    filterStatusSelector,
    filterPrioritiesSelector,
    (todoList, searchText, status, priorities) => {
        console.log(priorities);
        if(status.toUpperCase() === 'ALL'){
            return(
                todoList.filter((todo) => {
                    return priorities.length 
                        ? todo.name.toUpperCase().includes(searchText.toUpperCase()) && priorities.includes(todo.priority)
                        : todo.name.toUpperCase().includes(searchText.toUpperCase());
                })
            );
        }

        return (
            todoList.filter((todo) => {
                return todo.name.toUpperCase().includes(searchText.toUpperCase())
                    && (status === 'Completed' ? todo.completed : !todo.completed)
                    && (priorities.length ? priorities.includes(todo.priority) : true);
            })
        );
    }
)