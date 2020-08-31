import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService {

  constructor() { }
  intercept(req, next) {
    let tokenAuthorization = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + (localStorage.getItem('token') || 'falseToken')
      }
    })
    return next.handle(tokenAuthorization);
  }
}
