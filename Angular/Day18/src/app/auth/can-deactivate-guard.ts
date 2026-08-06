import { CanDeactivateFn } from '@angular/router';
import { Employees } from '../employee/employees/employees';

export const canDeactivateGuard: CanDeactivateFn<Employees> = (component) => {
  console.log(component);
  return confirm('Are you sure you want to leave this page?');

};