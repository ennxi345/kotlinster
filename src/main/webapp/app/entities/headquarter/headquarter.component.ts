import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { JhiAlertService } from 'ng-jhipster';
import { EntityService } from '../../../entity.service';
import { Headquarter } from 'app/entities/headquarter/headquarter.model';
import { County } from 'app/entities/county/county.model';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
    selector: 'jhi-headquarter',
    templateUrl: './headquarter.component.html'
})
export class HeadquarterComponent implements OnInit, OnDestroy {
    headquarter: Headquarter;
    headquarterList: Headquarter[];
    countyList: County[];
    county: County;
    url = 'api/headquarter';
    modalRef: BsModalRef;

    constructor(
        private alertService: JhiAlertService,
        private router: Router,
        private entityService: EntityService,
        private modalService: BsModalService
    ) {
        this.headquarter = new Headquarter();
        this.county = new County();
        this.faszom = new Headquarter();
    }

    ngOnInit() {
        this.entityService.getAll('api/county').subscribe(counties => (this.countyList = counties as County[]));
        this.entityService.getAll(this.url).subscribe(headquarters => (this.headquarterList = headquarters as Headquarter[]));
    }

    public trackByFn(index, item) {
        return index;
    }

    ngOnDestroy() {}

    findCounty(countyId: number) {
        return this.countyList.find(x => x.id === countyId);
    }

    onNavigate(id: number) {
        this.router.navigateByUrl(`headquarter/` + id);
    }

    onDelete(id: number) {
        this.entityService.delete(id, this.url).subscribe();
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    save() {
        console.log(this.headquarter);
        if (this.headquarter.id === undefined) {
            this.entityService.create(this.headquarter, this.url).subscribe();
        } else {
            this.entityService.update(this.headquarter, this.url).subscribe();
        }
    }

    cancel() {
        this.router.navigateByUrl('/headquarter');
    }
}
