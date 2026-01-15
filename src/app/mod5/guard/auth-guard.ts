import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../mod4/service/auth-service';

export const AuthGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }
  else {
    router.navigate(['/about'],{queryParams:{message: "Accès interdit"}});
    return false;
  }
};
