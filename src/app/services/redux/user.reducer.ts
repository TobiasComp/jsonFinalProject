import { User } from '../../models/user';
import { Action } from 'rxjs/internal/scheduler/Action';
import * as Users from './user.actions';

const initialState = {

    users: [{
        name: "Redux",
        username: "Ready"
    }]
}

export function userReducer(state = initialState, action: Users.AddUser) {
    switch (action.type) {
        case Users.ADD_USER:
            return { ...state, users: [...state.users, action] }
        default:
            return state;

    }
}


// export function shoppingListReducer(state = initialState, action:Action){
// 	switch(action.type) {
// 		case 'ADD_INGREDIENT':

// 			return {...state, ingredients: [...state.ingredients, action] 
// 			big nonon to modify the state(sounds like react)
// 		default: 
// 			return state;
// 	}