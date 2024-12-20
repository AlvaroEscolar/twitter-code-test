import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'dashboard'
	},
	{
		path: 'dashboard',
		loadComponent: () =>
			import('./components/dashboard/feed/feed.component').then((m) => m.FeedComponent),
		canActivate: [AuthGuard]
	},
	{
		path: 'auth/login',
		loadComponent: () => import('./components/auth/login/login.component').then((m) => m.LoginComponent)
	},
	{
		path: 'auth',
		loadComponent: () => import('./components/auth/login/login.component').then((m) => m.LoginComponent)
	},
	{
		path: 'post/:id',
		loadComponent: () => import('./components/post/post-detail/post-detail.component').then((m) => m.PostDetailComponent),
		canActivate: [AuthGuard]
	},
	{
		path: 'profile/:username',
		loadComponent: () => import('./components/user/profile/profile.component').then((m) => m.ProfileComponent),
		canActivate: [AuthGuard]
	},
	{
		path: '**',
		loadComponent: () =>
			import('./components/extra-pages/page404/page404.component').then((m) => m.Page404Component)
	}
];
