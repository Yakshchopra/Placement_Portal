import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpCacheService } from './http-cache.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService {

  constructor(private cacheService: HttpCacheService) { }
  intercept(req, next) {
    let tokenAuthorization;

    tokenAuthorization = req.clone({

      setHeaders: {
        Authorization: 'Bearer ' + (localStorage.getItem('token') || 'falseToken')
      }
    });
    // return next.handle(tokenAuthorization);
    if (req.method !== 'GET') {
      console.log(`Invalidating cache: ${req.method} ${req.url}`);
      this.cacheService.invalidateCache();
      return next.handle(tokenAuthorization);
    }

    // attempt to retrieve a cached response
    const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

    // return cached response
    if (cachedResponse) {
      return of(cachedResponse);
    }

    // send request to server and add response to cache
    return next.handle(tokenAuthorization)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.cacheService.put(req.url, event);
          }
        })
      );
  }
}
