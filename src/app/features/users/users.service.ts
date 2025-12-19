import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;

  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };

  phone: string;
  website: string;

  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      delay(500) // Delay de 5 segundos para visualização do loading
    );
  }
}
