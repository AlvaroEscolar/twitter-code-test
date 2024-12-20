import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../env/env';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private tokenKey = 'tokenTwitter';

	constructor(private http: HttpClient,) {}

    loginUser(userName: string, password: string): Observable<string> {
		//The password  must be sent encrypted with library such as Crypto-JS
		return this.http.post<string>(`${env.api}auth/login`, {
			userName,
			password
		});
	}

	registerUser(user: Auth): Observable<string> {
		//The password  must be sent encrypted with library such as Crypto-JS
		return this.http.post<string>(`${env.api}auth/register`, {
			user
		});
	}

    //Return true if the token exists, else false
	isLoggedIn(): boolean {
		const token = localStorage.getItem(this.tokenKey);
		return !!token;
	}

	saveToken(token: string): void {
		localStorage.setItem(this.tokenKey, token);
	}
    
    //Remove the token before logout session
	logout(): void {
        localStorage.removeItem(this.tokenKey); 
	}
    
    //Returns the stored token
	getToken(): string | null {
        return localStorage.getItem(this.tokenKey); 
	}
}
