import { CanActivateFn ,Router} from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';
export const authGuard: CanActivateFn = () => {
  const authservice = inject(AuthService);
  const router=inject(Router);
  let result=authservice.isLogged();
  if(result){
    return true;
  }
  router.navigate(['/login']);
  return false;
  
};
