import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './users.actions';
import { User } from '../users.service';

export interface UsersState {
  users: User[];
  error: unknown | null;
}

const savedUsers = localStorage.getItem('users');

export const initialState: UsersState = {
  users: savedUsers ? JSON.parse(savedUsers) : [],
  error: null
};

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, error: null })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error }))
);
