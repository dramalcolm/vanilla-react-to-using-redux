import * as actionTypes from '../actions';

const Initialstate = {
    persons: [],
};

// Reducer
const reducer = (state = Initialstate, action) => {
    switch(action.type){

        case actionTypes.ADD_USER:

            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personInfo.name,
                age: action.personInfo.age
            };
            return{
                ...state,
                persons: state.persons.concat( newPerson ),
            }
        case actionTypes.DEL_USER:
            return{
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }

    }

    return state;
};

export default reducer;