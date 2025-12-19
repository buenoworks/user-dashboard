// src/app/store/loading/loading.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { startLoading, stopLoading } from './loading.actions';

export interface LoadingState {
  loading: boolean;
}

export const initialLoadingState: LoadingState = {
  loading: false
};

export const loadingReducer = createReducer(
  initialLoadingState,
  on(startLoading, () => ({ loading: true })),
  on(stopLoading,  () => ({ loading: false }))
);
