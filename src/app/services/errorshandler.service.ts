// https://www.tektutorialshub.com/angular/angular-http-error-handling/#http-error-handling-example
//
// https://medium.com/@nicowernli/angular-captura-todos-los-errores-de-httpclient-mediante-un-httpinterceptor-2cead03bb654
//
// https://jasonwatmore.com/post/2019/04/16/angular-7-custom-modal-window-dialog-box
//

import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { ApiErrorsComponent } from '../components/api-errors/api-errors.component';

@Injectable({
  providedIn: 'root'
})


export class ErrorshandlerService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
//        this.myModal = document.createElement("div");
//        document.body.appendChild( this.myModal );
//        this.myModal.open()
        const modal = document.getElementById('apiError');
        modal.style.display = 'block';
        console.log('error is intercept');
        console.error(error);
        return throwError(error.message);
      })
    )
  }
}
