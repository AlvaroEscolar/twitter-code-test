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
			import('./components/dasboard/feed/feed.component').then((m) => m.FeedComponent),
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
	/*
	{
		path: 'dashboard',
		loadChildren: () =>
			import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'auth/login',
		loadComponent: () => import('./modules/auth/login/login.component').then((m) => m.LoginComponent)
	},
	{
		path: 'auth',
		loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
	},
	{
		path: 'post/:id',
		loadChildren: () => import('./modules/post/post.module').then((m) => m.PostModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'profile/:username',
		loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule),
		canActivate: [AuthGuard]
	},
	{
		path: '**',
		loadChildren: () =>
			import('./modules/extra-pages/extra-pages.module').then((m) => m.ExtraPagesModule)
	}*/
];
