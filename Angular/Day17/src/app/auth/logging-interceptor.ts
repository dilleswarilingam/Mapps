import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('===== Request Started =====');
  console.log('URL:', req.url);
  console.log('Method:', req.method);
  console.log('Body:', req.body);

  return next(req);

};
