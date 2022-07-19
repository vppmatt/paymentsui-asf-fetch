import { createStore, configureStore } from "redux";

const initialState = { countries : [] , lastFetch : null , userName:""};

const paymentsReducer = (state = initialState, action) => {
    // {type : "clear-down"}   - remove all data back to initial state
    // {type : "refresh-countries", value : []} - update the countris + set the value of last fetch

    if (action.type === "clear-down") {
        return initialState;
    }
    else if (action.type === "refresh-countries") {
        return {...state, countries : action.value.countries , lastFetch : new Date()}
    }
    else {
        console.log("unknown redux action " + action.type);
        return state;
    }

}

//const store = createStore(paymentsReducer);
const store = configureStore({reducer : paymentsReducer});

export default store;