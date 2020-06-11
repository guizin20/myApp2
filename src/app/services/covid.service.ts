import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { covid } from '../interfaces/covid';

@Injectable({
  providedIn: 'root'
})

export class CovidService {
  private caminhoPadrao = "https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/";
  
  constructor(public http:HttpClient) { }

  public getCovidApi(uf: string):Observable<any> {
    return this.http.get(`${this.caminhoPadrao}${uf}`);
  }

}
