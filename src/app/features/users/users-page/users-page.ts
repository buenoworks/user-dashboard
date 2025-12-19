import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap, debounceTime, startWith, map, catchError } from 'rxjs/operators';
import { User } from '../users.service';
import { Store } from '@ngrx/store';
import { selectAllUsers } from '../store/users.selectors';
import { loadUsers } from '../store/users.actions';
import { SearchInput } from '../../../shared/search-input/search-input';
import { Table } from '../../../shared/table/table';
import { TableColumn } from '../../../shared/table/table.models';
import { selectIsLoading } from '../../../store/loading/loading.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.html',
  styleUrl: './users-page.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchInput, Table],
})
export class UsersPage implements OnInit {
  searchControl = new FormControl('');

  columnsTable: TableColumn[] = [];
  users$!: Observable<User[]>;
  filteredUsers$!: Observable<User[]>;

  loading = false;
  errorMessage = '';

  isLoading$: any;


  constructor(private store: Store, private router: Router) {
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  ngOnInit() {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.select(selectAllUsers)
    

    this.columnsTable = [
      { key: 'name', label: 'Nome' },
      { key: 'email', label: 'E-mail' },
      { key: 'company.name', label: 'Empresa' },
      { key: 'actions', label: 'Ações' }
    ]
    
    // busca local com debounce
    this.filteredUsers$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap(searchText => {
        const text = searchText?.toLowerCase() ?? '';
        return this.users$.pipe(
          map(users =>
            users.filter(u =>
              u.name.toLowerCase().includes(text) ||
              u.email.toLowerCase().includes(text) ||
              u.company?.name.toLowerCase().includes(text)
            )
          )
        );
      })
    );
  }

  goToDetails(user: any) {
    this.router.navigate(['/users', user.id]);
  }
}
