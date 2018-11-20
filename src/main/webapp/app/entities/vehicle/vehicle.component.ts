import { Component, OnDestroy, OnInit } from '@angular/core';
import { JhiAlertService } from 'ng-jhipster';
import { Vehicle } from 'app/entities/vehicle/vehicle.model';
import { EntityService } from '../../../entity.service';
import { County } from 'app/entities/county/county.model';

@Component({
    selector: 'jhi-vehicle',
    templateUrl: './vehicle.component.html'
})
export class VehicleComponent implements OnInit, OnDestroy {
    vehicle: Vehicle;
    vehicleList: any;

    constructor(private alertService: JhiAlertService, private entityService: EntityService) {
        this.vehicle = new Vehicle();
    }

    ngOnInit() {
        this.entityService.getAll().subscribe(vehicles => (this.vehicleList = vehicles as Vehicle[]));
        console.log(this.vehicleList);
    }

    public trackByFn(index, item) {
        return index;
    }

    ngOnDestroy() {}

    save(): void {
        if (this.vehicle.id === undefined) {
            this.entityService.create(this.vehicle).subscribe();
        } else {
            this.entityService.update(this.vehicle).subscribe();
        }
    }
}
