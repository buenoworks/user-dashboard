import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';
import { User } from '../users.service';
import { selectAllUsers } from '../store/users.selectors';
import { loadUsers } from '../store/users.actions';
import { UserCard } from '../../../shared/user-card/user-card';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, UserCard, RouterModule],
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails {

  user$!: Observable<User | undefined>;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) {

    const userId$ = this.route.paramMap.pipe(
      map(params => Number(params.get('id')))
    );

    const users$ = this.store.select(selectAllUsers).pipe(
      tap(users => {
        if (!users.length) {
          this.store.dispatch(loadUsers());
        }
      })
    );

    this.user$ = combineLatest([userId$, users$]).pipe(
      map(([id, users]) => users.find(u => u.id === id))
    );
  }
}
