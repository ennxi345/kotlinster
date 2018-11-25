import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { JhiAlertService } from 'ng-jhipster';
import { createRequestOption } from './app/shared';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'app/entities/vehicle/vehicle.model';

@Injectable()
export class EntityService {
    constructor(private http: HttpClient, private alertService: JhiAlertService) {}

    create(entity: any, url: string): Observable<any> {
        const copy = entity;
        return this.http.post(url, copy);
    }

    update(entity: any, url: string): Observable<any> {
        const copy = entity;
        return this.http.put(url, copy, { observe: 'response' });
    }

    find(id: number, url: string): Observable<any> {
        return this.http.get(`${url}/${id}`);
    }

    getAll(url: string): Observable<any> {
        return this.http.get(`${url}/all`);
    }

    delete(id: number, url: string) {
        return this.http.delete(`${url}/${id}`);
    }
}
