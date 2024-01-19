import { CanActivateFn } from '@angular/router';

export const postguardGuard: CanActivateFn = (route, state) => {
  if(window.localStorage.getItem('logged')){
    return true
  }
  return false;
};
