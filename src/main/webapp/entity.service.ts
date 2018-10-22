import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { JhiAlertService } from 'ng-jhipster';
import { createRequestOption } from './app/shared';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EntityService {
    private resourceUrl = 'api/vehicle';

    constructor(private http: HttpClient, private alertService: JhiAlertService) {}

    create(entity: any): Observable<any> {
        const copy = entity;
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();

            return res.json();
        });
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

    delete(id: number) {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private getFilterCallback() {
        return function(r: any, params: URLSearchParams) {
            if (r.dontes) {
                params.set('dontes.equals', r.dontes);
            }
            if (r.iktatoszam) {
                const ikt = r.iktatoszam.replace(/\?/g, '_').replace(/\*/g, '%');

                params.set('iktatoszam.contains', ikt);
            }

            if (r.sort) {
                params.append('sort', 'createdDate,desc');
            }
            if (r.intezkedes && 0 !== r.intezkedes.length) {
                params.set('intezkedes.equals', r.intezkedes);
            }
            if (r.statusz || r.statusz === 0) {
                params.set('statusz.equals', r.statusz);
            }
            if (r.ugyfel && 0 !== r.ugyfel.length) {
                const ugy = r.ugyfel.replace(/\?/g, '_').replace(/\*/g, '%');

                params.set('ugyfel', ugy);
            }
            if (r.megyeId) {
                params.set('megye.equals', r.megyeId);
            }
        };
    }
}
