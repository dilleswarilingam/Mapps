import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("Interceptor Executed");

  const token = localStorage.getItem('token');

  if (token) {

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

  }

  return next(req);
};






























/*Looging interceptor 

import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('===== Interceptor Executed =====');
  console.log('URL:', req.url);
  console.log('Method:', req.method);
  console.log('Body:', req.body);

  return next(req);
}; */