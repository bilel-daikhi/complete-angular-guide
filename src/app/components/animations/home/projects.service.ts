import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  endPoint: string =
    'https://bilel-daikhi-portfolio-default-rtdb.europe-west1.firebasedatabase.app/projects.json';
  constructor(private http: HttpClient) {}
  public getProjetsLandingPage() {
    return this.http.get(this.endPoint);
  }
}
