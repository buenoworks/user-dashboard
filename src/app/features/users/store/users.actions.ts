import { createAction, props } from '@ngrx/store';
import { User } from '../users.service';

export const loadUsers = createAction('[Users] Load');

export const loadUsersSuccess = createAction(
    '[Users] Load Success',
    props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
    '[Users] Load Failure',
    props<{ error: unknown }>()
);
