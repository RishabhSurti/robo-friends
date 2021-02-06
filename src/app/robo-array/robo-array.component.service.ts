import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

 
const Robot_Api = 'https://jsonplaceholder.typicode.com/users';
@Injectable()
export class RoboArrayComponentService
{
    constructor(private http: HttpClient) { }
    
    getUsers():Observable<Object>
    {
        return this.http.get(Robot_Api).map((response: Response) => response)
    }
}
