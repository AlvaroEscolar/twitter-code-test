import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../core/models/auth.model';
import { AuthService } from '../../../core/services/auth.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	imports: [FormsModule]
})
export class LoginComponent {
	user: Auth = {
		email: '',
		password: '',
		name: '',
		avatar_url: ''
	};
	showLogin: boolean = true;
	confirmPassword: string = '';
	passwordsMatch: boolean = false;
	errorMessage: string = '';

	constructor(private _authService: AuthService, private _router: Router) {}

	register(): void {
		this.errorMessage = '';

		if (this.user.password !== this.confirmPassword) {
			this.passwordsMatch = false;
			return;
		}
		this.passwordsMatch = true;

		firstValueFrom(this._authService.registerUser(this.user))
			.then((token) => {
				this.loginSuccess(token);
			})
			.catch((err) => {
				this.errorMessage = err;
			});
	}

	login(): void {
		this.errorMessage = '';

		firstValueFrom(this._authService.loginUser(this.user.email, this.user.password))
			.then((token) => {
				this.loginSuccess(token);
			})
			.catch((err) => {
				this.errorMessage = err;
			});
	}

	loginSuccess(token: string): void {
		if (token) {
			this._authService.saveToken(token);
			this._router.navigate(['/dashboard']);
		}
	}

	changeForm() {
		this.showLogin = !this.showLogin;
	}
}
