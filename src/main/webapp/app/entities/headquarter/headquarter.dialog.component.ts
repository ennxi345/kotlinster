import { Component, OnDestroy, OnInit } from '@angular/core';
import { Headquarter } from 'app/entities/headquarter/headquarter.model';
import { County } from 'app/entities/county/county.model';
import { JhiAlertService } from 'ng-jhipster';
import { EntityService } from '../../../entity.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'jhi-dialog-headquarter',
    templateUrl: './headquarter.dialog.component.html'
})
export class HeadquarterDialogComponent implements OnInit, OnDestroy {
    headquarter: Headquarter;
    headquarterList: Headquarter[];
    countyList: County[];
    county: County;
    url = 'headquarter';

    constructor(private alertService: JhiAlertService, private entityService: EntityService, private route: ActivatedRoute) {
        this.county = new County();
        this.headquarter = new Headquarter();
    }

    ngOnDestroy(): void {}

    ngOnInit(): void {
        this.entityService.getAll('county').subscribe(counties => (this.countyList = counties as County[]));

        const id = this.route.snapshot.paramMap.get('id');
        this.entityService.find(+id, this.url).subscribe(headquarter => (this.headquarter = headquarter as Headquarter));
    }

    save() {
        if (this.headquarter.id === undefined) {
            this.entityService.create(this.headquarter, this.url).subscribe();
        } else {
            this.entityService.update(this.headquarter, this.url).subscribe();
        }
    }
}
