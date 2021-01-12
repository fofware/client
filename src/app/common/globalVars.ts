import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Globals {
  role: string = 'test';

  private _apiError: {
    hide: true;
    status: 0;
    error: {};
  };
  public get apiError(): {
    hide: true;
    status: 0;
    error: {};
  } {
    return this._apiError;
  }
  public set apiError(value: {
    hide: true;
    status: 0;
    error: {};
  }) {
    this._apiError = value;
  }
}