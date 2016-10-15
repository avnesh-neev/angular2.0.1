import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UsersService {

  private _requestOptions: RequestOptions;
  private _baseUrl: string;

  constructor(private http: Http) {
    const headers = new Headers({ 'Accept': 'application/json' });
    this._baseUrl = 'https://api.github.com/users/mralexgray/';
    this._requestOptions = new RequestOptions({ headers: headers });
  }

  /**
   * [getUsers gets all Users repo data using API(EndPoints: 'repos')]
   */
  getUsers() {
    return this.http.get(this.resolveUrl(`repos`), this._requestOptions)
      .map(res => res.json())
      .catch(this.handleError);
  }

  
  /**
   * [resolveUrl will return complete Url]
   * @param  {string} path [partial path(end points)]
   * @return {string}      [complete Path for making API call]
   */
  public resolveUrl(path: string): string {
    var normalized = this._baseUrl.endsWith("/") ? this._baseUrl : this._baseUrl + "/";

    return normalized + path;
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}