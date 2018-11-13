import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MyBooksComponent } from './components/my-books/my-books.component';
import { RouterTestingModule } from '@angular/router/testing';

const PUBLIC_ROUTES: Routes = [
    { path: 'login', component: LoginComponent }
];

const USER_ROUTES: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { role: ['user'] } },
    { path: 'categorias', component: CategoryComponent, canActivate: [AuthGuard], data: { role: ['user'] } },
    { path: 'mis-libros', component: MyBooksComponent, canActivate: [AuthGuard], data: { role: ['user'] } }
];

const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: PublicLayoutComponent, children: PUBLIC_ROUTES },
    { path: '', component: UserLayoutComponent, children: USER_ROUTES },
    { path: '**', redirectTo: '/404' }
];

export const routing = RouterModule.forRoot(ROUTES);
export const routingTest = RouterTestingModule.withRoutes(ROUTES);