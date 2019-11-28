import { createSelector } from 'reselect';
import React from 'react';

export const getUsers = (state) => {
    return state.users
};

export const getUsersHobby = (state) => {
    return state.filterHobby
};

export const getFilterProfession = (state) => {
    return state.filterJobs
};

export const findDuplicateProfession = (users) => {
    const prof = users.reduce((acc, user) => {
        return acc.includes(user.profession) ? acc : [...acc, user.profession]
    }, []);
    return prof.map((p, index) => <option key={index}>{p}</option>)
};

export const activeFilters = (state) => {
  return state.activeFilter
};

export const filterUsers = createSelector(getUsers, getFilterProfession, getUsersHobby, activeFilters,  (users, filterJobs, filterHobby, activeFilter) => {
   return(
           activeFilter ===  filterHobby ?
           users.filter(user => filterHobby ? user.hobby === filterHobby : users) :
           users.filter(user => filterJobs ? user.profession === filterJobs : users)
   )
});

