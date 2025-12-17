import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap, debounceTime, startWith, map, catchError } from 'rxjs/operators';
import { UsersService, User } from '../users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.html',
  styleUrl: './users-page.scss',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class UsersPage implements OnInit {
  users$!: Observable<User[]>;
  filteredUsers$!: Observable<User[]>;
  loading = false;
  errorMessage = '';

  searchControl = new FormControl('');

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.loading = true;

    // carrega todos os usuários uma so vez
    this.users$ = this.usersService.getAllUsers().pipe(
      catchError(err => {
        this.errorMessage = 'Erro ao carregar usuários';
        return of([]);
      })
    );

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

    
    this.users$.subscribe(() => this.loading = false);
  }
}
