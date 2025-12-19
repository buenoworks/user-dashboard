import { ActionReducer } from '@ngrx/store';

export function localStorageMetaReducer(reducer: ActionReducer<any>) {
  return (state: any, action: any) => {
    const nextState = reducer(state, action);

    if (nextState.users?.users?.length) {
      localStorage.setItem(
        'users',
        JSON.stringify(nextState.users.users)
      );
    }

    return nextState;
  };
}
