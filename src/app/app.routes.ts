import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
          import('./features/users/users-page/users-page')
            .then(m => m.UsersPage)
    },
    {
        path: 'users/:id',
        loadComponent: () =>
          import('./features/users/user-details/user-details')
            .then(m => m.UserDetails)
    }
];
