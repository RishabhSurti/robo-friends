import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Robot } from '../models/robot.interface';


const Robot_Api = 'http://localhost:3000/robots';
@Injectable()
export class RoboArrayComponentService
{
    constructor(private http: HttpClient) { }

    getUsers():Observable<Robot[]>
    {
        return this.http.get(Robot_Api).map((response:Robot[]) => response)
    }
}
