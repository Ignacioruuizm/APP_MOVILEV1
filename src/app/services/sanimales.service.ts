import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAnimales } from 'src/app/interfaces/ianimales'; 
import { IAnimal } from '../interfaces/ianimal';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class SAnimalesService {

  private apiUrl = `${environment.apiURL}/animales`;

  constructor(private http: HttpClient) { }

  listarAnimales(): Observable<IAnimales[]> {
    return this.http.get<IAnimales[]>(this.apiUrl);
  }

  crearAnimal(newAnimal: IAnimal): Observable<IAnimal> {
    return this.http.post<IAnimal>(this.apiUrl, newAnimal);
  }

  getAnimalByID(id: number): Observable<IAnimales> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IAnimales>(url);
  }
  actualizarAnimales(id: number, animal: IAnimales): Observable<IAnimales> {
    const url = `${this.apiUrl}/${id}`; 
    return this.http.put<IAnimales>(url, animal);
  }

  eliminarAnimales(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}