import { Component } from '@angular/core';
import { selectIsLoading } from '../../store/loading/loading.selectors';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.html',
  styleUrl: './loading-spinner.scss',
  standalone: true,
  imports: [CommonModule]
})
export class LoadingSpinner {
  isLoading$;
  
  constructor(private store: Store) {
    this.isLoading$ = this.store.select(selectIsLoading);
  }

}
