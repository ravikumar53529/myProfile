import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   public data:string='../../assets/data/images.json'
  constructor(private http:HttpClient) { }

  public getData():Observable<Data[]>{
    return this.http.get<Data[]>(this.data)
  }
}
