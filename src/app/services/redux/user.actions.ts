import { Action } from 'rxjs/internal/scheduler/Action';
import { User } from 'src/app/models/user';

export const ADD_USER = 'ADD_USER';
    // now ADD_INGREDIENT in the case
    
export class AddUser implements Action{
    readonly type = ADD_USER;

    contructor(public payload: User){
        
}
}