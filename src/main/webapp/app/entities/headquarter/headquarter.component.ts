import { Component, OnDestroy, OnInit } from '@angular/core';
import { JhiAlertService } from 'ng-jhipster';
import { EntityService } from '../../../entity.service';
import { Headquarter } from 'app/entities/headquarter/headquarter.model';
import { County } from 'app/entities/county/county.model';

@Component({
    selector: 'jhi-headquarter',
    templateUrl: './headquarter.component.html'
})
export class HeadquarterComponent implements OnInit, OnDestroy {
    headquarter: Headquarter;
    headquarterList: Headquarter[];
    countyList: County[];
    county: County;
    url = 'headquarter';

    constructor(private alertService: JhiAlertService, private entityService: EntityService) {
        this.headquarter = new Headquarter();
        this.county = new County();
    }

    ngOnInit() {
        this.entityService.getAll('county').subscribe(counties => (this.countyList = counties as County[]));
        this.entityService.getAll(this.url).subscribe(headquarters => (this.headquarterList = headquarters as Headquarter[]));
    }

    public trackByFn(index, item) {
        return index;
    }

    ngOnDestroy() {}

    findCounty(countyId: number) {
        return this.countyList.find(x => x.id === countyId);
    }
}
