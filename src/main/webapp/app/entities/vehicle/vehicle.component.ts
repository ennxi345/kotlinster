import { Component, OnDestroy, OnInit } from '@angular/core';
import { JhiAlertService } from 'ng-jhipster';
import { Vehicle } from 'app/entities/vehicle/vehicle.model';
import { EntityService } from '../../../entity.service';

@Component({
    selector: 'jhi-vehicle',
    templateUrl: './vehicle.component.html'
})
export class VehicleComponent implements OnInit, OnDestroy {
    vehicle: Vehicle;
    constructor(private alertService: JhiAlertService, private entityService: EntityService) {
        this.vehicle = new Vehicle();
    }

    ngOnInit() {}

    ngOnDestroy() {}

    save(): void {
        if (this.vehicle.id === undefined) {
            this.entityService.create(this.vehicle);
        } else {
            this.entityService.update(this.vehicle);
        }
    }
}
