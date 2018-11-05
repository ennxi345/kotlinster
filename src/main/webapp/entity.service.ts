import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { JhiAlertService } from 'ng-jhipster';
import { createRequestOption } from './app/shared';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from 'app/entities/vehicle/vehicle.model';

@Injectable()
export class EntityService {
    private resourceUrl = 'api/vehicledto';

    constructor(private http: HttpClient, private alertService: JhiAlertService) {}

    create(entity: any): Observable<any> {
        const copy = entity;
        return this.http.post(this.resourceUrl, copy);
    }

    update(entity: any): Observable<any> {
        const copy = entity;
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();

            return res.json();
        });
    }

    find(id: number): Observable<any> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    getAll(): Observable<any> {
        return this.http.get(`${this.resourceUrl}/all`);
    }

    delete(id: number) {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
}
