import {FILTER_HOBBY, FILTER_PROFESSION} from "../constans/constans";

let initialState = {
    users: [
        {
            id: 1,
            name: 'Monica',
            profession: 'HR',
            gender: 'female',
            age: 25,
            hobby: 'sing'

        },
        {
            id: 2,
            name: 'Jason',
            profession: 'Developer',
            gender: 'male',
            age: 32,
            hobby: 'football'

        },
        {
            id: 3,
            name: 'Artur',
            profession: 'Blogger',
            gender: 'male',
            age: 19,
            hobby: 'paint'

        },
        {
            id: 4,
            name: 'Erica',
            profession: 'HR',
            gender: 'female',
            age: 22,
            hobby: 'sing'

        },
        {
            id: 5,
            name: 'Piter',
            profession: 'Manager',
            gender: 'male',
            age: 30,
            hobby: 'football'

        },
        {
            id: 6,
            name: 'Sasha',
            profession: 'Developer',
            gender: 'male',
            age: 20,
            hobby: 'movie'

        },
        {
            id: 7,
            name: 'Gloria',
            profession: 'Blogger',
            gender: 'female',
            age: 25,
            hobby: 'paint'

        },
        {
            id: 8,
            name: 'Carl',
            profession: 'Singer',
            gender: 'male',
            age: 42,
            hobby: 'read'

        },
        {
            id: 9,
            name: 'Alex',
            profession: 'Developer',
            gender: 'male',
            age: 25,
            hobby: 'play guitar'

        },
        {
            id: 10,
            name: 'Sarra',
            profession: 'HR',
            gender: 'female',
            age: 21,
            hobby: 'piano'

        },
        {
            id: 11,
            name: 'Mark',
            profession: 'Singer',
            gender: 'male',
            age: 81,
            hobby: 'play guitar'

        },
        {
            id: 12,
            name: 'Sonya',
            profession: 'Manager',
            gender: 'female',
            age: 22,
            hobby: 'piano'

        },
        {
            id: 13,
            name: 'Victoria',
            profession: 'Manager',
            gender: 'female',
            age: 23,
            hobby: 'read'

        }
    ],
    loading: true,
    filterJobs: '',
    filterHobby: '',
    activeFilter: ''
};

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case FILTER_PROFESSION:
            return {
                ...state,
                filterJobs: action.payload,
                activeFilter: action.payload
            };
        case FILTER_HOBBY:
            return {
                ...state,
                filterHobby: action.payload,
                activeFilter: action.payload
            };
        default:
            return state;
    }
};

export default reducer;