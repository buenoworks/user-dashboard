import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { loadingReducer } from './app/store/loading/loading.reducer';
import { usersReducer } from './app/features/users/store/users.reducer';
import { UsersEffects } from './app/features/users/store/users.effects';
import { provideHttpClient } from '@angular/common/http';
import { localStorageMetaReducer } from './app/store/meta-reducers/local-storage.metareducer';
import 'zone.js';

bootstrapApplication(App, {
  providers: [
    ...appConfig.providers!,
    provideHttpClient(),
    provideStore(
      {
        loading: loadingReducer,
        users: usersReducer
      },
      {
        metaReducers: [localStorageMetaReducer]
      }
    ),
    provideEffects(UsersEffects)
  ]
})
  .catch((err) => console.error(err));
