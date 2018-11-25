import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { JhiAlertService } from 'ng-jhipster';
import { createRequestOption } from './app/shared';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'app/entities/vehicle/vehicle.model';

@Injectable()
export class EntityService {
    private resourceUrl = 'api/';

    constructor(private http: HttpClient, private alertService: JhiAlertService) {}

    create(entity: any, url: string): Observable<any> {
        const copy = entity;
        return this.http.post(this.resourceUrl + url, copy);
    }

    update(entity: any, url: string): Observable<any> {
        const copy = entity;
        return this.http.put(this.resourceUrl + url, copy).map((res: Response) => {
            const jsonResponse = res.json();

            return res.json();
        });
    }

    find(id: number, url: string): Observable<any> {
        return this.http.get(`${this.resourceUrl + url}/${id}`);
    }

    getAll(url: string): Observable<any> {
        return this.http.get(`${this.resourceUrl + url}/all`);
    }

    delete(id: number, url: string) {
        return this.http.delete(`${this.resourceUrl + url}/${id}`);
    }
}
