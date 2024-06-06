import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url = "http://localhost:5000/api/product";
  constructor(private http: HttpClient) { }

  
getProducts(): Observable < Product[] > {
  return this.http.get<Product[]>(this.url)
}
}
