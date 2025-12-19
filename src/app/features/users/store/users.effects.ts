import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../users.service';
import {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure
} from './users.actions';
import {
  startLoading,
  stopLoading
} from '../../../store/loading/loading.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UsersService);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() => [
        startLoading()
      ])
    )
  );

  loadUsersApi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.usersService.getAllUsers().pipe(
          map(users => loadUsersSuccess({ users })),
          catchError(error => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  stopLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsersSuccess, loadUsersFailure),
      map(() => stopLoading())
    )
  );
}
