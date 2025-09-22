/* import { CanActivateFn } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.isAuthenticated$;
}; */

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    tap((isAuth) => console.log('authGuard -> isAuthenticated:', isAuth)),
    map((isAuth) => {
      if (!isAuth) {
        router.navigate(['/home']);
        return false;
      }
      return true;
    })
  );
};
