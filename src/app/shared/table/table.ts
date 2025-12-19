import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../features/users/users.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table<T = any> {
  @Input() dataColumn: any;
  @Input() dataTable$!: Observable<T[]>;
  @Input() loading = false;
  
  @Output() rowClick = new EventEmitter<T>();

  resolveValue(row: any, path: string): any {
    return path
      .split('.')
      .reduce((acc, key) => acc?.[key], row);
  }
}
