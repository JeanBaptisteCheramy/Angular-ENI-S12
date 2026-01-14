import {Routes} from '@angular/router';
import {Mod5demo1About} from './mod5/mod5demo1-about/mod5demo1-about';
import {Mod5demo1} from './mod5/mod5demo1/mod5demo1';
import {Mod5detail} from './mod5/mod5detail/mod5detail';
import {AuthGuard} from './mod5/guard/auth-guard';

export const routes: Routes = [
  { path: '', component: Mod5demo1 },
  { path: 'about', component: Mod5demo1About },
  { path: 'detail/:id', component: Mod5detail, canActivate: [AuthGuard] },
];
